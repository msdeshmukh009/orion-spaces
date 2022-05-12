import { Link } from "react-router-dom";
import { Base, Avatar, PostCtaBar, Comment, MainTopBar } from "../../components";

const PostDetail = () => {
  return (
    <Base>
      <main>
        <MainTopBar title={"Post"} />

        <Link to="/" className="flex gap-2 items-center p-2">
          <span className="basis-12">
            <Avatar />
          </span>
          <span className="flex flex-col">
            <span className="font-semibold">The cool User</span>
            <span className="text-secondary-color-200">@theUserName</span>
          </span>
        </Link>

        <div className="p-2">
          <p className="text-2xl leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt assumenda a illum
            enim, debitis repellat velit perspiciatis aspernatur cum, provident cupiditate soluta
            iste magnam rerum voluptatibus inventore ullam, commodi voluptas deleniti unde
            accusantium blanditiis quibusdam vero sed! Non quas, numquam corporis assumenda autem
            nostrum quasi commodi aperiam omnis tempore vero!
          </p>
          <span className="block text-secondary-color-200 mt-2">12:11 AM Oct 21,2021</span>
        </div>

        <div className="flex items-center gap-4 p-2 border-t-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
          <span>
            <span className="font-bold">2</span> Likes
          </span>
          <span>
            <span className="font-bold">2</span> Comments
          </span>
        </div>

        <div className="border-t-2 border-secondary-color-100 dark:border-secondary-color-dm-50">
          <PostCtaBar />
        </div>

        <div className="flex gap-2 justify-between items-center p-2 border-t-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
          <span className="basis-12">
            <img
              className="rounded-[50%]"
              src="https://avatars.dicebear.com/api/avataaars/your-custom-seed52.svg"
              alt="user-name"
            />
          </span>

          <span className="flex-1">
            <input
              className="w-full p-2 rounded-[30rem] focus:outline-none bg-secondary-color-50 dark:bg-secondary-color-dm-50"
              type="text"
              placeholder="Comment your reply"
            />
          </span>

          <button className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 w-1/4 p-2 rounded-[30rem]">
            Reply
          </button>
        </div>

        <Comment />
        <Comment />
      </main>
    </Base>
  );
};

export { PostDetail };
