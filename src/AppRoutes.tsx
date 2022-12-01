import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import HomePage from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import Error404 from "./pages/Error404";
import "./styles/App.css";
const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
         {/* Protected Route */}
         <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
