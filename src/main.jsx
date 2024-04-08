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



// внутренняя логика(когда 2 команды, нельзя удалить, так как минимум 2 команды)
// edit-team
// нужно чтобы список участников писался
// другие аватарки
// nextTurn, плохо работает nextTurn, ему нужна внутренняя логика
// когда все ready, формируется массив неповторяющихся слов с предыдущей командой(это для второй и так далее команды), а так просто тусуются из api или из массива