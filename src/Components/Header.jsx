import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { logOut } from "../Features/user/userSlice";
import { clearItems } from "../Features/Cart/cartSlice";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate('/');
    dispatch(logOut());
  }
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.userName}</p>
            <button className="btn btn-xs btn-outline btn-primary " onClick={handleLogout}>
              logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-x-6">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header