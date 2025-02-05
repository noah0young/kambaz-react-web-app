import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import "./styles.css";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="" element={<Navigate to="Account" />} />
          <Route path="Account/*" element={<Account />} />\
          <Route path="Dashboard/*" element={<Dashboard />} />
          <Route path="Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
