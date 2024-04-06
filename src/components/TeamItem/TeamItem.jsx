import React from 'react'

const TeamItem = ({team}) => {
  return (
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
  )
}

export default TeamItem