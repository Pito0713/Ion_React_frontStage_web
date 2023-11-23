import LogInPage from "../LogInPage";
import MainPage from "../MainPage";

export const useAppPages = () => {
  return [
    {
      path: "/",
      element: <LogInPage />,
    },
    {
      path: "/logInPage",
      element: <LogInPage />,
    },
    {
      path: "/mainPage",
      element: <MainPage />,
    },
  ];
};
