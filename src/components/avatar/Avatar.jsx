import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Avatar = ({ username }) => {
  const {
    user: { users },
  } = useSelector(state => state);

  const currentUser = users.find(user => user.username === username);

  const currentUserInitials = `${
    currentUser?.firstName ? currentUser?.firstName[0].toUpperCase() : ""
  } ${currentUser?.lastName ? currentUser?.lastName[0].toUpperCase() : ""}`;

  return (
    <Link to={`/profile/${currentUser?.username}`}>
      {currentUser?.profileUrl ? (
        <img className="rounded-[50%] w-full" src={currentUser?.profileUrl} alt="user-name" />
      ) : (
        <div className="bg-primary-color-100 w-14 h-14 rounded-[50%] flex justify-center items-center text-xl">
          {currentUserInitials}
        </div>
      )}
    </Link>
  );
};

export { Avatar };
