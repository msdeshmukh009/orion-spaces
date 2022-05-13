import { Base, MainTopBar, UserPost } from "../../components";

const Bookmark = () => {
  return (
    <Base>
      <main>
        <MainTopBar title={"Bookmarks"} />
        <section>
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
        </section>
      </main>
    </Base>
  );
};

export { Bookmark };
