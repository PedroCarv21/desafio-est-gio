import AccountCard from "./AccountCard";

function AccountList({ accounts, allAccounts, onAccountsChanged  }) {
  return (
    <div>
      <h2 id="accountlist-h2">Contas</h2>

      {accounts.map((account) => (
        <AccountCard
          key={account.id}
          account={account}
          allAccounts={allAccounts}
          onAccountsChanged={onAccountsChanged}
        />
      ))}
    </div>
  );
}

export default AccountList;
