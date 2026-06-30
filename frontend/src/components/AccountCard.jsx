import { useState } from "react";
import { withdraw } from "../services/api";

function AccountCard({ account, onWithdraw }) {

  const [amount, setAmount] = useState("");

  async function handleWithdraw() {
    try {

      await withdraw(account.id, Number(amount));

      alert("Saque realizado com sucesso!");

      setAmount("");

      await onWithdraw();

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="card">
      <h3>{account.holder}</h3>

      <p>Tipo: {account.type}</p>

      <p>Saldo: R$ {account.balance}</p>

      <input
        type="number"
        placeholder="Valor do saque"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <br />
      <br />

      <button onClick={handleWithdraw}>
        Sacar
      </button>
    </div>
  );
}

export default AccountCard;