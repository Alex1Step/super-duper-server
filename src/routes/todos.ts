import {Router, Request, Response} from 'express';
import Todo from '../models/Todo';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const todos = await Todo.find({}).lean()
})

router.post('/create', async (req:Request, res: Response) => {
  const todo = new Todo({
    title: req.body.title
  })
})

export default router;
