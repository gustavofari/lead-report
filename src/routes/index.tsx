import { createBrowserRouter } from "react-router-dom";
import DashboardError from "../layout/DashboardError.tsx";
import Dashboard from "../modules/layout/Dashboard/index.tsx";
import ClientDashboard from "../modules/layout/ClientDashboard/index.tsx";
import NewClientPage from "../modules/layout/NewClient/NewClientModal.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <DashboardError />,
  },
  {
    path: "clients/new",
    element: <NewClientPage />,
  },
  {
    path: "clients/:id",
    element: <ClientDashboard />,
  },
]);
