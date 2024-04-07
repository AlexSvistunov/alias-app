import { useSelector } from "react-redux";

import './Turn.css'
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

const Turn = () => {
  const teamList = useSelector((state) => state.team.teamList);
  const turn = useSelector((state => state.turn.turn))

  return (
    <section className="turn">
      <div className="container">
        <h2 className="turn__title">Очередь команды</h2>
        <div className="turn__turned-team">
          <img className="" src={`/src/assets/${teamList[turn].avatar}`}></img>
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
