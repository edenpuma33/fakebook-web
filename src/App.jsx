import { Outlet } from "react-router";

const App = () => {
  return (
    <>
    <p>Header Menu</p>
    <Outlet />{" "}
    {/*จะมี children ติดมาด้วยตาม path ที่กำหนดไว้ สามารถเปลี่ยนตำแหน่งการวางบน-ล่างได้*/}
  </>
  );
};
export default App;
