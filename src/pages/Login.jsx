import { FacebookTitle } from "../icons";
import Register from "./Register";

const Login = () => {
  return (
    <>
      <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between">
          <div className="flex flex-col gap-4 mt-20 basis-3/5">
            <div className="text-4xl">
              <FacebookTitle className="-ms-3" />
              <h2 className="text-[30px] leading-8 mt-3 w-[514px]">
                Fakebook helps you connect and share with the people.
              </h2>
              <p className="text-sm text-red-500 mt-3">
                *** This is not real Facebook site ***
              </p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="card bg-base-100 w-full h-[350px] shawdow-xl mt-8">
              <form>
                <div className="card-body gap-3 p-4">
                  <input
                    type="text"
                    placeholder="E-mail or Phone number"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-primary text-xl">Log in</button>
                  <p className="text-center cursor-pointer opacity-70">
                    Forgotten password?
                  </p>
                  <div className="divider my-0"></div>
                  <button
                    className="btn btn-secondary text-lg text-white mx-auto"
                    type="button"
                    onClick={() =>
                      document.getElementById("register-form").showModal()
                    }
                  >
                    Create new account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-form" className="modal">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("register-form").close()}
          >
            ✕
          </button>
          <Register />
        </div>
      </dialog>
    </>
  );
};
export default Login;
