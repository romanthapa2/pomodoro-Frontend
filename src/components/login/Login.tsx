import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"

interface formState{
    email:string;
    password:string;
}
const Loginhoi = () => {
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
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[55%] w-80 bg-white rounded-md flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">SIGN IN</h1>
      {/* onSubmit={handleSubmit} */}
      <form className=" w-60 space-y-3" >
        <div className="flex flex-col border ">
          <input
            name="email"
            type="email"
            className=" p-2"
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col border ">
          <input
            name="password"
            type="password"
            className=" p-2"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="p-2 w-24 text-white bg-black rounded-lg ml-12">
          SIGN IN 
        </button>
      </form>
      </div>
    </div>
  );
};

export default Loginhoi;