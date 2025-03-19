import { useParams, Link } from "react-router-dom";
import transactionsData from "../transactions.json";
import { Back } from "../components/TransctionDetailItem/Back/back";
import { InfoConteiner } from "../components/TransctionDetailItem/InfoConteiner/info-conteiner";
import { DetailTop } from "../components/TransctionDetailItem/DetailTop/detail-top";
import "../components/TransctionDetailItem/style.css";
const TransactionDetailPage = () => {
  const { id } = useParams();
  const transaction = transactionsData.find((tx) => tx.id === parseInt(id!));

  if (!transaction) return <h1>Transaction not found</h1>;

  return (
    <div className="detail-conteiner">
      <Back />
      <DetailTop />
      <InfoConteiner />
    </div>
  );
};

export default TransactionDetailPage;
