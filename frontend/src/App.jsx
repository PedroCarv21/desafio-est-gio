import AccountForm from "./components/AccountForm";
import AccountList from "./components/AccountList";
import TransferForm from "./components/TransferForm";

function App() {
  return (
    <div>
      <h1>Banco Digital</h1>

      <AccountForm />

      <AccountList />

      <TransferForm />
    </div>
  );
}

export default App;