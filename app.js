const express = require('express');
const sequelize = require('./config/database');
const sagaRoutes = require('./routes/sagaRoutes');
const movieRoutes = require('./routes/movieRoutes');
const actorRoutes = require('./routes/actorRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();

app.use(express.json());
app.use('/api', sagaRoutes);
app.use('/api', movieRoutes);
app.use('/api', actorRoutes);
app.use('/api', reviewRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => console.log('Error syncing with the database:', error));
