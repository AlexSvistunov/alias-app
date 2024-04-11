import { useSelector } from "react-redux";

import './Turn.css'
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

import {useDispatch} from 'react-redux'
import { pickWinner } from "../../store/slices/teamSlice";

const Turn = () => {
  const dispatch = useDispatch()
  const teamList = useSelector((state) => state.team.teamList);
  console.log(teamList);
  const turn = useSelector((state) => state.turn.turn)
  const scoreForWin = useSelector(state => state.settings.settings.scoreForWin)
  console.log(scoreForWin);
  
  const winTeams = teamList.filter((team) => team.score >= scoreForWin)
  if(winTeams.length === 1 && turn === teamList.length - 1) {
    console.log('Есть 1 победитель')
  }
  if(winTeams.length > 1 && turn === teamList.length - 1) {
    console.log('Победителей несколько, ща узнаем у кого больше очков')
    // let strongest = winTeams[0].score
    // for(let i = 0; i < winTeams.length; i++) {
    //   if(strongest < winTeams[i].score) {
    //     strongest = winTeams[i].score
    //   }

      // dispatch(pickWinner({index : }))
    }

  // победитель может определиться и до последнего раунда, но хз.. нужно чтобы раунды дальше не шли

  // if(winTeams === 1) {
  // }
  console.log(winTeams);

  // тут еще нужно учесть, что все команды завершили свои раунды
  // выигрыш по очкам

  return (
    <section className="turn">
      <div className="container">
        <h2 className="turn__title section-title">Очередь команды</h2>
        <div className="turn__turned-team">
          <img className="turn__turned-img" src={`/src/assets/${teamList[turn].avatar}`}></img>
          <span>{teamList[turn].name}</span>
        </div>

        <div className="turn__teams">
          {teamList.map((team) => (
            <div className="turn__team" key={team.name}>
              <div className="turn__team-left">
                <img className="" src={`/src/assets/${team.avatar}`}></img>
                <span>{team.name}</span>
              </div>

              <span>{team.score}</span>
            </div>
          ))}
        </div>

        <Link style={{ marginTop: "50px" }} to={ROUTES.game}>Играть</Link>
      </div>
    </section>
  );
};

export default Turn;
