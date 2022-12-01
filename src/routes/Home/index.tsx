import { Link, Outlet } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar";

export default function Home() {
  return (
    <>
      <HeaderBar />
      <Outlet/>
    </>
  );
}
