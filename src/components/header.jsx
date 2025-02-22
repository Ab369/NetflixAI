import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/logo.png'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { adduser, removeuser } from '../utils/userSlice';
import { toggleGPT } from '../utils/gptslice';
import { supported_languages } from '../utils/constants';
import { changeLanguage } from '../utils/configslice';

const Header=()=>{
  const currentUser=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const gptsearch=useSelector((store)=>store.gpt.showGptPage)

    //adding event listener 
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              dispatch(adduser({email:user.email,displayName:user.displayName,profilePic:user.photoURL}))
              navigate('/browse')
            } else {
              // User is signed out
              dispatch(removeuser());
              navigate('/')
            }
          });

          return ()=>unsubscribe(); //to remove event listener
    },[])

  function handleSignOut(){
    signOut(auth).then(()=>navigate('/')).error((err)=>alert(err))
  }

  function toggleGPTsearch(){
    dispatch(toggleGPT())
  }

  function changeGPTLanguage(e){
    dispatch(changeLanguage(e.target.value))
  }

  return(
    <div className='flex fixed z-50 w-full justify-between p-4 bg-gradient-to-b from-gray-900 text-white shadow-lg'>
        <img src={logo} className='w-32'></img>
        <div className='flex items-center gap-2'>
            {gptsearch&&<select className='bg-black' onChange={changeGPTLanguage}>
              {supported_languages.map((language)=><option value={language.value}>{language.name}</option>
              )}
            </select>}
            <button className='p-2 bg-green-600 z-10' onClick={toggleGPTsearch}>{gptsearch?'Homepage':'GPT Search'}</button>
            <img src={currentUser?.profilePic} className='w-8'></img>
            <p>{currentUser?.displayName}</p>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    </div>
  )
}

export default Header;