import { useState } from "react";
import { ImagesIcon } from "../icons";
import useUserStore from "../stores/userStore";
import usePostStore from "../stores/postStore";
import Avatar from "./Avatar";
import AddPicture from "./AddPicture";
import { toast } from "react-toastify";

const PostFormEdit = (props) => {
  const { closePostForm } = props;
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);

  const updatePost = usePostStore((state) => state.updatePost);
  const setCurrentPost = usePostStore((state) => state.setCurrentPost);

  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const [message, setMessage] = useState("");
  const [addPic, setAddPic] = useState(false);
  const [file, setFile] = useState(null);

  const hdlUpdatePost = async () => {
    try {
    } catch (error) {
      const errMsg = error.response?.data?.error || error.message;
      toast.error(errMsg);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-center">Update Post</h3>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-2">
        <Avatar className="w-11 h-11 rounded-full" imgSrc={user.profileImage} />
        <div className="flex flex-col">
          <div className="text-sm">
            {user.firstName} {user.lastName}
          </div>
          <select className="select bg-slate-200 select-xs w-full max-w-xs">
            <option disabled>who can see?</option>
            <option>public</option>
            <option>friends</option>
          </select>
        </div>
      </div>
      <textarea
        className="textarea textarea-ghost"
        placeholder={`What do you think? ${user.firstName}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={message.split("\n").length}
      ></textarea>
      <div className="border flex justify-evenly items-center">
        <p>Picture show here</p>
        <button className="btn btn-sm">Remove</button>
      </div>
      {addPic && <AddPicture file={file} setFile={setFile} />}
      <div className="flex border rounded-lg p-2 justify-between items-center">
        <p>add with your post</p>
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-110"
          onClick={() => setAddPic((prv) => !prv)}
        >
          <ImagesIcon className="w-6" />
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={hdlUpdatePost}
        disabled={message.trim().length === 0 && !file}
      >
        Update Post
      </button>
    </div>
  );
};
export default PostFormEdit;
