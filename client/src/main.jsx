import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import dotenv from "dotenv";
import axios from 'axios';
dotenv.config();


// eslint-disable-next-line no-undef
axios.defaults.baseURL =  process.env.REACT_APP_API || 'http://localhost:3001';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
