import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts, addComment } from "../../features/post/helpers";
import {
  Base,
  Avatar,
  PostCtaBar,
  Comment,
  MainTopBar,
  Loading,
  LikesModal,
} from "../../components";
import { useFocus } from "../../hooks";
import { NotFound } from "../not-found-page/NotFound";
import { getPostTime } from "../../utils";

const PostDetail = () => {
  const [commentData, setCommentData] = useState({ content: "" });
  const [showLikesModal, setShowLikesModal] = useState(false);

  const { postId } = useParams();

  const dispatch = useDispatch();

  const commentRef = useRef(null);

  useFocus(commentRef);

  const {
    posts: { isLoading },
    auth: { token, userData },
    user: { users },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { posts } = useSelector(state => state.posts);

  const currentPost = posts.filter(post => post.id === postId)[0];

  const currentUser = users?.filter(user => user?.username === currentPost?.username)[0];

  return currentPost ? (
    <Base>
      <>
        <MainTopBar title={"Post"} />

        <LikesModal
          showLikesModal={showLikesModal}
          setShowLikesModal={setShowLikesModal}
          post={currentPost}
        />

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[10rem]">
            <Loading />
          </div>
        ) : (
          <div className="min-h-[10rem]">
            <div className="flex gap-2 items-center p-2">
              <span className="basis-12">
                <Avatar username={currentPost?.username} />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold">
                  {currentUser?.firstName} {currentUser?.lastName}
                </span>
                <span className="text-secondary-color-200">@{currentPost?.username}</span>
              </span>
            </div>

            <div className="p-2">
              <p className="text-2xl leading-8">{currentPost?.content}</p>
              {currentPost?.postImageUrl ? (
                <img
                  src={currentPost?.postImageUrl}
                  className="w-full max-h-72 m-auto rounded-md my-4"
                  alt=""
                />
              ) : null}
              <span className="block text-secondary-color-200 mt-2">
                {getPostTime(currentPost?.createdAt)}
              </span>
            </div>
            <div className="flex items-center gap-4 p-2 min-h-[2rem] border-t-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
              <span className=" cursor-pointer" onClick={() => setShowLikesModal(true)}>
                {currentPost?.likes?.likeCount === 0 ? (
                  ""
                ) : (
                  <>
                    <span className="font-bold">{currentPost?.likes?.likeCount}</span>{" "}
                    {currentPost?.likes?.likeCount > 1 ? "Likes" : "Like"}
                  </>
                )}
              </span>
              <span>
                {currentPost?.comments.length === 0 ? (
                  ""
                ) : (
                  <>
                    <span className="font-bold">{currentPost?.comments.length}</span>{" "}
                    {currentPost?.comments.length > 1 ? "Comments" : "Comment"}
                  </>
                )}
              </span>
            </div>

            <div className="border-t-2 border-secondary-color-100 dark:border-secondary-color-dm-50">
              <PostCtaBar
                likes={currentPost?.likes}
                postId={currentPost?.id}
                post_Id={currentPost?._id}
                commentCount={currentPost?.comments?.length}
                token={token}
                currentUser={userData}
              />
            </div>

            <div className="flex gap-2 justify-between items-center p-2 border-y-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
              <span className="basis-12">
                <Avatar username={userData?.username} />
              </span>

              <span className="flex-1">
                <input
                  ref={commentRef}
                  value={commentData.content}
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      dispatch(addComment({ postId: currentPost._id, token, commentData }));
                      setCommentData({ content: "" });
                    }
                  }}
                  onChange={e =>
                    setCommentData(prevState => ({ ...prevState, content: e.target.value }))
                  }
                  className="w-full p-2 rounded-[30rem] focus:outline-none bg-secondary-color-50 dark:bg-secondary-color-dm-50"
                  type="text"
                  placeholder="Comment your reply"
                />
              </span>

              <button
                disabled={!commentData.content.trim()}
                onClick={() => {
                  dispatch(addComment({ postId: currentPost._id, token, commentData }));
                  setCommentData({ content: "" });
                }}
                className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 w-1/4 p-2 rounded-[30rem] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-color-100"
              >
                Reply
              </button>
            </div>

            {currentPost?.comments?.map(comment => (
              <Comment
                key={comment._id}
                comment={comment}
                postId={currentPost._id}
                authorUsername={currentUser?.username}
              />
            ))}
          </div>
        )}
      </>
    </Base>
  ) : (
    <NotFound />
  );
};

export { PostDetail };
