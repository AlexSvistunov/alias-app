import { useSelector, useDispatch } from "react-redux";

import { words } from "../utils/constants";
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
  const teamList = useSelector((state) => state.team.teamList);
  const arr = [];
  const wordSlice = words.slice(0, results.length);

  results.forEach((el, index) => {
    arr.push({ word: wordSlice[index], result: el });
  });

  const [array, setArray] = useState(arr);
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
    const newResultArray = [];
    array.forEach((elResult) => {
      newResultArray.push(elResult.result);
    });
    dispatch(changeResult({ index: turn, newResult: newResultArray }));
  };

  const setCheckedHandler = () => {};

  return (
    <div style={{ height: "100vh", backgroundColor: "var(--violet-300)" }}>
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
            // проверить количество команд
            // а вообще же еще раунды какиенть
            // количество раундов
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
