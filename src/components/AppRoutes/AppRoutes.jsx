import { Routes, Route} from "react-router-dom"
import { ROUTES } from "../../routes";
import { useSelector } from "react-redux";

import LandingPage from '../../pages/LandingPage'
import AliasPage from "../../pages/AliasPage";
import CreateTeamPage from "../../pages/CreateTeamPage";
import ScorePage from "../../pages/ScorePage";
import GamePage from "../../pages/GamePage";
import ResultPage from "../../pages/ResultPage";
import TeamEditPage from "../../pages/TeamEditPage";
import SettingsPage from "../../pages/SettingsPage";
import RedirectNotFound from "../RedirectNotFound/RedirectNotFound";

const AppRoutes = () => {
  const flag = useSelector((state) => state.flag.flag)
  
  return <>
    <Routes>
      <Route path={ROUTES.landingPage} element={<LandingPage/>}></Route>
      <Route path={ROUTES.teams} element={<AliasPage/>}></Route>
      <Route path={ROUTES.createTeam} element={<CreateTeamPage/>}></Route>
      <Route path={ROUTES.score} element={<ScorePage/>}></Route>
      <Route path={ROUTES.game} element={<GamePage/>}></Route>
      {flag ? <Route path={ROUTES.result} element={<ResultPage/>}></Route> : null}
      <Route path={ROUTES.edit} element={<TeamEditPage/>}></Route>
      <Route path={ROUTES.settings} element={<SettingsPage/>}></Route>
      <Route path='*' element={<RedirectNotFound/>}/>
    </Routes>
  </>;
};

export default AppRoutes;
