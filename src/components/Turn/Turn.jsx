import { useSelector } from "react-redux";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

import "./Turn.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

import { useDispatch } from "react-redux";
import { pickWinner } from "../../store/slices/teamSlice";
import BottomBtn from "../BottomBtn/BottomBtn";
import { useEffect } from "react";

const Turn = () => {
  const dispatch = useDispatch();
  const teamList = useSelector((state) => state.team.teamList);
  console.log(teamList);
  const turn = useSelector((state) => state.turn.turn);
  const scoreForWin = useSelector(
    (state) => state.settings.settings.scoreForWin
  );
  console.log(scoreForWin);

  const winTeams = teamList.filter((team) => team.score >= scoreForWin);
  if (winTeams.length === 1 && turn === 0) {
    dispatch(pickWinner({ name: winTeams[0].name }));
  }
  if (winTeams.length > 1 && turn === 0) {
    let max = 0;

    winTeams.forEach((team) => {
      if (max < team.score) {
        max = team.score;
      }

    });

    console.log(max);

    const itemWithMaxScore = winTeams.filter(team => team.score === max)
    if(itemWithMaxScore.length === 1) {
      dispatch(pickWinner({ name: itemWithMaxScore[0].name }));
    }


  }
  console.log(winTeams);

  const smdIsWinner = teamList.find((team) => team.isWinner === true);
  console.log(smdIsWinner);

  useEffect(() => {
    if (smdIsWinner) {
      confetti();
    }
  }, [smdIsWinner]);

  return (
    <section className="turn">
      <div className="container">
        {smdIsWinner ? (
          <>
            <h2 className="turn__title section-title">Победила команда</h2>
            <div className="turn__turned-team">
              <div className="turn__turned-circle" style={{backgroundColor: `${smdIsWinner.color[1]}`}}>
                <img
                  className="turn__turned-img"
                  src={`/src/assets/${smdIsWinner.avatar}`}
                ></img>
              </div>
              <span className="turn__turned-name">{smdIsWinner.name}</span>
            </div>

            <div className="turn__teams">
              {teamList.map((team) => (
                <>
                <div
                    className={
                      smdIsWinner === team
                        ? "turn__team turn__team--active"
                        : "turn__team"
                    }
                    key={team.name}
                  >
                    <div className="turn__team-left">
                      <div className="turn__team-circle" style={{backgroundColor: `${team.color[1]}`}}>
                        <img
                          className=""
                          src={`/src/assets/${team.avatar}`}
                        ></img>
                      </div>

                      <div className="turn__team-info">
                        <span className="turn__team-name">{team.name}</span>
                        <span className="turn__team-members"></span>
                      </div>
                    </div>

                    <span className="turn__team-score">{team.score}</span>
                  </div>
                </>
              ))}

              {/* active team */}
            </div>

            {/* <Link style={{ marginTop: "50px" }} to={ROUTES.game}>
          Играть
        </Link> */}

            <BottomBtn from="score-winner"></BottomBtn>
          </>
        ) : (
          <>
            <h2 className="turn__title section-title">Очередь команды</h2>
            <div className="turn__turned-team">
              <div className="turn__turned-circle" style={{backgroundColor: `${teamList[turn].color[1]}`}}>
                <img
                  className="turn__turned-img"
                  src={`/src/assets/${teamList[turn].avatar}`}
                ></img>
              </div>
              <span className="turn__turned-name">{teamList[turn].name}</span>
            </div>

            <div className="turn__teams">
              {teamList.map((team) => (
                <>
                  <div
                    className={
                      teamList[turn] === team
                        ? "turn__team turn__team--active"
                        : "turn__team"
                    }
                    key={team.name}
                  >
                    <div className="turn__team-left">
                      <div className="turn__team-circle" style={{backgroundColor: `${team.color[1]}`}}>
                        <img
                          className=""
                          src={`/src/assets/${team.avatar}`}
                        ></img>
                      </div>

                      <div className="turn__team-info">
                        <span className="turn__team-name">{team.name}</span>
                        <span className="turn__team-members"></span>
                      </div>
                    </div>

                    <span className="turn__team-score">{team.score}</span>
                  </div>
                </>
              ))}

              {/* active team */}
            </div>

            {/* <Link style={{ marginTop: "50px" }} to={ROUTES.game}>
          Играть
        </Link> */}

            <BottomBtn from="score"></BottomBtn>
          </>
        )}
      </div>
    </section>
  );
};

export default Turn;
