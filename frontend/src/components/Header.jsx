import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleError } from "../utils/handleError";
axios.defaults.withCredentials = true;
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/user/logout");
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <div className="h-16 w-full bg-slate-800 text-white p-3 flex items-center justify-between">
      <Link to="/" className=" select-none">
        <h2 className="bg-indigo-700 p-2 font-bold text-2xl">React Login</h2>
      </Link>

      <ul className="flex items-center gap-5">
        <li>
          <button
            onClick={() => {
              handleLogout();
              navigate("/login");
            }}
            className="defaut_btn red_btn"
          >
            Logout
          </button>
        </li>

        <li>
          <button
            onClick={() => navigate("/login")}
            className="default_btn green_btn"
          >
            Login
          </button>
        </li>
        <li>
          <button onClick={() => navigate("/signup")} className="default_btn">
            Signup
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
