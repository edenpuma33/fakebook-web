## Step 1 Install Library

### Vite

```bash
npm create vite@latest
```

### tailwind css v3.4.17

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

#### Edit tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### daisyUI

```bash
npm i -D daisyui@latest
```

#### Add daisyUI to tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
```

#### change theme color

```json
<html data-theme="light"></html>
```

#### Install react router and axios

```bash
npm i react-router axios
```

## Step 2 Create Folder routes & Edit main.jsx

### routes/AppRouter.jsx

```js
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

const guestRouter = createBrowserRouter([{ path: "/", element: <p>Login</p> }]);

const userRouter = createBrowserRouter([
  { path: "/", element: <p>Home Page</p> },
  { path: "/friends", element: <p>Friends Page</p> },
]);

export default function AppRouter() {
  return <RouterProvider router={userRouter} />;
}
```

### pages/Login.jsx

```js
const Login = () => {
  return <div>Login Page</div>;
};
export default Login;
```

### pages/Friends.jsx

```js
const Friends = () => {
  return <div>Friends Page</div>;
};
export default Friends;
```

### App.jsx

```js
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Friends from "../pages/Friends";

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "*", element: <Navigate to="/" /> }, // ถ้าพิมพ์ path มั่วๆมาจะไปที่หน้า Home page
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <p>Sidebar + Posts</p> },
      { path: "friends", element: <Friends /> },
      { path: "*", element: <Navigate to="/" /> }, // ถ้าพิมพ์ path มั่วๆมาจะไปที่หน้า Home page
    ],
  },
]);

export default function AppRouter() {
  const user = "andy"; // const user = null ;
  const finalRouter = user ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
```

## Step 3 Edit pages/Login.jsx & Create Folder icons & Edit tailwind.config.js

### tailwind.config.js

```js
daisyui: {
    themes: [
      {
        facebook: {
          "primary": "#1877F2",        // Facebook Blue
          "primary-focus": "#1464D1",  // Darker blue for hover/focus
          "primary-content": "#ffffff", // White text on primary

          "secondary": "#42B72A",      // Green (for action buttons like sign up)
          "secondary-focus": "#36A420", // Darker green for hover
          "secondary-content": "#ffffff",

          "accent": "#385898",         // Darker blue (used in links)
          "accent-focus": "#314B81",
          "accent-content": "#ffffff",

          "neutral": "#65676B",        // Gray (used for secondary text)
          "neutral-focus": "#1C1E21",  // Dark gray (used for primary text)
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",       // White background
          "base-200": "#F0F2F5",       // Light gray background
          "base-300": "#E4E6EB",       // Slightly darker gray
          "base-content": "#050505",   // Almost black text

          "info": "#1877F2",           // Info messages
          "success": "#42B72A",        // Success messages
          "warning": "#F7B928",        // Warning yellow
          "error": "#FA383E",          // Error red

          "--rounded-box": "0.5rem",    // Border radius for cards
          "--rounded-btn": "0.25rem",   // Border radius for buttons
          "--rounded-badge": "1.9rem",  // Border radius for badges
          "--animation-btn": "0.25s",   // Button click animation duration
          "--animation-input": "0.2s",  // Input focus animation duration
          "--btn-text-case": "none",    // Button text transform
          "--btn-focus-scale": "0.98",  // Button focus scale
          "--border-btn": "1px",        // Button border width
          "--tab-border": "2px",        // Tab border width
          "--tab-radius": "0.5rem",     // Tab border radius
        },
      },
    ],
  },
```

สั่ง chatgpt ทำโดย : create facebook title in svg with jsx format

### icons/index.jsx

```js
export const FacebookTitle = (props) => {
  return (
    <svg
      width="230"
      height="50"
      viewBox="0 0 230 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // ทุก props ที่รับมาจะมาอยู่ที่นี่
    >
      <text
        x="10"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#1877F2"
      >
        FaKebook
      </text>
    </svg>
  );
};
```

### Login.jsx

```js
import { FacebookTitle } from "../icons";

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
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-primary text-xl">Login</button>
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
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};
export default Login;
```

## Step 4 Create Register.jsx

### pages/Register.jsx

```js
import { useState } from "react";

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

  return (
    <>
      <div className="text-3xl text-center opacity-70">
        Create a new account
      </div>
      <div className="divider opacity-60"></div>
      <form className="flex flex-col gap-5 p-4 pt-3">
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
```

### Edit pages/Login.jsx import and Edit Register.jsx

### Login.jsx

```js
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
```

### install react-toastify

```bash
npm i react-toastify
```

### Edit main.jsx

```js
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <>
    <AppRouter />
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </>
);
```

### Update Register.jsx

```js
import axios from "axios";
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

  const hdlRegister = async (e) => {
    try {
      const { firstName, lastName, identity, password, confirmPassword } =
        input;
      e.preventDefault();
      // ** validation
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
      // toast.success(JSON.stringify(input), { position: 'top-center' });

      // ** send request to api
      const rs = await axios.post("http://localhost:8899/auth/register", input);

      hdlClearInput(); // clear input
      document.getElementById("register-form").close(); // ทำเสร็จแล้วปิด form
      toast("Register Successful");
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.error || err.message;
      toast.error(errMsg);
    }
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
```

## Step 5 Edit Login.jsx

### pages/Login.jsx

```js
import { useState } from "react";
import { FacebookTitle } from "../icons";
import Register from "./Register";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    identity: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlLogin = async (e) => {
    try {
      const { identity, password } = input;
      e.preventDefault();
      // validation
      if (!identity.trim() || !password.trim()) {
        return toast.error("Please fill all inputs");
      }
      const rs = await axios.post("http://localhost:8899/auth/login", input);
      toast.success(`Login Successful, welcome ${rs.data.user.firstName}`);
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.error || err.message;
      toast.error(errMsg);
    }
  };
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
              <form onSubmit={hdlLogin}>
                <div className="card-body gap-3 p-4">
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
                    placeholder="Password"
                    className="input input-bordered w-full"
                    name="password"
                    value={input.password}
                    onChange={hdlChange}
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
```

## Step 6 install zustand and Create Folder store & Edit Login.jsx

```bash
npm i zustand
```

### store/userStore.js

```js
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist((set, get) => ({
    user: null,
    token: "",
    login: async (input) => {
      const rs = await axios.post("http://localhost:8899/auth/login", input);
      set({ token: rs.data.token, user: rs.data.user });
      return rs.data;
    },
    logout: () => set({ token: "", user: null }),
  }))
);

