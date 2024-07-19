const express = require('express');
const cors = require('cors');
const collectionRoutes = require('./routes/collectionRoutes');
const { connectToDatabase } = require('./dbConnection');

const port = process.env.SERVER_PORT || 5005;

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use('/api', collectionRoutes);
