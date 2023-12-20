///SETUP TEMPLATE FOR EXPRESS SERVER//

import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

// Routes go here

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

// Routes go here

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));