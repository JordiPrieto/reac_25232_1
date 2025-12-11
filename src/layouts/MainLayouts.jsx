import {Header} from "../components/Header/Header"
import { Outlet } from "react-router-dom";

export const MainLayouts = () => {
  return (
    <>
      <Header/>
      <main className="container">
      <h1>"Ferreteria La Arandela"</h1>
        <Outlet />
      </main>
    </>
  );
};