import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookmarks } from "../../features/bookmark/helpers";
import { Base, MainTopBar, UserPost } from "../../components";

const Bookmark = () => {
  const {
    bookmarks: { bookmarks },
    auth: { token },
    posts: { posts },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookmarks(token));
  }, [token]);

  const currentBookmarks = posts?.filter(post => bookmarks.includes(post._id));

  return (
    <Base>
      <main>
        <MainTopBar title={"Bookmarks"} />
        <section>
          <h1 className="text-center text-2xl p-4">
            {bookmarks?.length ? "" : "No bookmarks added"}
          </h1>
          {currentBookmarks?.map(post => (
            <UserPost key={post._id} post={post} />
          ))}
        </section>
      </main>
    </Base>
  );
};

export { Bookmark };
