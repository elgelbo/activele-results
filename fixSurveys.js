require('dotenv').config();
var axios = require('axios')
const endPoint = 'http://activele-survey.herokuapp.com/api/results'
const summary = require('./summary');
const turf = require('@turf/turf');
var MapboxClient = require('@mapbox/mapbox-sdk/services/geocoding');
var client = MapboxClient({ accessToken: process.env.MAPBOX_TOKEN });
var Answers = require('./models/Answers');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //USE ES6 PROMISES see:http://mongoosejs.com/docs/promises.html#plugging-in-your-own-promises-library

const acceptBounds = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -119.73999023437499,
              32.48196313217176
            ],
            [
              -113.9501953125,
              32.48196313217176
            ],
            [
              -113.9501953125,
              34.92197103616377
            ],
            [
              -119.73999023437499,
              34.92197103616377
            ],
            [
              -119.73999023437499,
              32.48196313217176
            ]
          ]
        ]
      }
    }
  ]
};

async function codeGeo(input) {
  const resp = await client.forwardGeocode({
    query: input.toString(),
    countries: ['us'],
    proximity: [-117.3273, 33.6681]
  }).send();
  return resp.body;
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => {
    console.log('🔗 👌 🔗 👌 🔗 👌 🔗 👌 Mongoose connection open.')
  },
  err => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
  }
);
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function go() {
  try {
    const response = await axios.get(endPoint);
    await asyncForEach(response.data.surveys, async (survey) => {
      console.log(survey);
      if (survey._id == '5bbd055974c8ee00135ee03e') {
        // console.log(survey);
        // const fixed = await codeGeo(`temescal canyon high school Lake Elsinore, CA 92530`);
        const answers = await Answers.findOneAndUpdate({
          _id: '5bbd055974c8ee00135ee03e'
        }, {
            flag: true
          }, {
            new: true,
            upsert: true
          }).exec();
        console.log(answers);
      }

    });
    mongoose.connection.close();
  } catch (e) {
    console.error(e); // 💩
    mongoose.connection.close();
  }
}

go();