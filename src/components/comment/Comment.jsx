import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { Avatar } from "../avatar/Avatar";
import { useRef, useState } from "react";
import { useDetectClickOutside, useFocus } from "../../hooks";
import { deleteComment, editComment } from "../../features/post/helpers";

const Comment = ({ comment, postId, authorUsername }) => {
  const [showCommentOptions, setShowCommentOptions] = useState(false);
  const [editCommentData, setEditCommentData] = useState(comment);
  const [isEditing, setIsEditing] = useState(false);
  const {
    auth: { token, userData },
    user: { users },
  } = useSelector(state => state);

  const commentOptionRef = useRef(null);

  const commentRef = useRef(null);

  const dispatch = useDispatch();

  useFocus(commentRef);

  useDetectClickOutside(commentOptionRef, setShowCommentOptions);

  const currentUser = users.filter(user => user.username === comment?.username)[0];

  const handleEdit = () => {
    dispatch(editComment({ postId, token, commentData: editCommentData }));
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(prevState => !prevState);
    setShowCommentOptions(false);
  };

  const optionClassName = `${
    showCommentOptions ? "flex" : "hidden"
  } absolute justify-center flex-col gap-1 top-5 right-4 w-32 text-sm shadow-lg p-1 rounded-md bg-secondary-color-100 dark:bg-secondary-color-dm-100`;

  return (
    <div className="flex p-2 border-b-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
      <div className="basis-12">
        <Avatar username={comment?.username} />
      </div>

      <div className="flex flex-1 flex-col items-center">
        <span className="w-full">
          <span className="flex px-2">
            <Link to={`/profile/${comment?.username}`} className="font-semibold ">
              {currentUser?.firstName} {currentUser?.lastName}
            </Link>
            <Link to={`/profile/${comment?.username}`} className="text-secondary-color-200 ml-1">
              @{comment?.username}
            </Link>
          </span>
          <span className="px-2">
            <span className="text-secondary-color-200">replying to</span>
            <Link to={`/profile/${authorUsername}`} className="text-primary-color-100 ml-1">
              @{authorUsername}
            </Link>
          </span>
        </span>

        {isEditing ? (
          <div className="w-full mt-2 flex flex-col">
            <input
              ref={commentRef}
              value={editCommentData?.content}
              onChange={e =>
                setEditCommentData(prevState => ({ ...prevState, content: e.target.value }))
              }
              className="w-full p-2 rounded-[30rem] focus:outline-none bg-secondary-color-50 dark:bg-secondary-color-dm-50"
              type="text"
              placeholder="Comment your reply"
            />
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => {
                  setEditCommentData(comment);
                  setIsEditing(false);
                }}
                className=" hover:opacity-70 text-secondary-color-100 border-2 border-secondary-color-dm-50 dark:border-secondary-color-50 w-1/4 p-2 rounded-[30rem]"
              >
                Discard
              </button>
              <button
                disabled={!editCommentData.content.trim()}
                onClick={handleEdit}
                className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-color-100 w-1/4 p-2 rounded-[30rem]"
              >
                Update
              </button>
            </div>
          </div>
        ) : (
          <span className="w-full block mt-2 px-2 break-all">{comment?.content}</span>
        )}
      </div>

      <div
        ref={commentOptionRef}
        className={`relative ${userData?.username !== comment?.username ? "hidden" : ""}`}
      >
        <button
          onClick={() => setShowCommentOptions(prevState => !prevState)}
          className="p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100 rounded-[30rem]"
        >
          <BsThreeDots />
        </button>

        <div className={optionClassName}>
          <div
            onClick={enableEditing}
            className="flex gap-1 text-base text-center items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-2 rounded-md"
          >
            <MdOutlineEdit /> <span className="flex-1">Edit</span>
          </div>

          <div
            onClick={() => dispatch(deleteComment({ postId, token, commentId: comment?._id }))}
            className="flex gap-1 text-base text-center items-center hover:text-red-color hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-2 rounded-md"
          >
            <MdOutlineDeleteOutline /> <span className="flex-1">Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Comment };
