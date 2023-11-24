import LogInPage from "../pages/LogInPage";

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
  ]
};
