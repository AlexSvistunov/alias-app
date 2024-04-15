import { useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeName, addPerson, deletePerson } from "../store/slices/teamSlice";
import { ROUTES } from "../routes";

import "./TeamEditPage.css";
import BottomBtn from "../components/BottomBtn/BottomBtn";

const TeamEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const teamsListItem = useSelector((state) => state.team.teamList)[id];

  const [nameValue, setNameValue] = useState(teamsListItem.name);
  const [memberNameValue, setMemberNameValue] = useState("");
  
  const [color, setColor] = useState('rgb(251, 56, 34)')
  const [avatar, setAvatar] = useState('avocado.png')

  
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
    dispatch(deletePerson({ index: id, personId }));
  };

  return (
    <section
      className="edit"
      style={{ height: "100vh", backgroundColor: "var(--violet-300)" }}
    >
      <div className="container edit__inner">
        <h2 className="edit__title section-title">Редактор команды</h2>

        <div className="edit__field-wrapper">
          <label htmlFor="name">Название команды</label>
          <input
            name="name"
            value={nameValue}
            onChange={(e) => {
              nameOnChange(e.target.value);
            }}
          ></input>
        </div>

        <div className="edit__field-wrapper">
          <label htmlFor="members">Участник</label>
          <input
            name="members"
            value={memberNameValue}
            onChange={(e) => {
              setMemberNameValue(e.target.value);
            }}
          ></input>
        </div>

        <button
          className="edit__add"
          onClick={() => {
            addPersonHandler(memberNameValue);
          }}
        >
          Добавить участника
        </button>

        <div className="edit__list">
          {teamsListItem?.people?.length
            ? teamsListItem?.people?.map((person, index) => (
                <div className="edit__person" key={person?.memberName}>
                  <span className="edit__person-name">
                    {person?.memberName}
                  </span>
                  <button
                    className="edit__person-delete"
                    onClick={() => {
                      deletePersonHandler(index);
                    }}
                  >
                    X
                  </button>
                </div>
              ))
            : null}
        </div>

        <div className="edit__color">
          <h3 className="edit__color-title">Цвет фона</h3>
          <div className="edit__color-list">
            <div className="edit__color-item edit-item edit__color-item--active">
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--red"></div>
              </div>
            </div>
            <div className="edit__color-item edit-item">
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--pink"></div>
              </div>
            </div>

            <div className="edit__color-item edit-item">
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--blue"></div>
              </div>
            </div>

            <div className="edit__color-item edit-item">
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--yellow"></div>
              </div>
            </div>

            <div className="edit__color-item edit-item">
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--green"></div>
              </div>
            </div>

            <div className="edit__color-item edit-item">
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--purple"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit__avatar">
          <h3 className="edit__avatar-title">Аватарка</h3>

          <div className="edit__avatar-items">
            <div className="edit__avatar-item edit__avatar-item--active">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/avocado.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/banana.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/bread.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/broccoli.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/cake.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/carrot.png"
                  ></img>
                </div>
              </div>
            </div>

            {/* <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/chili.png"
                  ></img>
                </div>
              </div>
            </div> */}

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/donut.png"
                  ></img>
                </div>
              </div>
            </div>

            {/* <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/eggs.png"
                  ></img>
                </div>
              </div>
            </div> */}

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/muffin.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/mushroom.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/src/assets/pasta.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={applyChanges}>Готово</button> */}
      <BottomBtn from="team-edit" />
    </section>
  );
};

export default TeamEditPage;
