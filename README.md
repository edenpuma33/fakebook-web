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

#### Install react router

```bash
npm i react-router
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
  return (
    <div>Login Page</div>
  )
}
export default Login
```

### pages/Friends.jsx

```js
const Friends = () => {
  return (
    <div>Friends Page</div>
  )
}
export default Friends
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
                    placeholder="Email or Phonenumber"
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
                  <button className="btn btn-secondary text-lg text-white mx-auto">
                    Create new account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
```