export default useUserStore;
```

### Login.jsx

create const login & token & import useUserStore

```js
import { useState } from "react";
import { FacebookTitle } from "../icons";
import Register from "./Register";
import { toast } from "react-toastify";
import useUserStore from "../stores/userStore";

const Login = () => {
  const login = useUserStore((state) => state.login);
  const [input, setInput] = useState({
    identity: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlLogin = async (e) => {
    try {
      const { identity, password } = input;
      e.preventDefault();
      // validation
      if (!identity.trim() || !password.trim()) {
        return toast.error("Please fill all inputs");
      }
      let data = await login(input);
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.error || err.message;
      toast.error(errMsg);
    }
  };
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
              <form onSubmit={hdlLogin}>
                <div className="card-body gap-3 p-4">
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
                    placeholder="Password"
                    className="input input-bordered w-full"
                    name="password"
                    value={input.password}
                    onChange={hdlChange}
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
```

---

### Edit AppRouter.jsx

```js
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Friends from "../pages/Friends";
import useUserStore from "../stores/userStore";

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "*", element: <Navigate to="/" /> }, // ถ้าพิมพ์ path มั่วๆมาจะไปที่หน้า Home page
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <p>Sidebar + Posts</p> },
      { path: "friends", element: <Friends /> },
      { path: "*", element: <Navigate to="/" /> }, // ถ้าพิมพ์ path มั่วๆมาจะไปที่หน้า Home page
    ],
  },
]);

export default function AppRouter() {
  const user = useUserStore((state) => state.user);
  const finalRouter = user ? userRouter : guestRouter;
  return <RouterProvider key={user?.id} router={finalRouter} />; // เพิ่ม key จะทำให้กด login แล้วหน้าเว็บเปลี่ยน
}
```

---

### Edit App.jsx

```js
import { Outlet } from "react-router";
import useUserStore from "./stores/userStore";

