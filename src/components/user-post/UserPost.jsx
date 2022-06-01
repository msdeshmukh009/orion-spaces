import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import {
  MdOutlineEdit,
  MdOutlineDeleteOutline,
  MdOutlinePersonAddAlt1,
  MdOutlinePersonRemoveAlt1,
} from "react-icons/md";
import { Avatar } from "../avatar/Avatar";
import { PostCtaBar } from "../post-cta-bar/PostCtaBar";
import { useDetectClickOutside } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../features/user/helpers";
import { deletePost } from "../../features/post/helpers";
import { openPostModal, setEditPostObj } from "../../features/post/postSlice";
import { getPostTime } from "../../utils";

const UserPost = ({ post }) => {
  const [showPostOptions, setShowPostOptions] = useState(false);

  const optionsRef = useRef(null);
  const navigate = useNavigate();

  const {
    user: { users },
    auth: { token, userData },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useDetectClickOutside(optionsRef, setShowPostOptions);

  const currentUser = users.find(user => user.username === post?.username);

  const handleEdit = e => {
    e.stopPropagation();
    dispatch(openPostModal());
    dispatch(setEditPostObj(post));
    setShowPostOptions(false);
  };

  const navigateToProfile = e => {
    e.stopPropagation();
    navigate(`/profile/${post?.username}`);
  };

  const handleShowOption = e => {
    e.stopPropagation();
    setShowPostOptions(prevState => !prevState);
  };

  const handleFollowUser = e => {
    e.stopPropagation();
    dispatch(followUser({ followUserId: currentUser?._id, token }));
    setShowPostOptions(false);
  };

  const handleUnFollowUser = e => {
    e.stopPropagation();
    dispatch(unFollowUser({ followUserId: currentUser?._id, token }));
    setShowPostOptions(false);
  };

  const handleDeletePost = e => {
    e.stopPropagation();
    dispatch(deletePost({ postId: post?._id, token }));
    setShowPostOptions(false);
  };

  const optionClassName = `${
    showPostOptions ? "flex" : "hidden"
  } absolute justify-center flex-col gap-1 top-5 right-4 w-32 text-sm shadow-lg p-1 rounded-md bg-secondary-color-100 dark:bg-secondary-color-dm-100`;

  return (
    <div
      onClick={() => navigate(`/post/${post.id}`)}
      className="cursor-pointer flex rounded-md border-b-2 border-secondary-color-50 p-2 hover:bg-secondary-color-50 dark:border-secondary-color-dm-50 dark:hover:bg-secondary-color-dm-50"
    >
      <div onClick={e => e.stopPropagation()} className="basis-14 shrink-0">
        <Avatar username={post?.username} />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
          <div onClick={navigateToProfile} className="flex gap-1 px-2 items-center">
            <span className="font-semibold text-base">
              {`${currentUser?.firstName} ${currentUser?.lastName}`}
            </span>
            <span className="text-secondary-color-200 text-base">@{post?.username}</span>
          </div>

          <div>
            <p className="px-2 mt-2 break-all">{post?.content}</p>
            {post?.postImageUrl ? (
              <img
                className="w-full max-h-72 m-auto rounded-md my-4"
                src={post?.postImageUrl}
                alt=""
              />
            ) : null}
            <span className="text-secondary-color-dm-200 px-2 mt-2 inline-block">
              {getPostTime(post?.createdAt)}
            </span>
          </div>
        </div>

        <PostCtaBar
          likes={post?.likes}
          postId={post?.id}
          post_Id={post?._id}
          commentCount={post?.comments?.length}
          token={token}
          currentUser={userData}
        />
      </div>

      <div ref={optionsRef} className="relative">
        <button
          onClick={handleShowOption}
          className="p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100 rounded-[30rem]"
        >
          <BsThreeDots />
        </button>

        <div className={optionClassName}>
          {post?.username === userData?.username ? (
            <>
              <div
                onClick={e => handleEdit(e)}
                className="flex gap-1  text-base text-left items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-2 rounded-md"
              >
                <MdOutlineEdit /> <span className="flex-1">Edit Post</span>
              </div>
              <div
                onClick={handleDeletePost}
                className="flex gap-1 text-base text-center items-center hover:text-red-color hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-2 rounded-md"
              >
                <MdOutlineDeleteOutline /> <span className="flex-1">Delete Post</span>
              </div>
            </>
          ) : currentUser?.followers.find(user => user.username === userData.username) ? (
            <div
              onClick={handleUnFollowUser}
              className="flex gap-1 text-base text-center items-center hover:text-red-color hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-2 rounded-md"
            >
              <MdOutlinePersonRemoveAlt1 /> <span className="flex-1">Unfollow</span>
            </div>
          ) : (
            <div
              onClick={handleFollowUser}
              className="flex gap-1 text-base text-center items-center  hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-2 rounded-md"
            >
              <MdOutlinePersonAddAlt1 /> <span className="flex-1">Follow</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { UserPost };
