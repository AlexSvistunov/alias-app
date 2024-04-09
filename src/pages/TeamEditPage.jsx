import { useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeName, addPerson, deletePerson } from "../store/slices/teamSlice";
import { ROUTES } from "../routes";

const TeamEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const teamsListItem = useSelector((state) => state.team.teamList)[id];

  const [nameValue, setNameValue] = useState(teamsListItem.name);
  const [memberNameValue, setMemberNameValue] = useState("");
  console.log(nameValue);

  const nameOnChange = (value) => {
    setNameValue(value);
  };

  const applyChanges = () => {
    if (nameValue) {
      dispatch(changeName({ index: id, nameValue }));
      navigate(ROUTES.teams);
    }
  };

  const addPersonHandler = (person) => {
    if (person) {
      dispatch(addPerson({ index: id, person }));
    }
  };

  const deletePersonHandler = (personId) => {
    dispatch(deletePerson({index: id, personId}))
  }

  return (
    <section className="edit">
      <div className="container">
        <h2>Редактор команды</h2>

        <label htmlFor="name">Название команды</label>
        <input
          name="name"
          value={nameValue}
          onChange={(e) => {
            nameOnChange(e.target.value);
          }}
        ></input>

        <label htmlFor="members">Участник</label>
        <input
          name="members"
          value={memberNameValue}
          onChange={(e) => {
            setMemberNameValue(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            addPersonHandler(memberNameValue);
          }}
        >
          Добавить участника
        </button>

        <button onClick={applyChanges}>Готово</button>

        {teamsListItem?.people?.length
          ? teamsListItem?.people?.map((person, index) => (
              <div key={person?.memberName}>
                <span>{person?.memberName}</span>
                <button onClick={() => {
                  deletePersonHandler(index)
                }}>X</button>
              </div>
            ))
          : null}
      </div>
    </section>
  );
};

export default TeamEditPage;
