import Setting from "../pages/Setting";
import TablePage from "../pages/TablePage";

export const useMainPages = () => {
  return [
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
