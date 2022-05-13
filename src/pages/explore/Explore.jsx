import { Base, MainTopBar, UserPost } from "../../components";

const Explore = () => {
  return (
    <Base>
      <main>
        <MainTopBar title={"Explore"} />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </main>
    </Base>
  );
};

export { Explore };
