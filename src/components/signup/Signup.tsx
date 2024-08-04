import  React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie"

interface formState{
    name:string;
    email: string;
    password:string;
}

const Signup:React.FC = () => {
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

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen text-black flex justify-center flex-col items-center">

      <div className="h-[55%] w-80 bg-white rounded-md flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">sign up</h1>
      {/* onSubmit={handleSubmit} */}
        <form  className="w-60 space-y-4 ">
          <div className="flex flex-col border ">
            <input
              name="name"
              type="text"
              className="p-2"
              placeholder="Username"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="flex flex-col border">
            <input
              name="email"
              type="email"
              className=" p-2"
              placeholder="Email"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <div className="flex flex-col border">
            <input
              name="password"
              type="password"
              className="p-2"
              placeholder="Password"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>
          <button type="submit" className="p-2 w-28 text-white bg-black rounded-lg mt-3 ml-16">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;