import { Express } from "express";

// Initialize express application
const app = express();

// API endpoints
app.get('/', (req, res) =>
 res.send('http get request sent to root api endpoint')
);

// Connection Listener
app.listen(3000, () => console.log('express server running on port 3000'));