const App = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  return (
    <>
      <p>Header Menu</p>
      <p className="text-blue-700">Welcome, {user.firstName}</p>
      <button className="btn btn-accent" onClick={logout}>
        Logout
      </button>
      <Outlet />
      {/*จะมี children ติดมาด้วยตาม path ที่กำหนดไว้ สามารถเปลี่ยนตำแหน่งการวางบน-ล่างได้*/}
    </>
  );
};
export default App;
```

## Step 7 Edit App.jsx and Creat Folder components

### components/Header.jsx

```js
function Header() {
  return <div>Header</div>;
}
export default Header;
```

---

### App.jsx

```js
import { Outlet } from "react-router";
import useUserStore from "./stores/userStore";
import Header from "./components/Header";

const App = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  return (
    <>
      <div className="min-h-screen bg-lime-100">
        <Header />
        <main className="relative flex bg-gray-100 border pt-14">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default App;
```
---

### หารูป svg  https://www.svgrepo.com/ แล้วเอาไปแปลงใน https://transform.tools/

### Edit icons/index.jsx
```js
export const FacebookTitle = (props) => {
  return (
    <svg
      width="230"
      height="50"
      viewBox="0 0 230 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // ทุก props ที่รับมาจะมาอยู่ที่นี่
    >
      <text
        x="10"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="#1877F2"
      >
        FaKebook
      </text>
    </svg>
  );
};


export function FacebookLogo(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill="#1877F2"
        d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
      />
      <path
        fill="#fff"
        d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
      />
    </svg>
  )
}


export function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.796 15.811L21 21m-3-10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path
          d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
          strokeLinecap="round"
        />
        <path
          opacity={0.5}
          d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
          strokeLinecap="round"
        />
        <path d="M4 22V9.5M20 22V9.5" strokeLinecap="round" />
        <path
          opacity={0.5}
          d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </g>
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.658 9.286c1.44.9 2.16 1.35 2.407 1.926a2 2 0 010 1.576c-.247.576-.967 1.026-2.407 1.926L9.896 18.94c-1.598.999-2.397 1.498-3.056 1.445a2 2 0 01-1.446-.801C5 19.053 5 18.111 5 16.226V7.774c0-1.885 0-2.827.394-3.358a2 2 0 011.446-.801c.66-.053 1.458.446 3.056 1.445l6.762 4.226z"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MarketIcon(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21.617 9.088l-1.429-5A1.507 1.507 0 0018.746 3H5.254a1.507 1.507 0 00-1.442 1.088l-1.429 5A1.5 1.5 0 003.826 11H4v7.5A2.503 2.503 0 006.5 21h11a2.503 2.503 0 002.5-2.5V11h.174a1.5 1.5 0 001.443-1.912zM19 18.5a1.502 1.502 0 01-1.5 1.5h-11A1.502 1.502 0 015 18.5V11h14zm1.574-8.699a.497.497 0 01-.4.199H3.826a.5.5 0 01-.48-.638l1.428-5A.501.501 0 015.254 4h13.492a.501.501 0 01.48.362l1.428 5a.496.496 0 01-.08.44z" />
    </svg>
  )
}

export function FriendIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={3}
      stroke="#000"
      fill="none"
      {...props}
    >
      <circle cx={22.83} cy={22.57} r={7.51} />
      <path d="M38 49.94a15.2 15.2 0 00-15.21-15.2h0a15.2 15.2 0 00-15.2 15.2z" />
      <circle cx={44.13} cy={27.22} r={6.05} />
      <path d="M42.4 49.94h14A12.24 12.24 0 0044.13 37.7h0a12.21 12.21 0 00-5.75 1.43" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function MessengerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 2C6.369 2 2 6.126 2 11.701c0 2.916 1.195 5.435 3.14 7.174.162.146.26.349.268.57l.056 1.78a.798.798 0 001.121.705l1.986-.875a.81.81 0 01.533-.04c.912.25 1.883.386 2.894.386C17.631 21.4 22 17.275 22 11.7 22 6.125 17.632 2 12.002 2zm5.25 7.579L14.75 13.55a1.279 1.279 0 01-1.85.342l-1.992-1.493a.513.513 0 00-.615 0l-2.688 2.04c-.357.273-.828-.157-.589-.536L9.52 9.932a1.28 1.28 0 011.85-.342l1.992 1.493a.514.514 0 00.614 0l2.688-2.04c.36-.277.832.153.589.536z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NotificationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.313 12.463C6.2 9.293 8.61 6.625 11.701 6.5c3.091.125 5.501 2.792 5.388 5.963 0 1.317 1.395 2.6 1.436 3.92v.056c.03.846-.613 1.557-1.437 1.59h-3.112a2.583 2.583 0 01-.666 1.747 2.162 2.162 0 01-1.609.724 2.162 2.162 0 01-1.609-.724 2.582 2.582 0 01-.666-1.747H6.313c-.824-.033-1.467-.744-1.437-1.59v-.056c.042-1.316 1.437-2.602 1.437-3.92z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.426 17.279a.75.75 0 000 1.5v-1.5zm4.55 1.5a.75.75 0 000-1.5v1.5zm-1.3-13.529a.75.75 0 000-1.5v1.5zm-1.95-1.5a.75.75 0 000 1.5v-1.5zm-1.3 15.029h4.55v-1.5h-4.55v1.5zm3.25-15.029h-1.95v1.5h1.95v-1.5z"
        fill="#000"
      />
    </svg>
  )
}

