import { Link } from "react-router-dom";

const TeamItem = ({ team, index, deleteTeam }) => {
  return (
    <div
      className="team__item"
      key={team.name}
      style={{ position: "relative" }}
    >
      <Link
        style={{ position: "absolute", inset: "0" }}
        to={`/edit-team/${index}`}
      />
      <div className="team__circle" style={{ backgroundColor: team.color[1]}}>
        <img className="team__img" src={`/${team.avatar}`}></img>

        <div className="team__btn-circle">
          <button
            className="team__delete"
            onClick={() => deleteTeam(index)}
          ></button>
        </div>
      </div>
      <h3 className="team__name">{team.name}</h3>
      <div className="team__people" style={{ display: "flex", gap: "2px" }}>
        {team?.people?.map((person, personIndex) =>
            personIndex + 1 === team.people.length ? (
              <div key={personIndex}>{person.memberName}</div>
            ) : (
              <div key={personIndex}>{person.memberName + ","}</div>
            )
        )}
      </div>
    </div>
  );
};

export default TeamItem;
