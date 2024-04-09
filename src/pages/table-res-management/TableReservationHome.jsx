
import React, { useEffect, useState } from "react";
import ReservationDetails from "../../components/table-res/ReservationDetails";
import Accountform from "../../components/table-res/Accountform";

const Home = () => {
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await fetch('/api/accounts');
      const json = await response.json();

      if (response.ok) {
        setAccounts(json);
      }
    };
    fetchAccounts(); // Don't forget to call the fetch function
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="home">
      <div className="accounts">
        {accounts && accounts.map((account) => (
          <ReservationDetails key={account._id} account={account} />
        ))}
      </div>
      <Accountform />
    </div>
  );
};

export default Home;
