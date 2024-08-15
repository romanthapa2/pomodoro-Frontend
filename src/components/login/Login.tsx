import React, { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"

interface formState {
  email: string;
  password: string;
}
const Login = () => {
  //   let history = useNavigate();
  const [value, setvalue] = useState<formState>({ email: "", password: "" });
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email: value.email, password: value.password }),
  //     });
  //     const json = await response.json();

  //     if (json.success) {
  //       Cookies.set('accessToken', json.data.accessToken);
  //       history("/");
  //     } else {
  //       return <h1>error</h1>
  //     }
  //   };
  // sets the value when user types in the input form
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen gap-y-6 text-white bg-black flex justify-center items-center flex-col">
      <div className="flex items-center justify-center flex-col gap-3">
      <h1 className="text-4xl font-bold">Pomofocus</h1>
      <h1 className="font-bold text-lg">Login</h1>
      </div>

      <div className=" text-black h-[60%] w-96 bg-white rounded-md flex flex-col justify-center items-center">
        <Button className=" mb-3 bg-white text-black border w-5/6 hover:bg-transparent shadow-md">
        <FcGoogle className="text-lg mr-2"/>
          Login with Google
        </Button>
        <div className="flex items-center w-5/6 mb-2">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-700">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        {/* onSubmit={handleSubmit} */}
        <form className="w-5/6">
          <span className="text-slate-500 text-sm">Email</span>
          <div className="flex flex-col  mb-3 mt-1">
            <input
              name="email"
              type="email"
              className=" p-2 bg-slate-100 rounded-md focus:outline-none"
              placeholder="example@gmail.com"
              onChange={onChange}
            />
          </div>
          <span className="text-slate-500 text-sm">Password</span>
          <div className="flex flex-col mb-5 mt-1">
            <input
              name="password"
              type="password"
              className=" p-2 bg-slate-100 rounded-md focus:outline-none"
              onChange={onChange}
            />
          </div>
          <Button type="submit" className="p-2 w-full text-white bg-black rounded-md">
            Log in with Email
          </Button>
        </form>
        <h2 className="mt-3 underline">Forgot Password</h2>
      </div>
    </div>
  );
};

export default Login;
