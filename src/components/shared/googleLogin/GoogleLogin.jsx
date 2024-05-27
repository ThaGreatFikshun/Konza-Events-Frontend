import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { setUser, googleLogin, setIsLoading } = useAuth();
  const axios = useAxiosPublic();
  const location = useLocation();
  const navigation = useNavigate()

  let from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = async () => {
    const result = await googleLogin();
    const user = result?.user

    const fullName = result?.user?.displayName?.split(' ')
    const NewUser = {
        firstname: fullName[0],
        lastname: fullName[0],
        image: user?.photoURL,
        email: user?.email
    }
    const {data} = await axios.post("/google-login", NewUser);
    if (data.user.role === 'admin') {
        navigation('/dashboard/admin')
    }else if(data.user.role === 'organizer'){
        navigation('/dashboard/organizer')
    }else{
        navigation(from)
    }
    setIsLoading(false);
    localStorage.setItem("token", data.token);
    setUser(data.user);
  };

  return (
    <div className="grid grid-cols-1">
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-secondary dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-secondary"
      >
        <svg
          className="bi bi-facebook inline-block w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        <span>Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
