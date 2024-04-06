import { useState } from "react";

import "./Teams.css";

const Teams = () => {
  const [teams, setTeams] = useState([
    { name: "Красные", avatar: "cat.png", people: [], color: "#ff6347" },
    { name: "Синие", avatar: "chick.png", people: [], color: "#0096ff" },
  ]);

  const addTeam = (teamName, teamAvatar, teamPeople, teamColor) => {
    setTeams([
      ...teams,
      {
        name: teamName,
        avatar: teamAvatar,
        people: teamPeople,
        color: teamColor
        
      }
    ])
  }

  return (
    <section className="team">
      <div className="container">
        <h3 className="team__title">Выбор команд</h3>

        <div className="team__list">
          {teams.map((team) => (
            <div className="team__item" key={team.name}>
              <div
                className="team__circle"
                style={{ backgroundColor: team.color }}
              >
                <img
                  className="team__img"
                  src={`/src/assets/${team.avatar}`}
                ></img>

              <button className="team__delete">X</button>
              </div>
              <h3 className="team__name">{team.name}</h3>


            </div>
          ))}

          <div className="team__item">
            <div className="team__circle">
              <img className="team__img" src="/src/assets/plus.svg" width={87} height={87}></img>
            </div>

            <h3 className="team__name">Добавить команду</h3>
          </div>
        </div>
        <button>Добавить команду</button>
      </div>
    </section>
  );
};

export default Teams;
