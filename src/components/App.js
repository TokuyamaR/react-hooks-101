import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EventForm from "../EventForm";
import Events from "../Events";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    // 管理したい状態をAppContext.Providerでラップする。
    // ラップした内部のコンポーネントであれば、どれだけ階層が深いコンポーネントでもvalueを直接呼び出すことができる
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
