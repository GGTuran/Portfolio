import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
