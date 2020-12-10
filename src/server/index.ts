import 'source-map-support/register';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import handleProcessEvents from './handle-process-events';
import * as liquid from 'liquidjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const liquidEngine = new liquid.Liquid();
app.engine('html', liquidEngine.express());
app.set('views', path.resolve(__dirname, '../client'));
app.set('view engine', 'html');
app.use(express.static('dist/client', {index: false}));

app.get('/', async (req, res) => {
    res.render('index', {exampleData: 'Example Data'});
});

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
