import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const value = useSelector((state: RootState) => state.user.value);

  return <div>App {value}</div>;
};

export default App;
