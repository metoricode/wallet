import "./style.css";

export const BalanceCard = () => {
  const balance = 17.3;
  const limit = 1500;
  const available = limit - balance;
  return (
    <div className="balance-card">
      <h3 className="text tcolor5">Card Balance</h3>
      <h1 className="text tcolor2">${balance.toFixed(2)}</h1>
      <p className="text tcolor7">${available.toFixed(2)} Available</p>
    </div>
  );
};
