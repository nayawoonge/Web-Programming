import express from 'express'

const router = express.Router()

router.route('/').get( (req,res) => res.send('hello world 2019250061 황지웅'))

export default router