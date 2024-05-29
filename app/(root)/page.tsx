import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Loi" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            user={loggedIn.firstName || "Guest"}
            title="Welcome"
            subtext="Access and manage your bank account efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.56}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
