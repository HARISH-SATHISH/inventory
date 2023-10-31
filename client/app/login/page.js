"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { searchuser } from '../database/route';
function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);
const [userform,setuserform]=useState({
    uname:"",
    pass:""
});



const router=useRouter()



  const toggleForm = () => {
    setIsLogin(!isLogin);
 };

  const checkUser=async()=>{
    
      const response = await fetch("/user", {
        method: 'POST', headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userform)})
       if (response.ok)
       router.replace("/")
      else
      window.alert("user not found")
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Handle form submission logic here
    // You can access form values using state variables or form element references
  };

  const adduser=()=>{
    console.log("add user")
  }

  const handlechange=(e)=>{
    const {name,value}=e.target
    setuserform({...userform,[name]:value})
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Username" onChange={handlechange}
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Password"
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700" onClick={isLogin?checkUser:adduser}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              className="text-blue-500 hover:underline"
              onClick={toggleForm}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupForm;
