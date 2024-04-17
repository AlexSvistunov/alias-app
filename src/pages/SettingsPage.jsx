import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeRoundDuration,
  changeScoreForWin,
} from "../store/slices/settingsSlice";
import { ROUTES } from "../routes";

import "./Settings.css";
import BottomBtn from "../components/BottomBtn/BottomBtn";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const {roundDuration, scoreForWin} = useSelector(state => state.settings.settings)

  return (
    <div style={{ height: "100vh", backgroundColor: "var(--violet-300)" }}>
      <div className="settings container">
        <h2 className="settings__title section-title">НАСТРОЙКИ</h2>

        <div className="settings__wrapper">
          <h3 className="settings__subtitle">Длительность раунда</h3>

          <div className="settings__inner">
            <button
              className={roundDuration === 20 ? 'settings__duration-btn active' : 'settings__duration-btn'}
              onClick={(e) => {
                const settingsDurationBtns = document.querySelectorAll(
                  ".settings__duration-btn"
                );
                settingsDurationBtns.forEach((settingsDurationBtn) => {
                  settingsDurationBtn.classList.remove("active");
                });

                e.target.classList.add("active");
                dispatch(changeRoundDuration(20));
              }}
            >
              20
            </button>
            <button
              className={roundDuration === 30 ? 'settings__duration-btn active' : 'settings__duration-btn'}
              onClick={(e) => {
                const settingsDurationBtns = document.querySelectorAll(
                  ".settings__duration-btn"
                );
                settingsDurationBtns.forEach((settingsDurationBtn) => {
                  settingsDurationBtn.classList.remove("active");
                });
                e.target.classList.add("active");
                dispatch(changeRoundDuration(30));
              }}
            >
              30
            </button>
            <button
               className={roundDuration === 60 ? 'settings__duration-btn active' : 'settings__duration-btn'}
              onClick={(e) => {
                const settingsDurationBtns = document.querySelectorAll(
                  ".settings__duration-btn"
                );
                settingsDurationBtns.forEach((settingsDurationBtn) => {
                  settingsDurationBtn.classList.remove("active");
                });
                e.target.classList.add("active");
                dispatch(changeRoundDuration(60));
              }}
            >
              60
            </button>
            <button
               className={roundDuration === 90 ? 'settings__duration-btn active' : 'settings__duration-btn'}
              onClick={(e) => {
                const settingsDurationBtns = document.querySelectorAll(
                  ".settings__duration-btn"
                );
                settingsDurationBtns.forEach((settingsDurationBtn) => {
                  settingsDurationBtn.classList.remove("active");
                });
                e.target.classList.add("active");
                dispatch(changeRoundDuration(90));
              }}
            >
              90
            </button>
          </div>

          <h3 className="settings__subtitle">Очки для победы</h3>

          <div className="settings__inner">
            <button
              className={scoreForWin === 10 ? 'settings__score-btn active' : 'settings__score-btn'}
              onClick={(e) => {
                const settingsScoreBtns = document.querySelectorAll(
                  ".settings__score-btn"
                );
                settingsScoreBtns.forEach((settingsScoreBtn) => {
                  settingsScoreBtn.classList.remove("active");
                });

                e.target.classList.add("active");
                dispatch(changeScoreForWin(10));
              }}
            >
              10
            </button>

            <button
             className={scoreForWin === 30 ? 'settings__score-btn active' : 'settings__score-btn'}
              onClick={(e) => {
                const settingsScoreBtns = document.querySelectorAll(
                  ".settings__score-btn"
                );
                settingsScoreBtns.forEach((settingsScoreBtn) => {
                  settingsScoreBtn.classList.remove("active");
                });

                e.target.classList.add("active");
                dispatch(changeScoreForWin(30));
              }}
            >
              30
            </button>

            <button
              className={scoreForWin === 50 ? 'settings__score-btn active' : 'settings__score-btn'}
              onClick={(e) => {
                const settingsScoreBtns = document.querySelectorAll(
                  ".settings__score-btn"
                );
                settingsScoreBtns.forEach((settingsScoreBtn) => {
                  settingsScoreBtn.classList.remove("active");
                });

                e.target.classList.add("active");
                dispatch(changeScoreForWin(50));
              }}
            >
              50
            </button>

            <button
               className={scoreForWin === 75 ? 'settings__score-btn active' : 'settings__score-btn'}
              onClick={(e) => {
                const settingsScoreBtns = document.querySelectorAll(
                  ".settings__score-btn"
                );
                settingsScoreBtns.forEach((settingsScoreBtn) => {
                  settingsScoreBtn.classList.remove("active");
                });

                e.target.classList.add("active");
                dispatch(changeScoreForWin(75));
              }}
            >
              75
            </button>

            <button
               className={scoreForWin === 100 ? 'settings__score-btn active' : 'settings__score-btn'}
              onClick={(e) => {
                const settingsScoreBtns = document.querySelectorAll(
                  ".settings__score-btn"
                );
                settingsScoreBtns.forEach((settingsScoreBtn) => {
                  settingsScoreBtn.classList.remove("active");
                });

                e.target.classList.add("active");
                dispatch(changeScoreForWin(100));
              }}
            >
              100
            </button>
          </div>



          <BottomBtn from={'settings-page'}/>

          
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
