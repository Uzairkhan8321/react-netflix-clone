import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [remeberLogin , setRememberLogin] = useState(true);
  const [email , setEmail] = useState("");
  const [password , setpassword] = useState("");

  const { user , logIn } = UserAuth();
  const navigate = useNavigate();



  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
    try {
      await logIn(email,password);
      navigate("/");

    } catch (err) {
      console.log(err);
    }

  }
  return (
   <>
   <div className="w-full h-screen">
    <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="///" />
   
   <div className="bg-black/70 fixed top-0 left-0 w-full h-screen"></div>

   <div className="fixed w-full px-4 py-24 z-20">
    <div className="max-w-[450px] h-[600px] mx-auto bg-black/65 rounded-lg">
      <div className="max-w-[320px] mx-auto py-16">
        <h1 className="text-3xl font-nsans-bold">Log in</h1>
        <form onSubmit={handleFormSubmit}
         className="w-full flex flex-col py-4">
          <input className="p-3 my-2 bg-gray-700 rounded"
          type="email"
          placeholder="email"
          autoComplete="email"
          value = {email}
          onChange={(e) => setEmail(e.target.value)} />

       <input className="p-3 my-2 bg-gray-700 rounded"
          type="password"
          placeholder="password"
          autoComplete="current-password" 
          value = {password}
          onChange={(e) => setpassword(e.target.value)}/>

         <button className="bg-red-600 py-3 my-6 rounded font-nsans-bold">Log in</button>

         <div className="flex justify-between items-center text-gray-600">
          <p><input type="checkbox" className="mr-2" 
            checked = {remeberLogin}
            onChange={(e) => setRememberLogin(!remeberLogin)}
          />
          Remember me</p>
          <p>Need Help?</p>
         </div>
         <p className="my-4">
          <span className="text-gray-600 mr-2">
            New to Netflix?
          </span>
          <Link to="/Signup">Sign up</Link>
         </p>
        </form>
      </div>
    </div>
   </div>
   </div>
   </>
  );
}

export default Login
