import { Link } from "react-router-dom";

const Avatar = () => {
  return (
    <Link to="/profile">
      <img
        className="rounded-[50%]"
        src="https://avatars.dicebear.com/api/avataaars/your-custom-seed52.svg"
        alt="user-name"
      />
    </Link>
  );
};

export { Avatar };
