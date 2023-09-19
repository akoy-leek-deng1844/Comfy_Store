import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        <div className="flex justify-center items-center gap-x-6">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header