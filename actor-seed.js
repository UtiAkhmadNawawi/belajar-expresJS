const Actor = require('./models').Actor;
// const Actor = db.Actor;

const seedData = [
  { name: 'Tom Hanks', birth_date: '1956-07-09', gender: 'male' },
  { name: 'Scarlett Johansson', birth_date: '1984-11-22', gender: 'female' 
},
  { name: 'Brad Pitt', birth_date: '1963-12-18', gender: 'male' },
];

Actor.bulkCreate(seedData)
  .then(() => {
    console.log('Seed data added to actors table');
  })
  .catch((error) => {
    console.error('Error adding seed data to actors table', error);
  });
