import { useState } from "react";

import "./Teams.css";
import TeamItem from "../TeamItem/TeamItem";
import { Link } from "react-router-dom";

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
           <TeamItem key={team.name} team={team}/>
          ))}

          <div className="team__item">
            <Link className="team__create" to={'/create-team'}/>
            
            <div className="team__circle">
              <img className="team__img" src="/src/assets/plus.svg" width={87} height={87}></img>
            </div>

            <h3 className="team__name">Добавить команду</h3>
          </div>
        </div>
        {/* <button>Добавить команду</button> */}
      </div>
    </section>
  );
};

export default Teams;
