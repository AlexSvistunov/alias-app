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



// запрет роутов, возможно по флагам
// localStorage
// отнимать очки за пропуск
// рандомная аватарка + рандомный цвет
// ограничение по кол-ву человек в команде
// стирать input
// pages and components

// ideas:
// random avatar when creating new team
// limit 4-6 team when creating teams
// добавить блики типо выбери цвет чел
