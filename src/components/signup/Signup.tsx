import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"

interface formState {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  //   let history = useNavigate();
  const [value, setvalue] = useState<formState>({ name: "", email: "", password: "" });
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const { name, email, password } = value;
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/register`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name, email, password }),
  //     });
  //     const json = await response.json();
  //     if (json.success) {
  //       Cookies.set("accessToken", json.data.accessToken);
  //       history("/");
  //     } else {
  //       return <h1>error</h1>;
  //     }
  //   };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen bg-black text-white flex justify-center flex-col items-center gap-y-6">
      <h1 className="text-4xl font-bold">Pomofocus</h1>
      <h1 className="font-bold">Create Account</h1>
      <div className="h-[45%] bg-white text-black w-96 rounded-md flex flex-col justify-center items-center">
        <Button className=" mb-6 bg-white text-black border w-5/6 hover:bg-transparent">Signup with Google</Button>
        {/* onSubmit={handleSubmit} */}
        <form className="w-5/6">
        <span>EMAIL</span>
          <div className="flex flex-col">
            <input
              name="email"
              type="email"
              className="p-2 border rounded-md bg-slate-100"
              placeholder="example@gmail.com"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <Button type="submit" className="w-full text-white bg-black rounded-lg mt-6">
            Sign up with Email
          </Button>
        </form>
      </div>
      <div className="">
      <h1>Already have an account? <Link className="underline" to={"/login"}>Log in</Link></h1>
      
      </div>
    </div>
  );
};

export default Signup;
