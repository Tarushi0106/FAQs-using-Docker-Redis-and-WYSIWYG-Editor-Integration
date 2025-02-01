import express from 'express';
import cors from 'cors';
import faqRoutes from './routes/faqRoutes.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());  // Allow frontend to access API
app.use(express.json());

// Routes
app.use('/api/faqs', faqRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
