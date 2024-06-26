import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { addTeam } from "../store/slices/teamSlice";
import { removeTeam } from "../store/slices/teamSlice";
import { ROUTES } from "../routes";

import "../styles/CreateTeamPage.css";
import "../components/BottomBtn/BottomBtn.css";

import { v4 as uuidv4 } from 'uuid';


const CreateTeamPage = () => {
  const [name, setName] = useState("");
  const [memberName, setMemberName] = useState("");

  const [membersList, setMembersList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teamList = useSelector((state) => state.team.teamList);


  const createTeam = () => {
    if(teamList.length >= 5) {
      alert('Нельзя создать больше, чем 5 команд')
      return
    }

    if (name) {
      dispatch(
        addTeam({
          name,
          avatar: "avocado.png",
          people: membersList,
          color: ['Red', "rgb(251, 56, 34)"],
          score: 0,
          isWinner: false,
          id: uuidv4(),
        })
      );
      navigate(ROUTES.teams);
    }
  };

  const addMember = () => {

    if(!name) {
      alert('Введите название команды, куда будете добавлять участников')
    }

    if(!memberName) {
      alert('Проверьте имя участника. Оно должно содержать не менее 1 символа!')
    }

    if(membersList.length >= 5) {
      alert('Нельзя создать более 5 участников')
    }
    
    if (name && memberName && membersList.length < 5) {
      setMembersList([
        ...membersList,
        {
          name,
          memberName,
        },
      ]);

      setMemberName('')
    }

  
  };

  const deletePersonHandler = (index) => {
    const prevList = [...membersList]
    prevList.splice(index, 1)

    setMembersList(prevList)
  }

  // const deletePersonHandler = (personId) => {
  //   dispatch(deletePerson({index: id, personId}))
  // }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--violet-300)" }}>
      <section className="create-team">
        <div className="container">
          <h2 className="create-team__title section-title">Создать команду</h2>

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
          <button className="create-team__add" onClick={addMember}>
            Добавить участника
          </button>

          {
            <div className="create-team__list">
              {membersList.length
                ? membersList.map((member, index) => (
                    <div className="create-team__item" key={member.memberName}>
                      <span className="create-team__name">
                        {member.memberName}
                      </span>
                      <button
                        className="create-team__delete"
                        onClick={() => {
                          deletePersonHandler(index)
                        }}
                      >
                        X
                      </button>
                    </div>
                  ))
                : null}
            </div>
          }

          <div className="btn-wrapper">
            <button className="btn__wrapper-continue" onClick={createTeam}>Создать команду</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateTeamPage;
