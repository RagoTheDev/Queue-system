
async function authGetToken(email, password) {
    const rawResponse = await fetch("https://appt.eadevs.com/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const content = await rawResponse.json();
    const token = content.token;

    return token
}

export { authGetToken };