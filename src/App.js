import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./store/store";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <>
      <Provider store={store}>{<Main />}</Provider>;
    </>
  );
}

export default App;
