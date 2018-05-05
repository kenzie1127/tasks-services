import express from 'express';
import bodyParser from 'body-parser';
import task from '../db/models/task';
import uuid from 'uuid/v4';

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    try {
        const tasks = await task.find({});
        res.json({ data: tasks });
    } catch (err) {
        return res
            .status(500)
            .json({ error: { message: "An error"} });
    }
});

router.post("/", async (req, res) => {
   try {
       let { title, description } = req.body.data;

       const newTask = {
           taskId: uuid(),
           title: title,
           description: description,
           createdDate: new Date()
       };
       const created = await task.create(newTask);
       res.json({ data: created });
    } catch (err) {
        return res
            .status(500)
            .json({ error: { message: "An error"} });
    }
});

export default router;