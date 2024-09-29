import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import { handleError } from "../utils/handleError";
import { toast } from "react-toastify";
axios.defaults.withCredentials = true;
const defaultValues = {
  email: "",
  password: "",
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [loginInput, setLoginInput] = useState(defaultValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/login", {
        email: loginInput.email,
        password: loginInput.password,
      });
      console.log(response.data);
      console.log(loginInput);
      
      toast.success("Login Succussfully")
    } catch (error) {
      handleError(error);
    }
  };
  const handleInputChange = (e) =>
    setLoginInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  return (
    <div className="__login w-full h-[calc(100dvh-64px)] bg-sky-900 text-white flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl text-white font-bold capitalize">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 border p-8 rounded shadow-md w-[400px] backdrop-blur-sm bg-white/70 text-white"
      >
        <input
          className="px-4 py-2 text-base rounded-md text-black focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
          value={loginInput.email}
          onChange={handleInputChange}
        />

        <div className="flex items-center relative -z-1">
          <input
            className="px-4 py-2 text-base w-full rounded-md text-black focus:outline-none"
            type={showPassword ? "password" : "text"}
            placeholder="Password"
            name="password"
            value={loginInput.password}
            onChange={handleInputChange}
          />
          <span className="absolute text-gray-700 right-0 z-10">
            {showPassword ? (
              <button
                className="p-2"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
              >
                <FaEye size={20} />
              </button>
            ) : (
              <button
                className="p-2"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
              >
                <FaEyeSlash size={20} />
              </button>
            )}
          </span>
        </div>
        <button className="default_btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
