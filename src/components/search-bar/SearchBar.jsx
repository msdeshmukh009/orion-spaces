import { useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../features/user/userSlice";
import { User } from "../user/User";
import { debounce } from "../../utils";

const SearchBar = () => {
  const {
    user: { users, foundUsers, searchTerm },
    auth: { userData, token },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(""));
  }, [dispatch]);

  const currentUser = users.find(user => user.username === userData.username);

  return (
    <div className="flex flex-col z-20 sticky p-2 top-0 w-full border-secondary-color-50 dark:border-secondary-color-dm-50">
      <div className="sticky flex items-center px-2 top-0 w-full border-2 rounded-[30rem] dark:bg-secondary-color-dm-50 border-secondary-color-50 dark:border-secondary-color-dm-50">
        <span className="text-xl basis-8">
          <MdOutlineSearch />
        </span>
        <div className="flex-1">
          <input
            onChange={debounce(e => dispatch(searchUser(e.target.value)), 400)}
            className="w-full p-2 focus:outline-none dark:bg-secondary-color-dm-50"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="mt-2 top-12 right-0 w-full absolute bg-secondary-color-50 dark:bg-secondary-color-dm-50 rounded-lg">
        {searchTerm.trim() !== "" ? (
          <div>
            {foundUsers?.length === 0 && (
              <h2 className="text-lg w-full text-center">No user found</h2>
            )}

            {foundUsers.map(user => (
              <User key={user._id} user={user} currentUser={currentUser} token={token} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export { SearchBar };
