import { useSelector } from "react-redux";

const ScorePage = () => {
  const teamList = useSelector((state) => state.team.teamList);
  console.log(teamList);

  return (
    <div className="turn">
      <div className="container">
        <h2 className="turn__title">Очередь команды</h2>

        <div className="turn__teams">
          {teamList.map((team) => (
            <div className="turn__team" key={team.name}>
              <div className="turn__team-left">
                <img className="" src={`/src/assets/${team.avatar}`}></img>
                <span>{team.name}</span>
              </div>

              <span>0</span>
            </div>
          ))}
        </div>

        <button style={{marginTop: '50px'}}>Играть</button>
      </div>
    </div>
  );
};

export default ScorePage;
