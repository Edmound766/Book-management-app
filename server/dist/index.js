"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        age: 28
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        age: 34
    },
    {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        age: 22
    },
    {
        id: 4,
        name: "Diana",
        email: "diana@example.com",
        age: 30
    }, {
        id: 5,
        name: "Diana",
        email: "diana@example.com",
        age: 30
    }
];
exports.app.get('/', (req, res) => {
    res.status(201).send({ msg: 'Hello World!' });
});
exports.app.get('/api/users', (req, res) => {
    const { query: { filter, value } } = req;
    // If no filter or value is provided,  all users
    if (!filter || !value)
        res.status(200).json(users);
    const isKeyofUser = (key) => {
        return ['id', 'name', 'email', 'age'].includes(key);
    };
    if (typeof filter === "string" && isKeyofUser(filter)) {
        const filteredUsers = users.filter(user => user[filter] === value);
        if (filteredUsers)
            res.status(200).json(filteredUsers);
        res.status(404).json({ msg: 'User not found' });
    }
});
exports.app.get('/api/users/:id', (req, res) => {
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId))
        res.status(404).send({ msg: 'Invalid ID' });
    const findUser = users.find((user) => user.id === parsedId);
    if (!findUser)
        res.status(404).send({ msg: 'User not found' });
    res.status(200).send(findUser);
});
exports.app.listen(port, () => {
    console.log(`Local: http://localhost:${port}`);
    console.log("Network: use --host to expose ");
});
