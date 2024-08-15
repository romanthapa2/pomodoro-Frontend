import React, { useState } from "react";
import { Button } from "../ui/button";
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
      <h1 className="text-4xl font-bold">Pomofocus</h1>
      <h1 className="font-bold">Login</h1>
      <div className=" text-black h-[55%] w-96 bg-white rounded-md flex flex-col justify-center items-center">
      <Button className=" mb-6 bg-white text-black border w-5/6 hover:bg-transparent">Signup with Google</Button>
        {/* onSubmit={handleSubmit} */}
        <form className="w-5/6">
        <span>Email</span>
          <div className="flex flex-col border  mb-3 ">
            <input name="email" type="email" className=" p-2 bg-slate-100 rounded-md" placeholder="example@gmail.com" onChange={onChange} />
          </div>
          <span>Password</span>
          <div className="flex flex-col border mb-5">
            <input
              name="password"
              type="password"
              className=" p-2 bg-slate-100 rounded-md"
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
