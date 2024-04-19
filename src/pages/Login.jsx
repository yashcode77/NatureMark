import { Link } from "react-router-dom";
import Form from "../Login_signUp/Form";
import SideOption from "../Login_signUp/SideOption";
function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen h-screen bg-neutral-100 w-screen">
      <div className="bg-white flex flex-col sm:flex-row border-2 h-3/5 w-screen sm:max-w-screen-md rounded-2xl shadow-2xl">
        <Form />
        <SideOption />
      </div>
    </div>
  );
}

export default Login;
