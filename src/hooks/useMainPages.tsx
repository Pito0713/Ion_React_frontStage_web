import ScatterChart from "../pages/TablePage/ScatterChart";
import PieChart from "../pages/TablePage/PieChart";
import BarChart from "../pages/TablePage/BarChart";
import AddAdmin from "../pages/Setting/AddAdmin";
import ChangePassWord from "../pages/Setting/ChangePassWord";
import TablePage from "../pages/TablePage";
export const useMainPages = () => {
  return [
    {
      path: "/mainPage",
      element: <TablePage />,
    },
    {
      path: "tablePage",
      element: <TablePage />,
    },
    {
      path: "scatterChart",
      element: <ScatterChart />,
    },
    {
      path: "pieChart",
      element: <PieChart />,
    },
    {
      path: "barChart",
      element: <BarChart />,
    },
    {
      path: "addAdmin",
      element: <AddAdmin />,
    },
    {
      path: "changePassWord",
      element: <ChangePassWord />,
    },
  ]
};
