import { useSelector, useDispatch } from "react-redux";

import { words } from "../utils/constants";
import { Link } from "react-router-dom";

import { nextTurn, newCircleTurn } from "../store/slices/indexTurnSlice";
import { ROUTES } from "../routes";

import { useState } from "react";
import { changeResult } from "../store/slices/teamSlice";

const ResultPage = () => {
  const dispatch = useDispatch()

  const turn = useSelector((state) => state.turn.turn);
  const results = useSelector((state) => state.team.teamList)[turn]["result"];
  const teamList = useSelector((state) => state.team.teamList)
  const arr = []
  const wordSlice = words.slice(0, results.length);

  results.forEach((el, index) => {
    arr.push({ word: wordSlice[index], result: el });

  });

  const [array, setArray] = useState(arr);
  console.log(array);
  console.log(results);

  const changeInput = (index) => {
    setArray(prevArray => {
      const list = [...prevArray]

      list[index] = {
        ...list[index],
        result: !list[index].result
      }

      return list
    })
  }

  const changeResultHandler = () => {
    const newResultArray = []
    array.forEach((elResult) => {
      newResultArray.push(elResult.result)
    })
    dispatch(changeResult({index: turn, newResult: newResultArray}))
  }


  return (
    <div className="container">
      <h2 className="result__title">Результаты раунда</h2>
      {array.map((result, index) => (
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}} key={result.word}>
          <div>{result.word}</div>
          <input type="checkbox" checked={array[index].result} onChange={() => {
            changeInput(index)
          }}></input>
        </div>
      ))}

      <Link style={{display: 'block', marginTop: '50px'}} to={ROUTES.score} onClick={() => {
        
          if(turn === teamList.length - 1) {
            changeResultHandler()
            dispatch(newCircleTurn())
          } else {
            changeResultHandler()
            dispatch(nextTurn())
          }
          // проверить количество команд
          // а вообще же еще раунды какиенть
          // количество раундов
      }}>Продолжить</Link>
    </div>
  );
};

export default ResultPage;
