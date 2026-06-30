import { useState } from "react";
import { withdraw, transfer } from "../services/api";

function AccountCard({ account, allAccounts, onAccountsChanged }) {
  const [amount, setAmount] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  async function handleWithdraw() {
    try {
      await withdraw(account.id, Number(amount));

      alert("Saque realizado com sucesso!");

      setAmount("");

      await onAccountsChanged();
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleTransfer() {
    try {
      await transfer(account.id, destinationId, Number(transferAmount));

      alert("Transferência realizada com sucesso!");

      setDestinationId("");
      setTransferAmount("");

      await onAccountsChanged();
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

      <button onClick={handleWithdraw}>Sacar</button>

      <hr />

      <h4>Transferência</h4>

      <select
        value={destinationId}
        onChange={(event) => setDestinationId(event.target.value)}
      >
        <option value="">Selecione a conta</option>

        {allAccounts
          .filter((acc) => acc.id !== account.id)
          .map((acc) => (
            <option key={acc.id} value={acc.id}>
              {acc.holder}
            </option>
          ))}
      </select>

      <br />
      <br />

      <input
        type="number"
        placeholder="Valor"
        value={transferAmount}
        onChange={(event) => setTransferAmount(event.target.value)}
      />

      <br />
      <br />

      <button onClick={handleTransfer}>Transferir</button>

    </div>
  );
}

export default AccountCard;
