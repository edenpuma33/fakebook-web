import { useState } from "react";
import { toast } from "react-toastify";

// เอาไว้ข้างนอกเพราะทุกครั้งที่พิมพ์ state จะเปลี่ยนทำให้ต้องรันใหม่
const initInput = {
  firstName: "",
  lastName: "",
  identity: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const [input, setInput] = useState(initInput);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlClearInput = () => setInput(initInput);

  const hdlRegister = (e) => {
    const { firstName, lastName, identity, password, confirmPassword } = input;
    e.preventDefault();
    // validation
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !identity.trim() ||
      !password.trim()
    ) {
      return toast.error("Please fill all inputs");
    }
    if (password !== confirmPassword) {
      return toast("Password and Confirm password unmatched!!");
    }
    toast.success("ok", {position: 'top-center'});
  };

  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form onSubmit={hdlRegister} className="flex flex-col gap-5 p-4 pt-3">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First name"
            className="input input-bordered w-full"
            name="firstName"
            value={input.firstName}
            onChange={hdlChange}
          />
          <input
            type="text"
            placeholder="Last name"
            className="input input-bordered w-full"
            name="lastName"
            value={input.lastName}
            onChange={hdlChange}
          />
        </div>
        <input
          type="text"
          placeholder="E-mail or Phone number"
          className="input input-bordered w-full"
          name="identity"
          value={input.identity}
          onChange={hdlChange}
        />
        <input
          type="password"
          placeholder="New password"
          className="input input-bordered w-full"
          name="password"
          value={input.password}
          onChange={hdlChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered w-full"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={hdlChange}
        />
        <button className="btn btn-secondary text-xl text-white">
          Sign up
        </button>
        <button
          className="btn btn-warning text-xl text-white"
          type="button"
          onClick={hdlClearInput}
        >
          Reset
        </button>
      </form>
    </>
  );
}
export default Register;
