import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TeamEditPage = () => {
  const { id } = useParams();
  const teamsListItem = useSelector(state => state.team.teamList)[id]


  return (
    <section className="edit">
      <div className="container">
        <h2>Редактор команды</h2>

        <label htmlFor="name">Название команды</label>
        <input name="name" value={teamsListItem.name}></input>

        <label htmlFor="members"></label>
        <input name="members"></input>

        <button>Добавить участника</button>

        <button>Готово</button>
      </div>
    </section>
  );
};

export default TeamEditPage;
