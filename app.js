const {sequelize,User} = require('./models')
const express = require('express')

const app = express()

app.use(express.json())

app.post("/", async (req,res) =>{
  const {name,email,role} = req.body

  try {
    const  user = await User.create({name,email,role})
    return res.json(user)
  } catch(err) {
    console.log(err)
    return res.status(500).json(err)
  }

})

app.listen({port:5000},async () => {
  console.log(`server up on localhost 5000`)
  await sequelize.sync({force: true})
  console.log("database syncd")

})
