import { useSelector, useDispatch } from "react-redux";

import { wordsArray } from "../utils/constants";
import { Link } from "react-router-dom";

import { nextTurn, newCircleTurn } from "../store/slices/indexTurnSlice";
import { ROUTES } from "../routes";

import { useState } from "react";
import { changeResult } from "../store/slices/teamSlice";

import "./ResultPage.css";

const ResultPage = () => {
  const dispatch = useDispatch();

  const turn = useSelector((state) => state.turn.turn);
  const results = useSelector((state) => state.team.teamList)[turn]["result"];
  console.log(results);
  const teamList = useSelector((state) => state.team.teamList);

  const [array, setArray] = useState(results);

  console.log(array);
  console.log(results);

  const changeInput = (index) => {
    setArray((prevArray) => {
      const list = [...prevArray];

      list[index] = {
        ...list[index],
        result: !list[index].result,
      };

      return list;
    });
  };


  const changeResultHandler = () => {
    const newResultArray = [...array];
    dispatch(changeResult({ index: turn, newResult: newResultArray }));
  };


  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--violet-300)" }}>
      <div className="container">
        <h2 className="result__title section-title">Результаты раунда</h2>

        <div className="result__items">
          {array.map((result, index) => (
            <div className="result__item" key={result.word}>
              <div className="result__item-word">{result.word}</div>
              <label
                className={`custom-checkbox ${
                  array[index].result ? "custom-checkbox--active" : ""
                }`}
                onClick={(e) => {
                  e.currentTarget
                    .querySelector(".result__item-checkbox")
                    .click();
                  e.target.classList.toggle("custom-checkbox--active");
                  e.stopPropagation();
                  changeInput(index);
                }}
              >
                <input
                  className="result__item-checkbox visually-hidden"
                  type="checkbox"
                  checked={array[index].result}
                  onChange={(e) => {
                    e.stopPropagation();
                  }}
                ></input>
              </label>
            </div>
          ))}
        </div>

        {/* NO CONNECTION BETWEEN CHECKED AND LEFT POSITION */}

       <div className="btn-wrapper">
       <Link className="btn__wrapper-continue result__continue"
          to={ROUTES.score}
          onClick={() => {
            if (turn === teamList.length - 1) {
              changeResultHandler();
              dispatch(newCircleTurn());
            } else {
              changeResultHandler();
              dispatch(nextTurn());
            }

          }}
        >
          Продолжить
        </Link>
       </div>
      </div>
    </div>
  );
};

export default ResultPage;
