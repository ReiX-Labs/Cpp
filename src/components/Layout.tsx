import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  const location = useLocation();

  // scroll to top on navigation (unless jumping to an in-page anchor)
  useEffect(() => {
    if (!new URLSearchParams(location.search).has("anchor")) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, location.search]);

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
