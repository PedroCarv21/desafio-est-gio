const BASE_URL = "http://localhost:3000";

export async function createAccount(account) {
    const response = await fetch(`${BASE_URL}/accounts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(account)
    });

    if (!response.ok) {
        throw new Error("Erro ao criar a conta.");
    }

    return response.json();
}

export async function getAccounts() {

    const response = await fetch(`${BASE_URL}/accounts`);

    if (!response.ok) {
        throw new Error("Erro na hora de buscar as contas");
    }

    return response.json();

}

export async function withdraw(accountId, amount) {

    const response = await fetch(`${BASE_URL}/accounts/${accountId}/withdraw`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount
        })
    });

    if (!response.ok) {
        throw new Error("Erro no saque.");
    }

    return response.json();
}

export async function transfer(fromId, toId, value) {

    const response = await fetch(`${BASE_URL}/accounts/transfer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fromId,
            toId,
            value
        })
    });

    if (!response.ok) {
        throw new Error("Erro ao realizar transferência.");
    }

    return response.json();
}