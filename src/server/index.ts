import 'source-map-support/register';
import express from 'express';
import bodyParser from 'body-parser';
import handleProcessEvents from './handle-process-events';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/healthchk', async (req, res) => {
    res.send({
        health: 'ok',
    });
});

console.log(`Attempting to start server on port: ${PORT}`);

const server = app.listen(PORT, () => {
    console.log(`started at localhost:${PORT}`);
});

handleProcessEvents(server);
