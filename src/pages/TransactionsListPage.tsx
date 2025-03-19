import { DailyPoints } from "../components/transactionListItem/DailyPoints/daily-points";
import { BalanceCard } from "../components/transactionListItem/BalanceCard/balance-card";
import { PaymentStatus } from "../components/transactionListItem/PaymentStatus/payment-status";
import { Transactions } from "../components/transactionListItem/Transactions/transactions";
import "../components/transactionListItem/style.css";

const TransactionsListPage = () => {
  return (
    <div className="wallet-container">
      <div className="balance-section">
        <div style={{ flex: 1 }}>
          <BalanceCard />
          <DailyPoints />
        </div>
        <PaymentStatus />
      </div>
      <Transactions />
    </div>
  );
};

export default TransactionsListPage;
