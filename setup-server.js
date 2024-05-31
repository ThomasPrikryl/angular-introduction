const fs = require('fs');
const { faker } = require('@faker-js/faker');
const countries = require('countries-list').countries;
const languages = require('countries-list').languages;

const changeForCountryToHaveAnyReviews = 0.2;

try {
  const data = {};

  data.countries = getCountryData();
  data.reviews = getReviewData();

// Save the data to db.json
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
  console.log('Data imported successfully');
} catch (e) {
  console.error('Error importing data', e);
}

function getCountryData() {
  return Object.keys(countries).map(countryKey => {
    const country = countries[countryKey];
    return {
      id: countryKey,
      ...country,
      languagesWithNames: country.languages.map(language => languages[language].name)
    };
  });
}

function getReviewData() {
  return Object.keys(countries).map(countryKey => {
    const country = countries[countryKey];
    return generateRandomReviews(countryKey);
  }).flat();
}


function generateRandomReviews(countryKey) {
  const forceHasReviews = countryKey === 'AT';
  if (Math.random() > changeForCountryToHaveAnyReviews && !forceHasReviews) {
    return [];
  } else {
    const reviews = [];
    const randomNumberOfReviews = getRandomNumberWithLowerLikely(1, 30);
    for (let i = 0; i < randomNumberOfReviews; i++) {
      const review = {
        id: i,
        countryId: countryKey,
        timestamp: faker.date.past({ years: 1 }),
        rating: faker.number.int({ min: 1, max: 5 }),
        username: faker.internet.displayName(),
        avatarColor: generateDarkColor(),
        comment: faker.lorem.paragraph(Math.floor(Math.random() * 5) + 1),
      };
      reviews.push(review);
    }
    return reviews;
  }
}


function getRandomNumberWithLowerLikely(min, max) {
  return generateBoundedExponentialInteger(.12, min, max);
}

function generateBoundedExponentialInteger(lambda, min, max) {
  let u = Math.random();
  let x = Math.floor(-Math.log(1.0 - u) / lambda);
  if (x < min) {
    return min;
  } else if (x > max) {
    return max;
  } else {
    return x;
  }
}

function generateDarkColor() {
  const r = generateLowNumberColorPart();
  const g = generateLowNumberColorPart();
  const b = generateLowNumberColorPart();
  return `#${r}${g}${b}`;
}

function generateLowNumberColorPart() {
  return Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
}

