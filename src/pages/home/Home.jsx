import { useEffect, useRef, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdTrendingUp, MdStarOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TextEditor, UserPost, Base, MainTopBar } from "../../components";
import { useDetectClickOutside } from "../../hooks";
import { getAllPosts } from "../../features/post/helpers";

const Home = () => {
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  const sortingListRef = useRef(null);

  const dispatch = useDispatch();

  const { posts } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useDetectClickOutside(sortingListRef, setShowSortingOptions);
  return (
    <Base>
      <MainTopBar title={"Home"} />

      <div className="hidden sm:block">
        <TextEditor />
      </div>

      <div className="flex justify-between p-2 text-xl border-y-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
        <h3>Latest Posts</h3>

        <div ref={sortingListRef} className="relative">
          <button
            title="Sort Posts"
            onClick={() => setShowSortingOptions(prevState => !prevState)}
            className="rounded-[50%] hover:bg-secondary-color-dm-100 p-1"
          >
            <GiSettingsKnobs />
          </button>

          <div
            className={`${
              showSortingOptions ? "flex" : "hidden"
            } absolute justify-center flex-col gap-1 top-5 right-4 z-20 w-32 text-sm shadow-lg p-1 rounded-md bg-secondary-color-100 dark:bg-secondary-color-dm-100`}
          >
            <div className="flex gap-1 text-base text-center items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-1 rounded-md">
              <MdTrendingUp /> <span className="flex-1">Trending</span>
            </div>
            <div className="flex gap-1 text-base text-center items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-1 rounded-md">
              <MdStarOutline /> <span className="flex-1">Latest</span>
            </div>
          </div>
        </div>
      </div>

      {posts.map(post => (
        <UserPost key={post._id} post={post} />
      ))}
    </Base>
  );
};
export { Home };
