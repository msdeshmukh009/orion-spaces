import { Base, MainTopBar, LikeNotification, CommentNotification } from "../../components";

const Notifications = () => {
  return (
    <Base>
      <main>
        <MainTopBar title={"Notifications"} />
        <LikeNotification />
        <CommentNotification />
        <LikeNotification />
        <CommentNotification />
      </main>
    </Base>
  );
};

export { Notifications };
