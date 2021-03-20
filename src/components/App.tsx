import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "../EventForm";
import Events from "../Events";
import OperationLogs from "../OperationLogs";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

const App: React.FC<{}> = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // 管理したい状態をAppContext.Providerでラップする。
    // ラップした内部のコンポーネントであれば、どれだけ階層が深いコンポーネントでもvalueを直接呼び出すことができる
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