export function DropdownArrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
        fill="#000"
      />
    </svg>
  )
}
```
---

สร้าง avatar
### Create components/Avatar.jsx
```js
import defaultImg from "../assets/default-avatar.png";
import { DropdownArrow } from "../icons";

const Avatar = (props) => {
  const { imgSrc, menu, ...restProps } = props;
  return (
    <div className="avatar items-center cursor-pointer">
      <div {...restProps}>
        <img src={imgSrc ? imgSrc : defaultImg} alt="avatar" />
      </div>
      {menu && <DropdownArrow className="absolute -bottom-2 -right-1 w-4" />}
    </div>
  );
};
export default Avatar;
```
---


### Create pages/Profile.jsx
```js
import useUserStore from "../stores/userStore";

const Profile = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div>
      <div className="text-4xl">
        {user.firstName} {user.lastName}
      </div>
      <img src={user.profileImage} alt="" />
    </div>
  );
};

export default Profile;
```
---
เพิ่มหน้า profile
### Edit AppRouter.jsx
```js
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Friends from "../pages/Friends";
import useUserStore from "../stores/userStore";
import Profile from "../pages/Profile";

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "*", element: <Navigate to="/" /> }, // ถ้าพิมพ์ path มั่วๆมาจะไปที่หน้า Home page
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <p>Sidebar + Posts</p> },
      { path: "friends", element: <Friends /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <Navigate to="/" /> }, // ถ้าพิมพ์ path มั่วๆมาจะไปที่หน้า Home page
    ],
  },
]);

export default function AppRouter() {
  const user = useUserStore((state) => state.user);
  const finalRouter = user ? userRouter : guestRouter;
  return <RouterProvider key={user?.id} router={finalRouter} />; // เพิ่ม key จะทำให้กด login แล้วหน้าเว็บเปลี่ยน
}
```
---

ทำหน้าเพจที่เข้าไปตอน login
### Header.jsx
```js
import { Link } from "react-router";
import {
  FacebookLogo,
  FriendIcon,
  HomeIcon,
  MarketIcon,
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  PlayIcon,
  SearchIcon,
} from "../icons";
import useUserstore from "../stores/userStore";
import Avatar from "./Avatar";

function Header() {
  const user = useUserstore((state) => state.user);
  const logout = useUserstore((state) => state.logout);
  console.log(user);
  return (
    <header className="flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
      {/* Searchh bar */}
      <div className="flex-1 flex gap-2 items-center">
        <FacebookLogo className="w-12" />
        <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <SearchIcon className="w-4 opacity-60" />
        </label>
      </div>
      {/* Center icon menu */}
      <div className="flex-1 flex gap-2 justify-center">
        <Link
          to="/"
          className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900"
        >
          <HomeIcon className="w-1/2" />
        </Link>
        <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
          <PlayIcon className="w-1/2" />
        </div>
        <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
          <MarketIcon className="w-1/2" />
        </div>
        <Link
          to="/friends"
          className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900"
        >
          <FriendIcon className="w-3/5" />
        </Link>
      </div>
      {/* Right menu + drop down */}
      <div className="flex-1 flex gap-3 justify-end">
        <div className="avatar justify-center items-center">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessengerIcon className="w-6" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <NotificationIcon className="w-8" />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 btn-circle">
            <Avatar
              className="w-11 h-11 rounded-full bg-slate-400"
              menu={true}
              imgSrc={user.profileImage}
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <div className="divider my-0"></div>
            <li onClick={logout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
```