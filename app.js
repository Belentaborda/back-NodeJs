const express = require('express');
const cors = require('cors')
const sequelize = require('./config/database');
const sagaRoutes = require('./routes/sagaRoutes');
const movieRoutes = require('./routes/movieRoutes');
const actorRoutes = require('./routes/actorRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const directorRoutes = require('./routes/directorRoutes');

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', sagaRoutes);
app.use('/api', movieRoutes);
app.use('/api', actorRoutes);
app.use('/api', reviewRoutes);
app.use('/api', directorRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => console.log('Error syncing with the database:', error));
