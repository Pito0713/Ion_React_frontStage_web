import { HashRouter, Route, Routes } from "react-router-dom";
import { useAppPages } from "../pages/hooks/useAppPages";

export const RootRouter: React.FC<any> = ({}) => {
  return (
    <HashRouter>
      <Routes>
        {useAppPages().map((el) => (
          <Route path={el.path} element={el.element} key={el.path} />
        ))}
      </Routes>
    </HashRouter>
  );
};

export default RootRouter;