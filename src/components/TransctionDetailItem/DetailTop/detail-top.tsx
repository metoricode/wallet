import transactionsData from "../../../transactions.json";
import { useParams } from "react-router-dom";
import "./style.css";

export const DetailTop = () => {
  const { id } = useParams();
  const transaction = transactionsData.find((tx) => tx.id === parseInt(id!));
  if (!transaction) return <h1>Transaction not found</h1>;

  return (
    <div className="detail-top">
      <h1 className="detail-amount">
        ${Math.abs(transaction.amount).toFixed(2)}
      </h1>
      <h2 className="detail-name">{transaction.name}</h2>
      <p className="detail-data">
        {transaction.date}, {transaction.time}
      </p>
    </div>
  );
};
