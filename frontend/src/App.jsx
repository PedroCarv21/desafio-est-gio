import "./App.css";

import { useEffect, useState } from "react";

import AccountForm from "./components/AccountForm";
import AccountList from "./components/AccountList";

import { getAccounts } from "./services/api";

function App() {
  const [accounts, setAccounts] = useState([]);

  async function loadAccounts() {
    try {
      const data = await getAccounts();

      setAccounts(data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    loadAccounts();
  }, []);

  return (
    <div className="container">
      <h1>Banco Digital</h1>

      <AccountForm onAccountCreated={loadAccounts} />

      <AccountList accounts={accounts} onWithdraw={loadAccounts} />
    </div>
  );
}

export default App;
