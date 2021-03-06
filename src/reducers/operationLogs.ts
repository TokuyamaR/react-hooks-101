import { CREATE_OPEATION_LOG, DELETE_ALL_OPEATION_LOGS } from "../actions";

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case CREATE_OPEATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      };
      return [operationLog, ...state];
    case DELETE_ALL_OPEATION_LOGS:
      return [];
    default:
      return state;
  }
};

export default operationLogs;
