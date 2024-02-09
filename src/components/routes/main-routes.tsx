import Dashboard from "components/pages/dashboard/dashboard.component";
import Prices from "components/pages/prices/prices.component";
import Sidebar from "components/sidebar/sidebar.component";
import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

type RouteWrapperProps = {
  element: ReactNode;
};

const RouteWrapper = ({ element }: RouteWrapperProps) => {
  return <Sidebar>{element}</Sidebar>;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteWrapper element={<Dashboard />} />,
  },
  {
    path: "/prices",
    element: <RouteWrapper element={<Prices />} />,
  },
]);
