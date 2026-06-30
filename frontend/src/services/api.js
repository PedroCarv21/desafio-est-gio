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
        throw new Error("Error creating account.");
    }

    return response.json();
}