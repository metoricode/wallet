import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import transactionsData from "../../../transactions.json";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Transactions = () => {
  const iconMap: { [key: string]: any } = {
    faApple: faApple,
    faShoppingCart: faShoppingCart,
  };
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <h2 className="latest-transactions">Latest Transactions</h2>

      <div className="transactions-list">
        {transactionsData.map((tx) => (
          <div onClick={() => handleClick(tx.id)} className="transaction-item">
            <div className="bg-icon">
              <FontAwesomeIcon
                icon={iconMap[tx.icon]}
                size="2x"
                style={{
                  padding: tx.name === "Apple" ? "0px 6px" : "3px 0",
                }}
              />
            </div>

            <div className="trans-conteiner">
              <div className="trans-name-amount">
                <p className="trans-name tcolor3">{tx.name}</p>
                {tx.amount < 0
                  ? ` $${Math.abs(tx.amount).toFixed(2)}`
                  : `+$${tx.amount.toFixed(2)}`}
              </div>

              <p className="trans-description tcolor7">{tx.description}</p>
              <p className="trans-description tcolor7">
                {tx.user && `${tx.user} - `} {tx.date}
              </p>
            </div>

            <Link className="trans-detail tcolor5" to={`/detail/${tx.id}`}>
              ❯
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
