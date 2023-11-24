import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { useAppPages } from "../hooks/useAppPages";
import { useMainPages } from "../hooks/useMainPages";
import { BrowserRouter } from "react-router-dom";
import MainPage from '../pages';

export const RootRouter: React.FC<any> = ({}) => {

  const AuthedPage = () => {
    return (
      <BrowserRouter basename="/ion-react-backstage-web">
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
      </BrowserRouter>
    );
  };


  return <AuthedPage /> 
};

export default RootRouter;