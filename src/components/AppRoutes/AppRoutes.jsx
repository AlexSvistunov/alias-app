import { Routes, Route} from "react-router-dom"
import { ROUTES } from "../../routes";

import LandingPage from '../../pages/LandingPage'
import AliasPage from "../../pages/AliasPage";
import CreateTeamPage from "../../pages/CreateTeamPage";
import ScorePage from "../../pages/ScorePage";
import GamePage from "../../pages/GamePage";
import ResultPage from "../../pages/ResultPage";
import TeamEditPage from "../../pages/TeamEditPage";

const AppRoutes = () => {
  return <>
    <Routes>
      <Route path={ROUTES.landingPage} element={<LandingPage/>}></Route>
      <Route path={ROUTES.alias} element={<AliasPage/>}></Route>
      <Route path={ROUTES.createTeam} element={<CreateTeamPage/>}></Route>
      <Route path={ROUTES.score} element={<ScorePage/>}></Route>
      <Route path={ROUTES.game} element={<GamePage/>}></Route>
      <Route path={ROUTES.result} element={<ResultPage/>}></Route>
      <Route path={ROUTES.edit} element={<TeamEditPage/>}></Route>
    </Routes>
  </>;
};

export default AppRoutes;
