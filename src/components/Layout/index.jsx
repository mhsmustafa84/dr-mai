import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CustomCursor from "../CustomCursor";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <CustomCursor />
      <Footer />
    </>
  );
}
