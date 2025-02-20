import {
  CloseIcon,
  CommentIcon,
  LikeIcon,
  ShareIcon,
  ThreeDotIcon,
} from "../icons";
import Avatar from "./Avatar";
import CommentContainer from "./CommentContainer";
import useUserStore from "../stores/userStore";
import usePostStore from "../stores/postStore";
import { toast } from "react-toastify";

function PostItem(props) {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const deletePost = usePostStore((state) => state.deletePost);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);
  const { post } = props;
  // console.log(post);
  const hdlDelete = async () => {
    try {
      await deletePost(post.id, token);
      toast.success("Delete done");
      // getAllPosts(token);
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message;
      toast.error(errMsg);
      console.log(err);
    }
  };
  const hdlShowEditModal = () => {
    setCurrentPost(post);
    document.getElementById("editform-modal").showModal();
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar
              imgSrc={post.user.profileImage}
              className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold text-sm">
                {post.user.firstName} {post.user.lastName}
              </p>
              <p className="text-xs opacity-70">
                {new Date(post.createdAt).toDateString()} ,
                {new Date(post.createdAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {user.id === post.userId && (
              <div className="dropdown">
                <div tabIndex={0} role="button">
                  <div className="avatar items-center cursor-pointer">
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                      <ThreeDotIcon className="w-6" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li onClick={hdlShowEditModal}>
                    <a>Edit</a>
                  </li>
                  <li onClick={hdlDelete}>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            )}
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <CloseIcon className="w-6" />
              </div>
            </div>
          </div>
        </div>
        <p>{post.message}</p>
        {post.image && (
          <img
            src={post.image}
            alt="post image"
            className="p-4 max-h-[500px] object-contain"
          />
        )}
        {/* like, comment */}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-end cursor-pointer gap-1">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className="w-5" />
            </div>
            <p>{post.Like.length} likes</p>
          </div>
          <div className="flex">
            <p className="opacity-60">{post.comment.length} comments</p>
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        <div className="flex gap-3 justify-between">
          <div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
            <LikeIcon className="w-6" /> Like
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
            <CommentIcon className="w-8" /> Comment
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
            <ShareIcon className="w-6" /> Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>
        <CommentContainer />
      </div>
    </div>
  );

  // return (
  //   <div className="border bg-lime-100">
  //     <pre>{JSON.stringify(post, null, 2)}</pre>
  //   </div>
  // );
}
export default PostItem;
