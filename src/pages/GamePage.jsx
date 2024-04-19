import { useEffect, useState } from "react";
import { shuffle, wordsArray, wordsAPI } from "../utils/constants";

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
  let [words, setWords] = useState(wordsArray);

  if (currentCardIndex === words.length) {
    setCurrentCartIndex(0);
  }

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
    dispatch,
    currentCardIndex,
  ]);

  // useEffect(() => {
  //   setWords(shuffle(wordsArray));
  // }, [turn]);

  return (
    <section
      className="game"
      style={{ minHeight: "100vh", backgroundColor: "var(--violet-500)" }}
    >
      <div className="container game__container">
        <div className="game__time">{lastWord ? "последнее слово" : time}</div>

        <div className="game__cards">
          <div className="game__card">{words[currentCardIndex]}</div>
          {/* <div className="card-next"></div> */}
        </div>

        <div className="game__buttons">
          <div
            className="game__button"
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
            className="game__button"
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
    </section>
  );
};

export default GamePage;
