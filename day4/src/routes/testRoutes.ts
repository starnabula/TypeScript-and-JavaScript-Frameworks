
import  express  from 'express'
import { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!')
})

router.get('/about', (_: Request, res: Response): void => {
  res.send('About !' )
})

router.get('/contact', (_: Request, res: Response): void => {
  res.send('Contact !')
})

export default router