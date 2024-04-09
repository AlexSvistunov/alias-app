import { useState } from "react";

import "./Teams.css";
import TeamItem from "../TeamItem/TeamItem";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { removeTeam } from "../../store/slices/teamSlice";

const Teams = () => {
  const dispatch = useDispatch()

  const teamsList = useSelector(state => state.team.teamList)
  console.log(teamsList);

  const deleteTeam = (index) => {
    if(teamsList.length > 2) {
      dispatch(removeTeam(index))
    } else {
      alert('Вы не можете удалить команду, так как команд должно быть как минимум две')
    }
  }

  return (
    <section className="team">
      <div className="container">
        <h3 className="team__title">Выбор команд</h3>

        <div className="team__list">
          {teamsList.map((team, index) => (
            <TeamItem key={team.name} team={team} index={index} deleteTeam={deleteTeam} />
          ))}

          <div className="team__item">
            <Link className="team__create" to={"/create-team"} />

            <div className="team__circle">
              <img
                className="team__img"
                src="/src/assets/plus.svg"
                width={87}
                height={87}
              ></img>
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
