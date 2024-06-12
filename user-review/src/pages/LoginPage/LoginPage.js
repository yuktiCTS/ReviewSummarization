import React from 'react'

const LoginPage = () => {
  return (
  
    <div className="flex flex-col md:flex-row h-screen"> 
     {/* <div class="md:flex">
    <div class="md:shrink-0"> */}
      <div className="max-h-fit bg-blue-950 p-4  md:w-1/2 flex-grow md:flex-grow-0 "> 
        
        <h2 className="text-white italic">User Review Summarization</h2>
      </div>
      {/* </div> */}
      <div className="bg-slate-900 p-4 md:w-1/2 flex-col  "> 
       
       <div><button type="button" className="py-2.5 px-5 me-2  text-sm font-medium text-white focus:outline-none bg-gray-700 rounded-lg float-right">Register</button>
</div>
<div className="flex items-center justify-between w-full px-5 sm:px-0 ">
      <div className="flex rounded-lg shadow-lg  overflow-hidden max-w-sm lg:max-w-4xl w-full">
   
        <div className="w-full p-8 ">
          <p className="text-2xl  text-white text-center  mb-1">Login to your Account</p>
          <p className="text-medium text-gray-600 text-center mb-1">Enter your Details or choose another method</p>
          <div className="mt-4">
           
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              placeholder='Username'
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
             
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              placeholder='Password'
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Login
            </button>
          </div>
        
          <p className="w-full text-sm text-gray-600 mt-3 flex items-center">
                        <hr className="w-44 h-1 border-1 bg-zinc-500 inline-flex"></hr>
                        <span className="w-1/3 text-medium text-center">OR CONTINUE WITH</span>
                        <hr className="w-44 h-1 border-1 bg-zinc-500 inline-flex"></hr>
                        </p>
            <div className="flex  justify-center w-full " >
            
              <div className="flex w-full justify-center ">
              <button
            className="flex items-center justify-center mt-2 py-2 text-white w-full rounded-lg shadow-md bg-gray-700 hover:bg-gray-100"
          >
                {/* <h className="whitespace-nowrap text-white font-bold py-2 px-4"> */}
                  Sign in with Google
                {/* </h3> */}
                </button>
              </div>

            </div>
       
          <div className=" w-full p-6">
          <p className="text-xl text-gray-600 text-center ">By clicking Continue,you agree to Our</p>
          <div className='flex flex-row px-14'>
            <a
              href="#"
              className="text-medium text-white capitalize text-center w-full"
            >
             
             Terms Of Services
             
            </a>
            <span className='text-gray-700'>and</span>
            <a
              href="#"
              className="text-medium text-white capitalize text-center w-full"
            >
             
           Privacy Policy.
             
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      </div>
    </div>
   
  )
}

export default LoginPage