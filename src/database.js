require('dotenv').config()
import { Client } from 'pg'

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

export const db = new Client(options)
db.connect()
