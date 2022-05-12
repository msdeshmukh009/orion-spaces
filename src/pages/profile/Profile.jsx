import { MdLogout } from "react-icons/md";
import { Avatar, Base, MainTopBar, UserPost } from "../../components";

const Profile = () => {
  return (
    <Base>
      <main>
        <MainTopBar title={"The Cool User"} />

        <div className="flex justify-end px-2">
          <button className="text-xl" title="Log Out">
            <MdLogout />
          </button>
        </div>

        <section className="flex flex-col items-center">
          <div className="w-40 border-2 rounded-[50%] border-secondary-color-50 dark:border-secondary-color-dm-50">
            <Avatar />
          </div>

          <div className="flex flex-col my-2 text-center">
            <a href="/" className="font-semibold text-lg">
              The cool User
            </a>

            <a href="/" className="text-secondary-color-200 text-lg">
              @theUserName
            </a>
          </div>

          <button className="border-2 px-4 py-1 rounded-[30rem] font-bold border-secondary-color-100 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100">
            Edit Profile
          </button>

          <div className="max-w-lg text-center my-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, sint minus. Cum ea
              repellat minima.
            </p>
            <a href="cool-user.com" target="_blank" className="text-primary-color-100">
              cool-user.com
            </a>
          </div>
        </section>

        <section className="flex p-2 w-72 m-auto rounded-lg bg-secondary-color-100 dark:bg-secondary-color-dm-100">
          <div className="flex-1 flex flex-col text-center">
            <span>Following</span>
            <span>0</span>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <span>Posts</span>
            <span>2k</span>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <span>Followers</span>
            <span>37.3k</span>
          </div>
        </section>

        <section className="mt-2 p-2">
          <h2 className="text-xl font-bold mb-2">Your Posts</h2>
          <UserPost />
          <UserPost />
          <UserPost />
        </section>
      </main>
    </Base>
  );
};

export { Profile };
