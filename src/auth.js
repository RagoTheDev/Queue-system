
async function authGetToken(email, password) {
  const rawResponse = await fetch("https://appt.eadevs.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: password,
  }),
});
  const content = await rawResponse.json();
  const token = content.token;
  const role = content.role;

 return { token, role };
  
}

export { authGetToken };
  
