import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayer } from "./core/DataLayer";
import reducer from "./core/reducer";
ReactDOM.render(
 
    <DataLayer reducer={reducer}>
      <App />
    </DataLayer>,
  document.getElementById("root")
);

