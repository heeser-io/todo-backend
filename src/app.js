import { db } from './database'
import express from 'express'
import cors from 'cors'


const app = express()

app.use(cors())

// Hier wollen wir alle Benutzer ausgeben
app.get('/users', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM public.user")
    res.send(result.rows)
  } catch (e) {
    console.log(e)
    res.status(400)
  }
})

app.get('/todos', async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM public.todos")
    res.send(result.rows)
  } catch (e) {
    console.log(e)
    res.status(400)
  }
})

app.listen(8888)