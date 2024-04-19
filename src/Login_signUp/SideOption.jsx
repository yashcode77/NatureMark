import { Link } from "react-router-dom";
function SideOption() {
  return (
    <div className="sm:w-1/2 bg-gradient-to-br from-green-900 to-green-400 text-white rounded-tr-2xl rounded-br-2xl flex flex-col justify-center gap-y-5 p-8">
      <div className="text-3xl font-extrabold text-center">
        Welcome to NatureMark Systems
      </div>
      <div className="text-center">Don{`'`}t have an account?</div>
      <div className="flex justify-center mt-4">
        <button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-full w-full sm:w-auto">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    </div>
  );
}

export default SideOption;
