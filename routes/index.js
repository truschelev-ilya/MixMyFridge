var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mix', (req, res, next) => {
  const { ingredient } = req.body //array of ingredients
  console.log(ingredient);

})

router.get('/random', async (req, res, next) => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  const data = await response.json()
  const meal = data.meals[0];

  res.render('random', { meal })
  console.log(meal);
})

module.exports = router;
