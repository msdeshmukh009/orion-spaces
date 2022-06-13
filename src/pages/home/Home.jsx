import { useEffect, useRef, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdTrendingUp } from "react-icons/md";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { TextEditor, UserPost, Base, MainTopBar, Loading } from "../../components";
import { useDetectClickOutside } from "../../hooks";
import { getAllPosts } from "../../features/post/helpers";
import { getAllBookmarks } from "../../features/bookmark/helpers";
import { Link } from "react-router-dom";

const Home = () => {
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const [sortBy, setSortBy] = useState("Latest");

  const sortingListRef = useRef(null);

  const dispatch = useDispatch();

  const {
    posts: { posts, isLoading },
    auth: { userData, token },
    user: { users },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllBookmarks({ token }));
  }, [dispatch, token]);

  useDetectClickOutside(sortingListRef, setShowSortingOptions);

  const getUserByUserName = username => users.filter(user => user.username === username)[0];

  const postsForUser = posts.filter(post => {
    return (
      post.username === userData.username ||
      getUserByUserName(post?.username)?.followers?.find(
        user => user.username === userData.username
      )
    );
  });

  const sortPosts = () => {
    const temp = postsForUser.slice();

    if (sortBy === "Latest") {
      temp.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
    }

    if (sortBy === "Oldest") {
      temp.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt));
    }

    if (sortBy === "Trending") {
      temp.sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount);
    }

    return temp;
  };

  const sortedPosts = sortPosts();

  const sortingOptionClassName = sortCategory => {
    return `${
      sortBy === sortCategory ? "text-primary-color-100" : ""
    } flex gap-1 text-base text-center items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-1 rounded-md`;
  };

  const optionListClassNames = `${
    showSortingOptions ? "flex" : "hidden"
  } absolute justify-center flex-col gap-1 top-5 right-4 z-20 w-32 text-sm shadow-lg p-1 rounded-md bg-secondary-color-100 dark:bg-secondary-color-dm-100`;

  return (
    <Base>
      <MainTopBar title={"Home"} />

      <div className="hidden sm:block">
        <TextEditor />
      </div>

      <div className="flex justify-between p-2 text-xl border-y-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
        <h3>{sortBy} Posts</h3>

        <div ref={sortingListRef} className="relative">
          <button
            title="Sort Posts"
            onClick={() => setShowSortingOptions(prevState => !prevState)}
            className="rounded-[50%] hover:bg-secondary-color-dm-100 p-1"
          >
            <GiSettingsKnobs />
          </button>

          <div className={optionListClassNames}>
            <div onClick={() => setSortBy("Latest")} className={sortingOptionClassName("Latest")}>
              <BsSortUp /> <span className="flex-1">Latest</span>
            </div>
            <div onClick={() => setSortBy("Oldest")} className={sortingOptionClassName("Oldest")}>
              <BsSortDown /> <span className="flex-1">Oldest</span>
            </div>
            <div
              onClick={() => setSortBy("Trending")}
              className={sortingOptionClassName("Trending")}
            >
              <MdTrendingUp /> <span className="flex-1">Trending</span>
            </div>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center p-4">
          <Loading />
        </div>
      )}
      {sortedPosts?.length === 0 && !isLoading && (
        <div className="text-center p-2">
          <h1 className="text-2xl">No posts in feed</h1>
          <Link className="block mt-4 text-lg text-primary-color-100" to="/explore">
            Explore
          </Link>
        </div>
      )}
      {!isLoading && sortedPosts?.map(post => <UserPost key={post._id} post={post} />)}
    </Base>
  );
};
export { Home };
