import { createContext } from "react";
import { StateType, ActionType } from "../reducers/events";

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const AppContext = createContext({} as ContextType);

export default AppContext;
