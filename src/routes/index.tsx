import { createBrowserRouter } from "react-router-dom";
import DashboardError from "../layout/DashboardError.tsx";
import Dashboard from "../modules/layout/Dashboard/index.tsx";
import ClientDashboard from "../modules/layout/ClientDashboard/index.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <DashboardError />,
  },
  {
    path: "clients/:id",
    element: <ClientDashboard />,
  },
]);
