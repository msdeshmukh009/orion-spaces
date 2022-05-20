import { useSelector, useDispatch } from "react-redux";
import { followUser } from "../../features/user/helpers";
import { Link } from "react-router-dom";
import { SearchBar } from "../search-bar/SearchBar";

const SuggestionsSidebar = () => {
  const {
    user: { users, searchTerm },
    auth: { token, userData },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const suggestionList = users.filter(
    currentUser =>
      currentUser.username !== userData.username &&
      !currentUser.followers.find(user => user.username === userData.username)
  );

  const Suggestion = ({ currentUser }) => {
    return (
      <li className="flex flex-wrap items-center gap-2 p-2 rounded-md hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100">
        <div className="basis-14 shrink-0">
          {currentUser.profileUrl ? (
            <Link to={`/profile/${currentUser?.username}`}>
              <img
                className="rounded-[50%]"
                src={currentUser?.profileUrl}
                alt={`${currentUser?.firstName} ${currentUser?.lastName}`}
              />
            </Link>
          ) : (
            <div className="bg-primary-color-100 w-14 h-14 rounded-[50%] flex justify-center items-center text-3xl">{`${currentUser?.firstName[0].toUpperCase()} ${currentUser?.lastName[0].toUpperCase()}`}</div>
          )}
        </div>

        <div className="flex-1 flex flex-col">
          <Link to={`/profile/${currentUser?.username}`} className="font-semibold">
            {`${currentUser?.firstName} ${currentUser?.lastName}`}
          </Link>
          <Link
            to={`/profile/${currentUser?.username}`}
            className="text-secondary-color-200 text-sm"
          >
            @{`${currentUser?.username}`}
          </Link>
        </div>

        <div>
          <button
            onClick={() => dispatch(followUser({ followUserId: currentUser._id, token }))}
            title={`Follow ${currentUser?.firstName} ${currentUser?.lastName} `}
            className="bg-dark-color px-2 py-1 xl:w-full rounded-[30rem] text-background-color"
          >
            Follow
          </button>
        </div>
      </li>
    );
  };
  return (
    <aside className="aside hidden lg:flex flex-col gap-2 p-2 sticky top-0 h-screen">
      <SearchBar />

      {!searchTerm.length && (
        <div className="rounded-lg p-2">
          <h3 className="font-semibold text-center text-lg">Suggestions for you</h3>
          <ul className="flex flex-col gap-2">
            {suggestionList.map(currentUser => (
              <Suggestion key={currentUser._id} currentUser={currentUser} />
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export { SuggestionsSidebar };
