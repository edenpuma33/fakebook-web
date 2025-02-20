import { useState } from "react";
import { ActivityIcon, PhotoIcon, VideoIcon } from "../icons";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import PostForm from "./PostForm";

const CreatePost = () => {
  const user = useUserStore((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const closePostForm = () => {
    setIsOpen(false);
    document.getElementById("postform-modal").close();
  };
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex gap-2">
            <Avatar
              className="w-11 h-11 rounded-full"
              imgSrc={user.profileImage}
            />
            <button
              className="btn flex-1 rounded-full justify-start"
              onClick={() => {
                setIsOpen(true);
                document.getElementById("postform-modal").showModal();
              }}
            >
              What do you think?
            </button>
          </div>
          <div className="divider mt-1 mb-0"></div>
          <div className="flex gap-3 justify-between">
            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2">
              <VideoIcon className="w-6" />
              Live /Stream
            </div>
            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2">
              <PhotoIcon className="w-6" />
              Photo /Video
            </div>
            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2">
              <ActivityIcon className="w-6" />
              Activity
            </div>
          </div>
        </div>
      </div>
      <dialog id="postform-modal" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closePostForm}
          >
            ✕
          </button>
          {isOpen && <PostForm closePostForm={closePostForm} />}
        </div>
      </dialog>
    </>
  );
};
export default CreatePost;
