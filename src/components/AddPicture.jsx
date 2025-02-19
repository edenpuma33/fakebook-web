import { AddPictureIcon } from "../icons";

const AddPicture = (props) => {
  const { file, setFile } = props;
  const hdlFileChange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="flex flex-col p-2 border rounded-lg">
      <div
        className="bg-slate-100 hover:bg-slate-200 min-h-40 rounded-lg relative cursor-pointer"
        onClick={() => document.getElementById("input-file").click()}
      >
        <input
          type="file"
          className="hidden"
          id="input-file"
          onChange={hdlFileChange}
        />
        {file && (
          <img
            src={URL.createObjectURL(file)}
            className="h-full block mx-auto"
          />
        )}
        {!file && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <AddPictureIcon className="w-10 opacity-70 hover:opacity-100" />
          </div>
        )}
      </div>
    </div>
  );
};
export default AddPicture;
