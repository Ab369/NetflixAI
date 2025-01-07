import { useRef, useState } from 'react'
import logo from '../assets/images/logo.png'
import validate from '../utils/validate'
import { useNavigate } from 'react-router'

const Login=()=>{
    const navigate=useNavigate()
    const email=useRef()
    const password=useRef()
    const[showMessage,setShowMessge]=useState(null);

    function handleclick(){
        const message=validate(email.current.value,password.current.value);
         setShowMessge(message)
    }

    return(
        <div className=''>
            <div className="background absolute ">
                <div className='absolute lg:h-full h-[100vh] w-[100vw] bg-black md:opacity-40 opacity-0'></div>
                <img className="lg:h-full h-[100vh]" src='https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg'></img>
            </div>

            <div className="logo absolute w-40 left-32 top-5">
                <img src={logo}></img>
            </div>

            <div className='login z-10 text-white absolute flex flex-col bg-black px-16 py-10 md:gap-20 gap-14 md:bg-opacity-80 bg-opacity-100 lg:left-1/3 md:left-1/4 top-1/4  max-md:w-full'>
                <p className='text-4xl font-bold'>Sign In</p>
                <div className='form flex flex-col gap-5'>
                    <input ref={email} className='email bg-black bg-opacity-10 border-2 border-solid border-gray-500 py-3 px-12' placeholder='Enter your email'></input>
                    <input ref={password} className='password bg-black bg-opacity-10 border-2 border-solid border-gray-500 py-3 px-12' placeholder='password'></input>
                    {showMessage&&<p className='text-red-500'>{showMessage}</p>}
                    <button className='bg-red-600 py-2 rounded-lg' onClick={handleclick}>Sign In</button>
                </div>
                <p>New to Netflix? <span className='font-bold cursor-pointer' onClick={()=>navigate('/signup')}>Sign Up Now</span></p>
            </div>
        </div>
    )
}

export default Login