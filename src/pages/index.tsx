import Nav from '../components/Nav';
import { Outlet } from "react-router-dom";
function MainPage () {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>

  );
}
export default MainPage;