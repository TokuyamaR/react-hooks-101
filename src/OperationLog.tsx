import React from "react";

interface OperationLogProps {
  operationLog: {
    description: string;
    operatedAt: Date;
  };
}
const OperationLog: React.FC<OperationLogProps> = ({ operationLog }) => {
  return (
    <>
      <tr>
        <td>{operationLog.description}</td>
        <td>{operationLog.operatedAt}</td>
      </tr>
    </>
  );
};

export default OperationLog;
