import { useEffect, useState } from "react";
import axios from "axios";
import { handleError } from "../utils/handleError";
axios.defaults.withCredentials = true;
const Home = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [userData, setUserData] = useState(null);
  const getUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/my-details");
      setUserData(response.data.user);
      setIsloggedin(true);
    } catch (error) {
      if (error.response.status === 401) {
        setIsloggedin(false);
      }
      handleError(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      {isloggedin ? (
        <div className="flex items-center flex-col gap-5 justify-center w-full h-[calc(100dvh-64px)] bg-slate-900 text-white text-4xl">
          <h1>UserName: {userData.username}</h1>
          <h1>Email: {userData.email}</h1>
        </div>
      ) : (
        <h1 className="flex items-center justify-center w-full h-[calc(100dvh-64px)] bg-slate-900 text-white text-4xl">
          You are not logged in
        </h1>
      )}
    </div>
  );
};

export default Home;
