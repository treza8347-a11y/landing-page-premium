
export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).send("Method not allowed");
}

try {

await fetch("COLLE_ICI_TON_WEBHOOK_ZAPIER", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(req.body)
});

return res.status(200).send("OK");

} catch (error) {
return res.status(500).send("Server Error");
}

}
