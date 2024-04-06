import { Routes, Route} from "react-router-dom"
import { ROUTES } from "../../routes";

import LandingPage from '../../pages/LandingPage'
import AliasPage from "../../pages/AliasPage";
import CreateTeamPage from "../../pages/CreateTeamPage";

const AppRoutes = () => {
  return <>
    <Routes>
      <Route path={ROUTES.landingPage} element={<LandingPage/>}></Route>
      <Route path={ROUTES.alias} element={<AliasPage/>}></Route>
      <Route path={ROUTES.createTeam} element={<CreateTeamPage/>}></Route>
    </Routes>
  </>;
};

export default AppRoutes;
