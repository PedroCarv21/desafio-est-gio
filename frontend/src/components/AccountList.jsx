import AccountCard from "./AccountCard";

function AccountList({ accounts, onWithdraw }) {
  return (
    <div>
      <h2>Contas</h2>

      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          account={account}
          onWithdraw={onWithdraw}
        />
      ))}
    </div>
  );
}

export default AccountList;
