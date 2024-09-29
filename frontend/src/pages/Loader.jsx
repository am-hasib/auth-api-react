import { LuLoader } from "react-icons/lu";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100dvh-64px)] bg-slate-900 text-white text-4xl">
      <LuLoader className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default Loader;
