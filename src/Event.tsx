import React, { useContext } from "react";
import { DELETE_EVENT } from "./actions";
import AppContext from "./contexts/AppContext";

interface EventProps {
  event: {
    id: number;
    title: string;
    body: string;
  };
}
const Event: React.FC<EventProps> = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const deleteEvent = () => {
    const id: number = event.id;
    const result: boolean = window.confirm(
      `イベント(id=${id})を本当に削除してもよろしいですか？`
    );
    if (result) {
      dispatch({
        type: DELETE_EVENT,
        id,
      });
    }
  };
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={deleteEvent}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
