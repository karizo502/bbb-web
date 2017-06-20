import jwt from 'jsonwebtoken'
import { SECRET } from './keys'

export const auth = (req, res, next) => {
    //console.log("auth")
    let token = ''
    const authHeader = req.headers['authorization']
    if (authHeader) {
        token = authHeader.split(' ')[1]
        console.log(authHeader)
    }
    try {
        const payload = jwt.verify(token, SECRET)
        next()
    } catch(err) {
        res.status(401).end()
    }
}

export const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin',
        'http://localhost:8080')

    next()
}
