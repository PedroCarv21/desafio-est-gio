import { useState } from "react";
import { createAccount } from "../services/api";

function AccountForm({ onAccountCreated }) {

    const [holder, setHolder] = useState("");
    const [type, setType] = useState("current");
    const [balance, setBalance] = useState(0);

    async function handleSubmit(event) {

        event.preventDefault();

        try {

            const account = await createAccount({
                holder,
                type,
                balance: Number(balance)
            });

            console.log(account);

            alert("Conta criada com sucesso!");
            
            await onAccountCreated();

            setHolder("");
            setType("current");
            setBalance(0);

        } catch (error) {

            alert(error.message);

        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Cadastro de Conta</h2>

            <div>
                <label htmlFor="holder">Titular</label>
                <br />

                <input
                    id="holder"
                    type="text"
                    value={holder}
                    onChange={(event) => setHolder(event.target.value)}
                />
            </div>

            <br />

            <div>
                <label htmlFor="type">Tipo</label>
                <br />

                <select
                    id="type"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                >
                    <option value="current">Corrente</option>
                    <option value="savings">Poupança</option>
                </select>
            </div>

            <br />

            <div>
                <label htmlFor="balance">Saldo Inicial</label>
                <br />

                <input
                    id="balance"
                    type="number"
                    value={balance}
                    onChange={(event) => setBalance(event.target.value)}
                />
            </div>

            <br />

            <button type="submit">
                Criar Conta
            </button>

        </form>
    );

}

export default AccountForm;