import transactionsData from "../../../transactions.json";
import { useParams } from "react-router-dom";
import "./style.css";

export const InfoConteiner = () => {
  const { id } = useParams();
  const transaction = transactionsData.find((tx) => tx.id === parseInt(id!));
  if (!transaction) return <h1>Transaction not found</h1>;
  return (
    <div className="info-conteiner">
      <p className="detail-status">Status: {transaction.status}</p>
      <p className="detail-description">{transaction.description}</p>

      <hr className="divider" />

      <p className="transaction-total">
        Total{" "}
        <span className="transaction-amount">
          ${Math.abs(transaction.amount).toFixed(2)}
        </span>
      </p>
    </div>
  );
};
