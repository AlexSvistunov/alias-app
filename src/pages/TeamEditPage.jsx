import { useState } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeFields, addPerson, deletePerson } from "../store/slices/teamSlice";
import { ROUTES } from "../routes";

import "../styles/TeamEditPage.css";
import RedirectNotFound from "../components/RedirectNotFound/RedirectNotFound";

const TeamEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const teamsListItem = useSelector((state) => state.team.teamList)[id];

  const [nameValue, setNameValue] = useState(teamsListItem?.name);
  const [memberNameValue, setMemberNameValue] = useState("");
  
  const [color, setColor] = useState(teamsListItem?.color)
  const [avatar, setAvatar] = useState(teamsListItem?.avatar)


  if(typeof teamsListItem === 'undefined') {
    return <RedirectNotFound/>
  }

  const nameOnChange = (value) => {
    setNameValue(value);
  };

  const applyChanges = () => {
    if (nameValue) {
      dispatch(changeFields({ index: id, newName: nameValue, color, avatar }));
      navigate(ROUTES.teams);
    }
  };

  const addPersonHandler = (person) => {
    if (person && teamsListItem.people.length < 5) {
      dispatch(addPerson({ index: id, person }));
      setMemberNameValue('')
    } 

    if(!person) {
      alert('Проверьте имя участника. Оно должно содержать не менее 1 символа!')
    }

    if(teamsListItem.people.length >= 5) {
      alert('Нельзя создать более 5 участников')
    }
  };

  const deletePersonHandler = (personId) => {
    dispatch(deletePerson({ index: id, personId }));
  };

  const colorActiveHandler = (color, rgbColor) => {
    setColor([color, rgbColor])
  }

  const avatarActiveHandler = (avatar) => {
    setAvatar(avatar)
  }



  return (
    <section
      className="edit"
      style={{ minHeight: "100vh", backgroundColor: "var(--violet-300)" }}
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
          {/* <div className="edit__color-item edit-item edit__color-item--active" onClick={() => colorActiveHandler('Красный', 'rgb(251, 56, 34)')}> */}
            <div className={color[0] === 'Red' ? 'edit__color-item edit-item edit__color-item--active' : 'edit__color-item edit-item'} onClick={() => colorActiveHandler('Red', 'rgb(251, 56, 34)')}>
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--red"></div>
              </div>
            </div>
            <div className={color[0] === 'Pink' ? 'edit__color-item edit-item edit__color-item--active' : 'edit__color-item edit-item'} onClick={(e) => colorActiveHandler('Pink', '#c960be')}>
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--pink"></div>
              </div>
            </div>

            <div className={color[0] === 'Blue' ? 'edit__color-item edit-item edit__color-item--active' : 'edit__color-item edit-item'} onClick={(e) => colorActiveHandler('Blue', 'rgb(25, 132, 246)')}>
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--blue"></div>
              </div>
            </div>
 
            <div className={color[0] === 'Yellow' ? 'edit__color-item edit-item edit__color-item--active' : 'edit__color-item edit-item'} onClick={(e) => colorActiveHandler('Yellow', 'rgb(207, 244, 0)')}>
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--yellow"></div>
              </div>
            </div>

            <div className={color[0] === 'Green' ? 'edit__color-item edit-item edit__color-item--active' : 'edit__color-item edit-item'} onClick={(e) => colorActiveHandler('Green', 'rgb(71, 251, 71)')}>
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--green"></div>
              </div>
            </div>

            <div className={color[0] === 'Purple' ? 'edit__color-item edit-item edit__color-item--active' : 'edit__color-item edit-item'} onClick={(e) => colorActiveHandler('Purple', 'rgb(140 22 186)')}>
              <div className="edit-item__circle">
                <div className="edit-item__color edit-item__color--purple"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="edit__avatar">
          <h3 className="edit__avatar-title">Аватарка</h3>

          <div className="edit__avatar-items">
          {/* <div className="edit__avatar-item edit__avatar-item--active"> */}
            <div className={avatar === 'avocado.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'} onClick={() => avatarActiveHandler('avocado.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/avocado.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className={avatar === 'banana.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'}  onClick={() => avatarActiveHandler('banana.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/banana.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className={avatar === 'bread.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'}  onClick={() => avatarActiveHandler('bread.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/bread.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className={avatar === 'broccoli.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'}  onClick={() => avatarActiveHandler('broccoli.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/broccoli.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className={avatar === 'cake.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'} onClick={() => avatarActiveHandler('cake.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/cake.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className={avatar === 'carrot.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'} onClick={() => avatarActiveHandler('carrot.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/carrot.png"
                  ></img>
                </div>
              </div>
            </div>

            {/* <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/chili.png"
                  ></img>
                </div>
              </div>
            </div> */}

            <div className={avatar === 'donut.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'} onClick={() => avatarActiveHandler('donut.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/donut.png"
                  ></img>
                </div>
              </div>
            </div>

            {/* <div className="edit__avatar-item">
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/eggs.png"
                  ></img>
                </div>
              </div>
            </div> */}

            <div className={avatar === 'muffin.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'} onClick={() => avatarActiveHandler('muffin.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/muffin.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className={avatar === 'mushroom.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'} onClick={() => avatarActiveHandler('mushroom.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/mushroom.png"
                  ></img>
                </div>
              </div>
            </div>

            <div className={avatar === 'pasta.png' ? 'edit__avatar-item edit__avatar-item--active' : 'edit__avatar-item'} onClick={() => avatarActiveHandler('pasta.png')}>
              <div className="edit__avatar-circle">
                <div className="edit__avatar-img">
                  <img
                    className="edit__avatar-image"
                    src="/pasta.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="edit__btn" onClick={applyChanges}>Готово</button>
      </div>


      {/* <BottomBtn from="team-edit" /> */}
    </section>
  );
};

export default TeamEditPage;
