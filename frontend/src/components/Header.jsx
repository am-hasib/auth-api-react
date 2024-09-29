import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 w-full bg-slate-800 text-white p-3 flex items-center justify-between">
      <Link to="/" className=" select-none">
        <h2 className="bg-indigo-700 p-2 font-bold text-2xl">React Login</h2>
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          <button onClick={() => navigate("/login")} className="default_btn">
            Login
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/signup")}
            className="defaut_btn red_btn"
          >
            Signup
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
