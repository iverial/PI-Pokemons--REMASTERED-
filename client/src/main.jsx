import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import axios from 'axios';
// console.log('REACT API', import.meta.env.REACT_APP_API_URL)
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
