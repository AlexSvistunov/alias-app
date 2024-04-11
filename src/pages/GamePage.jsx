import { useEffect, useState } from "react";
import { words } from "../utils/constants";

import { addResultFieldToTeam } from "../store/slices/teamSlice";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./GamePage.css";
import { ROUTES } from "../routes";

const GamePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const turn = useSelector((state) => state.turn.turn);
  const roundDuration = useSelector(
    (state) => state.settings.settings.roundDuration
  );
  const [time, setTime] = useState(roundDuration);
  const [currentCardIndex, setCurrentCartIndex] = useState(0);
  const [arrayResults, setArrayResults] = useState([]);
  const [lastWord, setLastWord] = useState(false);

  console.log(lastWord);

  const timeOutId = setTimeout(() => {
    setTime(time - 1);
  }, 1000);

  useEffect(() => {
    if (time === 0) {
      clearTimeout(timeOutId);
      setLastWord(String(currentCardIndex));

      // navigate(ROUTES.result);
      // dispatch(addResultFieldToTeam({index: turn, result: arrayResults}))
    }
  }, [
    navigate,
    time,
    timeOutId,
    arrayResults,
    turn,
    dispatch,
    currentCardIndex,
  ]);

  return (
    <div style={{ height: "100vh", backgroundColor: "var(--violet-500)" }}>
      <div className="container game__container">
        <div className="time">{lastWord ? "последнее слово" : time}</div>

        <div className="cards">
          <div className="card">{words[currentCardIndex]}</div>
          {/* {words.map((word) => {
        
       })} */}
        </div>

        <div className="buttons">
          <div
            className="button"
            onClick={() => {
              if (lastWord) {
                const resultArray = [...arrayResults, true];
                setArrayResults(resultArray);

                navigate(ROUTES.result);
                dispatch(
                  addResultFieldToTeam({ index: turn, result: resultArray })
                );
              } else {
                setCurrentCartIndex(currentCardIndex + 1);
                setArrayResults([...arrayResults, true]);
              }
            }}
          >
            Да
          </div>
          <div
            className="button"
            onClick={() => {
              if (lastWord) {
                const resultArray = [...arrayResults, false];
                setArrayResults(resultArray);

                navigate(ROUTES.result);
                dispatch(
                  addResultFieldToTeam({ index: turn, result: resultArray })
                );
              } else {
                setCurrentCartIndex(currentCardIndex + 1);
                setArrayResults([...arrayResults, false]);
              }
            }}
          >
            Нет
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
