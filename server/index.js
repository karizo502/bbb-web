import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import { SECRET } from './keys'
import { auth, cors } from './middlewares'

const app = express()
const router = express.Router()

app.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('Home')
})

router.options('/login', cors, (req, res) => {
    res.header('Access-Control-Allow-Headers', 'content-type')

    res.status(200).end()
})

router.post('/login', cors, (req, res) => {
    const payload = req.body.username
    const token = jwt.sign(payload, SECRET)

    res.json({ token })
})

router.options('/customers', cors, (req, res) => {
    res.header('Access-Control-Allow-Headers', 'Authorization')

    res.status(200).end()
})
router.get('/customers', cors, auth, (req, res) => {
    const customers = [1, 2, 3, 4, 5]
    res.json(customers)
})

app.use(router)

app.listen(3000)
