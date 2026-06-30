import { useEffect, useState } from "react";

import { getAccounts } from "../services/api";

function AccountList() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {

        async function loadAccounts() {
    
            try {
    
                const data = await getAccounts();
    
                setAccounts(data);
    
            } catch (error) {
    
                alert(error.message);
    
            }
    
        }
    
        loadAccounts();
    
    }, []);

    return (

        <div>
    
            <h2>Contas</h2>
    
            {
                accounts.map(account => (
    
                    <div key={account.id}>
    
                        <h3>{account.holder}</h3>
    
                        <p>Tipo: {account.type}</p>
    
                        <p>Saldo: R$ {account.balance}</p>
    
                        <hr />
    
                    </div>
    
                ))
            }
    
        </div>
    
    );
}

export default AccountList;