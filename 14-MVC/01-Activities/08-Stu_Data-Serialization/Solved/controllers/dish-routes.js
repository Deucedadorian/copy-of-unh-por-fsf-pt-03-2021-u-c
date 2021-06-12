const router = require('express').Router();
const Dish = require('../models/Dish');

// route to get all dishes
router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const dishData = await Dish.findAll();

  // dishData.get() // throw undefined .get method

  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
  // const dishes = dishData.map((dish) => dish.get({ plain: true }));
  // const dishes = dishData.map((dish) => { return dish.get({ plain: true }) });
  // const dishes = dishData.map((dish) => ({ id: dish.id }));
  // const dishes = dishData.map((dish) => { return { id: dish.id } });

  // const dishNames = dishData.map((dish) => dish.dish_name);
  // const dishNames = dishData.map((dish) => { return dish.dish_name });
  // const dishNames = dishData.map((dish) => ({ name: dish.dish_name }));
  // [ {name: 'Tofo'}, {name:'Salad'}]

  // const dishes = dishData.map((dish) => dish.toJSON());

  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('all', JSON.parse(JSON.stringify({
    dishes: dishData,
  })));
});

// route to get one dish
router.get('/dish/:id', async (req, res) => {
  try{ 
      const dishData = await Dish.findByPk(req.params.id);
      if(!dishData) {
          res.status(404).json({message: 'No dish with this id!'});
          return;
      }
      const dish = dishData.get({ plain: true });
      res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
