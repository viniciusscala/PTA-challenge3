const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const Example = keystone.list('Examples');
const MenuItem = keystone.list('MenuItens');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/examples', (req, res) => {
    Example.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.get('/api/menuitens', (req, res) => {
    MenuItem.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });
};