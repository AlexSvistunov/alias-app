import { useSelector, useDispatch } from "react-redux";

import { words } from "../utils/constants";
import { Link } from "react-router-dom";

import { nextTurn, newCircleTurn } from "../store/slices/indexTurnSlice";
import { ROUTES } from "../routes";

const ResultPage = () => {
  const dispatch = useDispatch()

  const turn = useSelector((state) => state.turn.turn);
  const results = useSelector((state) => state.team.teamList)[turn]["result"];
  const teamList = useSelector((state) => state.team.teamList)
  const array = [];
  const wordSlice = words.slice(0, results.length);

  results.forEach((el, index) => {
    array.push({ word: wordSlice[index], result: el });
  });
  console.log(array);

  return (
    <div className="container">
      <h2 className="result__title">Результаты раунда</h2>
      {array.map((result) => (
        <div style={{display: 'flex', gap: '20px', alignItems: 'center'}} key={result.word}>
          <div>{result.word}</div>
          <input type="checkbox" checked={result.result} onChange={() => {}}></input>
        </div>
      ))}

      <Link style={{display: 'block', marginTop: '50px'}} to={ROUTES.score} onClick={() => {
        
          if(turn === teamList.length - 1) {
            dispatch(newCircleTurn())
          } else {
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
