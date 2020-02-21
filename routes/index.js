const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mix', async (req, res, next) => {
  const { ingredient } = await req.body //array of ingredients
  console.log(ingredient);
  const allIngs = await ingredient.join(",");
  console.log(allIngs);
  
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${allIngs}`)
  const data = await response.json()
  console.log(data);
  
  const meal = data.meals[0];
  res.render('find', { meal })
})

router.get('/random', async (req, res, next) => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  const data = await response.json()
  const meal = data.meals[0];

  res.render('random', { meal })
})

router.post('/findform', async (req, res, next) => {
const {mealName} = req.body;
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
  const data = await response.json()
  const meal = data.meals[0];
  res.render('find', { meal })
  
})
module.exports = router;
