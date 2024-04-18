import { useDispatch } from "react-redux";
import { logout } from "../../store/features/auth/authSlice";

const HomePage = () => {
  const dispacth = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispacth(logout());
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
