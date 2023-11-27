import * as React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { useAppPages } from "../hooks/useAppPages";
import { useMainPages } from "../hooks/useMainPages";
import MainPage from '../pages';

export const RootRouter: React.FC<any> = ({}) => {

  const AuthedPage = () => {
    return (
      <HashRouter>
        <Routes>
          {useAppPages().map((el) => (
            <Route path={el.path} element={el.element} key={el.path} />
          ))}
          <Route path="/mainPage" element={<MainPage />} key="/mainPage">
            {useMainPages().map((el) => (
              <Route path={el.path} element={el.element} key={el.path} />
            ))}
          </Route>
        </Routes>
      </HashRouter>
    );
  };


  return <AuthedPage /> 
};

export default RootRouter;