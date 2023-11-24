import HomePage from "../pages/HomePage";
import Setting from "../pages/Setting";
import TablePage from "../pages/TablePage";

export const useMainPages = () => {
  return [
    {
      path: "homePage",
      element: <HomePage />,
    },
    {
      path: "tablePage",
      element: <TablePage />,
    },
    {
      path: "settingPage",
      element: <Setting />,
    },
     
    ]
};
