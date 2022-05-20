import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Base, Loading, MainTopBar, UserPost } from "../../components";
import { getAllPosts } from "../../features/post/helpers";

const Explore = () => {
  const { posts, isLoading } = useSelector(state => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Base>
      <main>
        <MainTopBar title={"Explore"} />
        {isLoading ? (
          <div className="p-4 flex justify-center">
            <Loading />
          </div>
        ) : (
          posts.map(post => <UserPost key={post._id} post={post} />)
        )}
      </main>
    </Base>
  );
};

export { Explore };
