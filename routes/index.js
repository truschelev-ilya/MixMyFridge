const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mix', async (req, res, next) => {
  const { ingredient } = await req.body //array of ingredients
  const allIngs = await ingredient.join(",");
try{
  const response = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${allIngs}`)
  const data = await response.json()
  console.log(data);
  const data2 = data.meals[0];
  console.log(data2);
  
  const response2 = await fetch(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${data2.idMeal}`)
  const data3 = await response2.json()
  console.log(data3);
  const meal = data3.meals[0]

  res.render('find', { meal })
}
catch(error){
  const e = `Ошибка. Скорее всего вы ввели кракозябру :)\n Попробуйте еще раз.`
res.render('error', {e})
}
})

router.get('/random', async (req, res, next) => {
  const response = await fetch('https://www.themealdb.com/api/json/v2/9973533/random.php')
  const data = await response.json()
  const meal = data.meals[0];

  res.render('random', { meal })
})

router.post('/findform', async (req, res, next) => {
  const { mealName } = req.body;
  try{
  const response = await fetch(`https://www.themealdb.com/api/json/v2/9973533/search.php?s=${mealName}`)
  const data = await response.json()
  const meal = data.meals[0];
  res.render('find', { meal })
}
catch(error){
  const e = `Ошибка. Скорее всего вы ввели кракозябру :)\n Попробуйте еще раз.`
res.render('error', {e})
}
})
module.exports = router;
