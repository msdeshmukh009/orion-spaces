import { useSelector } from "react-redux";
import { Base, MainTopBar, UserPost } from "../../components";

const Explore = () => {
  const { posts } = useSelector(state => state.posts);
  return (
    <Base>
      <main>
        <MainTopBar title={"Explore"} />
        {posts.map(post => (
          <UserPost key={post._id} post={post} />
        ))}
      </main>
    </Base>
  );
};

export { Explore };
