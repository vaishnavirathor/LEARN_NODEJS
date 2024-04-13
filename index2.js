const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("hey from middleware 1");
    next();
});

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        return res.json({ status: "pending" });
    });

app.use((req, res, next) => {
    console.log("hey from middleware 2");
    next();
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields required" });
    }
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "pending" });
    });
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
