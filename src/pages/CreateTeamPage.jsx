import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addTeam } from "../store/slices/teamSlice";
import { removeTeam } from "../store/slices/teamSlice";

const CreateTeamPage = () => {
  const [name, setName] = useState("");
  const [memberName, setMemberName] = useState("");

  const [membersList, setMembersList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const teamList = useSelector((state) => state.team.teamList);

  const createTeam = () => {
    dispatch(
      addTeam({
        name,
        avatar: "cat.png",
        people: membersList,
        color: "#0096ff",
      })
    );
    navigate('/alias')
    
  };

  const addMember = () => {
    setMembersList([
      ...membersList,
      {
        name,
        memberName,
      },
    ]);
  };

  console.log(membersList);

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

        {/* fieldSet */}

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
