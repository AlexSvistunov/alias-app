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



// аватарки
// цвета
// логика победителя
// запрет роутов, возможно по флагам
// localStorage


// ideas:
// random avatar when creating new team
// limit 4-6 team when creating teams
// добавить блики типо выбери цвет чел
