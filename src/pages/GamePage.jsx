import { useEffect, useState } from "react";
import { words } from "../utils/constants";

import { addResultFieldToTeam } from "../store/slices/teamSlice";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./GamePage.css";
import { ROUTES } from "../routes";

const GamePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const turn = useSelector(state => state.turn.turn)
  // c потерей очков и без
  const [time, setTime] = useState(2);
  const [currentCardIndex, setCurrentCartIndex] = useState(0);
  const [arrayResults, setArrayResults] = useState([]);

  const timeOutId = setTimeout(() => {
    setTime(time - 1);
  }, 1000);

  useEffect(() => {
    if (time === 0) {
      clearTimeout(timeOutId);
      navigate(ROUTES.result);
      dispatch(addResultFieldToTeam({index: turn, result: arrayResults}))

    }
  }, [navigate, time, timeOutId, arrayResults, turn, dispatch]);

  return (
    <div className="container">
      <div className="time">{time}</div>

      <div className="cards">
        <div className="card">{words[currentCardIndex]}</div>
        {/* {words.map((word) => {
        
       })} */}
      </div>

      <div className="buttons">
        <div
          className="button"
          onClick={() => {
            setCurrentCartIndex(currentCardIndex + 1);
            setArrayResults([...arrayResults, true]);
          }}
        >
          Да
        </div>
        <div
          className="button"
          onClick={() => {
            setCurrentCartIndex(currentCardIndex + 1);
            setArrayResults([...arrayResults, false]);
          }}
        >
          Нет
        </div>
      </div>
    </div>
  );
};

export default GamePage;
