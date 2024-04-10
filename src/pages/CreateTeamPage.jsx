import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addTeam } from "../store/slices/teamSlice";
import { removeTeam } from "../store/slices/teamSlice";
import { ROUTES } from "../routes";

const CreateTeamPage = () => {
  const [name, setName] = useState("");
  const [memberName, setMemberName] = useState("");

  const [membersList, setMembersList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teamList = useSelector((state) => state.team.teamList);

  const createTeam = () => {
    if (name) {
      dispatch(
        addTeam({
          name,
          avatar: "cat.png",
          people: membersList,
          color: "#0096ff",
          score: 0,
        })
      );
      navigate(ROUTES.teams);
    }
  };

  const addMember = () => {
    if (name && memberName) {
      setMembersList([
        ...membersList,
        {
          name,
          memberName,
        },
      ]);
    }
  };

  // const deletePersonHandler = (personId) => {
  //   dispatch(deletePerson({index: id, personId}))
  // }

  return (
    <div className="create-team">
      <div className="container">
        <h2 className="create-team__title">Создать команду</h2>

        <input
          className="create-team__input"
          placeholder="Введите название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          className="create-team__input"
          placeholder="Имя участника"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        ></input>
        <button onClick={addMember}>Добавить участника</button>

        {membersList.length &&
          membersList.map((member) => (
            <div key={member.memberName}>
              <span>{member.memberName}</span>
              <button onClick={() => {
                // deletePersonHandler(index)
              }}>X</button>
            </div>
          ))}

        <button
          onClick={createTeam}
          style={{ display: "block", marginTop: "50px" }}
        >
          Создать команду
        </button>
      </div>
    </div>
  );
};

export default CreateTeamPage;
