import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Friends from "../pages/Friends";
import useUserStore from "../stores/userStore";
import Profile from "../pages/Profile";
import SidebarMenu from "../components/SidebarMenu";
import PostContainer from "../components/PostContainer";
import SidebarContact from "../components/SidebarContact";

const guestRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "*", element: <Navigate to="/" /> }, // ถ้าพิมพ์ path มั่วๆมาจะไปที่หน้า Home page
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <SidebarMenu />
            <PostContainer />
            <SidebarContact />
          </>
        ),
      },
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
