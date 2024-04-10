import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);



// edit-team
// нужно чтобы список участников писался
// другие аватарки
// nextTurn, плохо работает nextTurn, ему нужна внутренняя логика
// когда все ready, формируется массив неповторяющихся слов с предыдущей командой(это для второй и так далее команды), а так просто тусуются из api или из массива
// победитель
// какие-то флаги, запущена игра или нет, чтобы нельзя было переходить по ненужным роутам

// wrong score
// delete in createTeamPage
// result checkbox functionality
// score has already been and It's 9 before I changed it
// winner check (if there's a winner - button play again and everything is gonna be again with the same team or what you choose)