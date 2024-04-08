import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeRoundDuration,
  changeScoreForWin,
} from "../store/slices/settingsSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="settings container">
      <h2>НАСТРОЙКИ</h2>

      <h3>Длительность раунда</h3>

      <button
        onClick={() => {
          dispatch(changeRoundDuration(20));
        }}
      >
        20
      </button>
      <button
        onClick={() => {
          dispatch(changeRoundDuration(30));
        }}
      >
        30
      </button>
      <button
        className="active"
        onClick={() => {
          dispatch(changeRoundDuration(60));
        }}
      >
        60
      </button>
      <button
        onClick={() => {
          dispatch(changeRoundDuration(90));
        }}
      >
        90
      </button>

      <h3>Очки для победы</h3>

      <button
        onClick={() => {
          dispatch(changeScoreForWin(10));
        }}
      >
        10
      </button>

      <button
        className="active"
        onClick={() => {
          dispatch(changeScoreForWin(30));
        }}
      >
        30
      </button>

      <button
        onClick={() => {
          dispatch(changeScoreForWin(50));
        }}
      >
        50
      </button>
  
      <button onClick={() => {
        dispatch(changeScoreForWin(75))
      }}>75</button>
      
      <button onClick={() => {
        dispatch(changeScoreForWin(100))
      }}>100</button>

      <div>
        Отнимать очки за пропуск
        <input type="checkbox"></input>
      </div>

      <Link to={'/alias'}>Продолжить</Link>
    </div>
  );
};

export default SettingsPage;
