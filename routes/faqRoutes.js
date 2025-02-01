import express from 'express';
import { getFAQ, postFAQ, deleteFAQ } from '../controllers/faqController.js';

const router = express.Router();

router.get('/', getFAQ);
router.post('/', postFAQ);
router.delete('/:id', deleteFAQ);

export default router;
