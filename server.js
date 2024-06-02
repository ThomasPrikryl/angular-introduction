const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

router.render = (req, res) => {
  if (req.url.startsWith('/countries')) {
    let reviews = router.db.get('reviews').value();
    let reviewData = reviews.reduce((acc, review) => {
      acc[review.countryId] = (acc[review.countryId] || {count: 0, totalRating: 0});
      acc[review.countryId].count += 1;
      acc[review.countryId].totalRating += review.rating;
      return acc;
    }, {});
    const resp = res.locals.data.map(country => {
      let data = reviewData[country.id] || {count: 0, totalRating: 0};
      country.reviewCount = data.count;
      country.averageRating = data.count > 0 ? Math.round((data.totalRating / data.count) * 10) / 10 : 0.0;
      return country;
    });
    let sorted = resp;
    if (req.url.includes('averageRating=desc')) {
      sorted = resp.sort((a, b) => b.averageRating - a.averageRating);
    } else if (req.url.includes('averageRating=asc'))  {
      sorted = resp.sort((a, b) => a.averageRating - b.averageRating);
    }
    if (req.url.includes('capital=desc')) {
      sorted = resp.sort((a, b) => b.capital - a.capital);
    } else if (req.url.includes('capital=asc')) {
      sorted = resp.sort((a, b) => a.capital - b.capital);
    }
    res.locals.data = sorted;
  } else if (req.url.startsWith('/reviews')) {
    const ratings = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    };
    res.locals.data.forEach(review => {
      if (review.rating > 0 && review.rating < 2) {
        ratings['1'] = ratings['1'] ? ratings['1'] + 1 : 1;
      } else if (review.rating >= 2 && review.rating < 3) {
        ratings['2'] = ratings['2'] ? ratings['2'] + 1 : 1;
      } else if (review.rating >= 3 && review.rating < 4) {
        ratings['3'] = ratings['3'] ? ratings['3'] + 1 : 1;
      } else if (review.rating >= 4 && review.rating < 5) {
        ratings['4'] = ratings['4'] ? ratings['4'] + 1 : 1;
      } else if (review.rating >= 5) {
        ratings['5'] = ratings['5'] ? ratings['5'] + 1 : 1;
      }
    });

    res.locals.data = {
      ratings: ratings,
      ratingsPercentages: calculateRatings(ratings, res.locals.data.length),
      reviews: res.locals.data
    }
  }
  router.db._.id = 'id';
  res.jsonp(res.locals.data)
}


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

function calculateRatings(ratings, totalNumberOfRatings) {
  let roundedValues = {};
  for (let i = 1; i <= 5; i++) {
    roundedValues[i] = getPercentage(ratings[i], totalNumberOfRatings);
  }
  let sumRounded = Object.values(roundedValues).reduce((a, b) => a + b, 0);
  let difference = 100 - sumRounded;

  for (let i = 0; i < difference; i++) {
    roundedValues[i + 1]++;
  }

  return roundedValues;
}

function getPercentage(rating, total) {
  return Math.floor(rating / total * 100);
}
