import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./pages/Loader";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} loader={<Loader />} />
        <Route path={"/login"} element={<Login />} loader={<Loader />} />
        <Route path={"/signup"} element={<SignUp />} loader={<Loader />} />
        <Route path={"*"} element={<ErrorPage />} loader={<Loader />} />
      </Routes>
    </>
  );
};

export default App;
