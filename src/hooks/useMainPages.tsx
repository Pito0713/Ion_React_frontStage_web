import Setting from "../pages/Setting";
import TablePage from "../pages/TablePage";
import AddAdmin from "../pages/Setting/AddAdmin";
import AdminPermissions from "../pages/Setting/AdminPermissions";
import ChangePassWord from "../pages/Setting/ChangePassWord";

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
    {
      path: "addAdmin",
      element: <AddAdmin />,
    },
    {
      path: "adminPermissions",
      element: <AdminPermissions />,
    },
    {
      path: "changePassWord",
      element: <ChangePassWord />,
    },
  ]
};
