import React, { useState } from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { FaBitcoin } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { DiEnvato } from "react-icons/di";

const transactions = [
  {
    id: 1,
    title: "Apple Pay",
    amount: -17.88,
    percentage: -3.23,
    time: "08:03 PM",
    date: "12 November 24",
    icon: <AiFillApple />,
    color: "bg-black text-white text-xl",
  },
  {
    id: 2,
    title: "Received from Envato",
    amount: 110.78,
    percentage: 2.23,
    time: "09:00 AM",
    date: "12 November 24",
    icon: <DiEnvato />,
    color: "bg-green-500 text-white text-xl",
  },
  {
    id: 3,
    title: "Bitcoin",
    amount: -46.0,
    percentage: -2.04,
    time: "04:03 PM",
    date: "11 November 24",
    icon: <FaBitcoin />,
    color: "bg-yellow-500 text-white text-2xl",
  },
  {
    id: 4,
    title: "Bitcoin",
    amount: -46.0,
    percentage: -2.04,
    time: "04:03 PM",
    date: "11 November 24",
    icon: <FaBitcoin />,
    color: "bg-yellow-500 text-white text-2xl",
  },
  {
    id: 5,
    title: "Bitcoin",
    amount: -46.0,
    percentage: -2.04,
    time: "04:03 PM",
    date: "11 November 24",
    icon: <FaBitcoin />,
    color: "bg-yellow-500 text-white text-2xl",
  },
  {
    id: 6,
    title: "Bitcoin",
    amount: -46.0,
    percentage: -2.04,
    time: "04:03 PM",
    date: "11 November 24",
    icon: <FaBitcoin />,
    color: "bg-yellow-500 text-white text-2xl",
  },
  {
    id: 7,
    title: "Bitcoin",
    amount: -46.0,
    percentage: -2.04,
    time: "04:03 PM",
    date: "11 November 24",
    icon: <FaBitcoin />,
    color: "bg-yellow-500 text-white text-2xl",
  },
  {
    id: 8,
    title: "Bitcoin",
    amount: -46.0,
    percentage: -2.04,
    time: "04:03 PM",
    date: "11 November 24",
    icon: <FaBitcoin />,
    color: "bg-yellow-500 text-white text-2xl",
  },
];
function App() {
  const [btnActive, setBtnActive] = useState("deposit");

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <section className="header">
          <header className="header-top">
            <div>
              <p className="greeting">Good Morning</p>
              <h1 className="name">Devon Lane</h1>
            </div>
            <div className="header-icons">
              <FiSearch />
              <div className="notification-bell relative">
                <FiBell />
                <span className="p-1 absolute top-0 right-0 rounded-full bg-red-500 border-2 border-white"></span>
              </div>
            </div>
          </header>

          {/* Balance Section */}
          <section className="balance-section">
            <p className="balance-label">Current Balance in USD</p>
            <h2 className="balance">$822.99</h2>
            <div className="percentage-badge">
              <span>↑ 5% ($823.80)</span>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              className={`action-btn px-8 ${
                btnActive === "deposit"
                  ? "bg-white text-[#1E4D4E]"
                  : "bg-transparent text-white"
              }`}
              data-active={btnActive === "deposit"}
              onClick={() => setBtnActive("deposit")}
            >
              Deposit
            </button>
            <button
              className={`action-btn px-8 ${
                btnActive === "withdraw"
                  ? "bg-white text-[#1E4D4E]"
                  : "bg-transparent text-white"
              }`}
              data-active={btnActive === "withdraw"}
              onClick={() => setBtnActive("withdraw")}
            >
              Withdraw
            </button>
            <button
              className={`action-btn px-3.5 ${
                btnActive === "more"
                  ? "bg-white text-[#1E4D4E]"
                  : "bg-transparent text-white"
              }`}
              data-active={btnActive === "more"}
              onClick={() => setBtnActive("more")}
            >
              •••
            </button>
          </div>
        </section>

        {/* Transactions */}
        <section className="transactions-section text-">
          <div className="transactions-header">
            <h3 className="text-xl font-semibold">Transaction</h3>
            <span className="view-all">View all</span>
          </div>

          <div className="transactions-list">
            <p className="text-gray-400">Today</p>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-left">
                  <div className="bg-gray-200 rounded-full p-2">
                    <div className={`${transaction.color} rounded-full p-2`}>
                      {transaction.icon}
                    </div>
                  </div>
                  <div className="transaction-info">
                    <p className="transaction-title">{transaction.title}</p>
                    <p className="transaction-date">
                      {transaction.time}, {transaction.date}
                    </p>
                  </div>
                </div>
                <div className="transaction-right">
                  <p className={`transaction-amount`}>
                    {transaction.amount > 0 ? "+$" : "-$"}
                    {Math.abs(transaction.amount)}
                  </p>
                  <p
                    className={`transaction-percentage ${
                      transaction.percentage > 0 ? "positive" : "negative"
                    }`}
                  >
                    {transaction.percentage > 0 ? "+" : ""}
                    {transaction.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav className="bottom-nav flex justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <GoHomeFill />
            <p className="text-base">Home</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <IoIosTrendingUp />
            <p className="text-base">Analytics</p>
          </div>

          <div className="bg-black p-2 rounded-full text-white">
            <LiaExchangeAltSolid />
          </div>
          <div className="flex flex-col justify-center items-center">
            <LuWallet />
            <p className="text-base">Analytics</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FiUser />
            <p className="text-base">Account</p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
