import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Task!');
});

export default router;