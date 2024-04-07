import { useSelector } from "react-redux";

import { words } from "../utils/constants";

const ResultPage = () => {
  const turn = useSelector((state) => state.turn.turn);
  const results = useSelector((state) => state.team.teamList)[turn]["result"];
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
    </div>
  );
};

export default ResultPage;
