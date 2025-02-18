import { Outlet } from "react-router";
import useUserStore from "./stores/userStore";
import Header from "./components/Header"

const App = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  return (
    <>
   <div className="min-h-screen bg-lime-100">
    <Header/>
    <main className="relative flex gap-2 bg-gray-100 border pt-14">
      <Outlet/> 
      {/* Outlet คือ children */}
    </main>
   </div>
    </>
  );
};
export default App;
