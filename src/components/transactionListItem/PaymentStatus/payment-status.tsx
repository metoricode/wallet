import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import transactionsData from "../../../transactions.json";
import "./style.css";

export const PaymentStatus = () => {
  const hasPendingPayment = transactionsData.some(
    (tx) => tx.status === "pending"
  );

  return (
    <div className="payment-status">
      {hasPendingPayment ? (
        <>
          <h3 className="text tcolor5">Balance Not Paid</h3>
          <p className="text tcolor7">You have pending payments remaining.</p>
        </>
      ) : (
        <>
          <h3 className="text tcolor5">No Payment Due</h3>
          <p className="text tcolor7">You've paid your September balance.</p>
          <p className="check-icon">
            <FontAwesomeIcon className="fa-check" icon={faCheckCircle} />
          </p>
        </>
      )}
    </div>
  );
};
