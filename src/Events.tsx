import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "./contexts/AppContext";

const Events: React.FC<{}> = () => {
  // useContextを利用するだけで、contextをproviderを利用できる
  const { state } = useContext(AppContext);
  return (
    <>
      {/* 従来のcontextの記述例 */}
      {/* <AppContext.Consumer>
        {(value) => {
          return <div>{value}</div>;
        }}
      </AppContext.Consumer> */}
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
