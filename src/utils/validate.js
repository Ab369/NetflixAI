export default function validate(email, password) {
    if (typeof email !== 'string' || typeof password !== 'string') {
      return 'Email and Password must be strings';
    }
  
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  
    if (!isEmail) {
      return 'Invalid email';
    }
    if (!isPassword) {
      return 'Invalid password';
    }
  
    return null;
  }
  