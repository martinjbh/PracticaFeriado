const express = require('express');
const app = express();
const cors = require("cors")
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const User = require('../modelos/user')
//strarting

app.listen(3001, () => {
    console.log(`Server On Port  ${3001} `)
    User.sync({ alter: true })
});
////////////////////////////////////////////////////

app.post('/register', async (req, res) => {
    let { name, password } = req.body
    if (name && password) {
        try {
            let user = await User.create({
                name: name,
                password: password
            })
            return res.json({ "userExist": false })
        }
        catch (error) {
            return res.json({ "userExist": true })
        }
    }
    res.json({ msg: "no name no pass" })
})


app.get('/showAllUser', async (req, res) => {
    res.json(await User.findAll())
})












