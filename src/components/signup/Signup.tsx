import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

interface formState {
  email: string;
}

const Signup: React.FC = () => {
    let history = useNavigate();
  const [value, setvalue] = useState<formState>({email: ""});
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const {email} = value;
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const json = await response.json();
      if (json.success) {
        Cookies.set("accessToken", json.data.accessToken);
        history("/");
      } else {
        return <h1>error</h1>;
      }
    };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen bg-black text-white flex justify-center flex-col items-center gap-y-6 ">
      <h1 className="text-4xl font-bold">Pomofocus</h1>
      <h1 className="font-bold">Create Account</h1>
      <div className="h-[45%] bg-white text-black w-96 rounded-md flex flex-col justify-center items-center">
        <Button className=" mb-3 bg-white text-black border w-5/6  hover:bg-transparent shadow-md">
        <FcGoogle className="text-lg mr-2"/>
          Signup with Google
        </Button>
        
        <div className="flex items-center w-5/6 mb-2">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-700">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <form className="w-5/6" onSubmit={handleSubmit}>
          <span className="text-slate-500 text-sm">EMAIL</span>
          <div className="flex flex-col mt-1">
            <input
              name="email"
              type="email"
              className="p-2 border rounded-md bg-slate-100 focus:outline-none"
              placeholder="example@gmail.com"
              onChange={onChange}
              
              minLength={5}
              required
            />
          </div>
          <Button type="submit" className="w-full text-white bg-black rounded-lg mt-6" >
            Sign up with Email
          </Button>
        </form>
      </div>
      <div className="">
        <h1>
          Already have an account?{" "}
          <Link className="underline" to={"/login"}>
            Log in
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
