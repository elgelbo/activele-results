const turf = require('@turf/turf')

const data = [{
  "type": "Feature",
  "id": 47,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.401328334618, 33.6967947656104]
  },
  "properties": {
    "OBJECTID": 47,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "Would be great if kids had a path to ride bikes and scooters so they don’t plow into other kids walking to/from school from Westwind Dr to Regatta Way. Thank you for the consideration.",
    "Email": "Ms_cio@hotmail.com",
    "GlobalID": "edd8a15a-67fa-443d-9f38-e5ecd038445c",
    "Mode": null,
    "Status": null,
    "CreationDate": "Sat, 10 Nov 2018 04:37:56 GMT",
    "Creator": "",
    "EditDate": "Sat, 10 Nov 2018 04:37:56 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 48,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.38131905537, 33.6933447075328]
  },
  "properties": {
    "OBJECTID": 48,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "Most of Lakeshore Dr is missing sidewalks although parts are now being paved. Would be great to see the whole street from Lake to Main St properly paved for walking and biking.  Thank you",
    "Email": "Ms_cio@hotmail.com",
    "GlobalID": "6dab0233-e043-4755-b19f-eaacc2736274",
    "Mode": "Walking",
    "Status": "Like",
    "CreationDate": "Sat, 10 Nov 2018 04:42:05 GMT",
    "Creator": "",
    "EditDate": "Sat, 10 Nov 2018 04:42:05 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 49,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.285373251161, 33.6888521190228]
  },
  "properties": {
    "OBJECTID": 49,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "Walking path from Tuscany Hills Elementary to Canyon lake Little Pony Street gate",
    "Email": "Kkwmorris@gmail.com",
    "GlobalID": "c94d62ce-463c-4be0-ba24-b14d6ffc90ab",
    "Mode": "Walking",
    "Status": "Like",
    "CreationDate": "Tue, 13 Nov 2018 15:58:57 GMT",
    "Creator": "",
    "EditDate": "Tue, 13 Nov 2018 15:58:57 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 50,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.389510521699, 33.6752664601398]
  },
  "properties": {
    "OBJECTID": 50,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "There should be a bike lane / path AND sidewalks along grand avenue for our Withrow and Lakeside students.",
    "Email": "sueite@gmail.com",
    "GlobalID": "3a413612-1c93-49dc-aca5-bb82acbeda72",
    "Mode": "Walking",
    "Status": "Dislike",
    "CreationDate": "Wed, 14 Nov 2018 23:44:05 GMT",
    "Creator": "",
    "EditDate": "Wed, 14 Nov 2018 23:44:05 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 51,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.358107218554, 33.7042969363677]
  },
  "properties": {
    "OBJECTID": 51,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "bike lane should come down Nichols, Collier Ave",
    "Email": "hoggie_bear@yahoo.com",
    "GlobalID": "91f43d29-e96c-4692-bec6-f7184d7e87d2",
    "Mode": "Biking",
    "Status": null,
    "CreationDate": "Fri, 16 Nov 2018 15:47:53 GMT",
    "Creator": "",
    "EditDate": "Fri, 16 Nov 2018 15:47:53 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 52,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.364716181566, 33.6871137212841]
  },
  "properties": {
    "OBJECTID": 52,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "dangerous corner for bike, needs bike lane",
    "Email": "hoggie_bear@yahoo.com",
    "GlobalID": "99154f84-eb7b-4b44-9419-b952882ecf14",
    "Mode": "Biking",
    "Status": null,
    "CreationDate": "Fri, 16 Nov 2018 15:48:44 GMT",
    "Creator": "",
    "EditDate": "Fri, 16 Nov 2018 15:48:44 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 53,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.383845696259, 33.6635336525556]
  },
  "properties": {
    "OBJECTID": 53,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "common route for cyclist, need bike lane and road improvements, bumps on shoulder hard on bikes",
    "Email": "hoggie_bear@yahoo.com",
    "GlobalID": "ef7d35e8-64e9-4807-a056-2f06fad7f98b",
    "Mode": "Biking",
    "Status": null,
    "CreationDate": "Fri, 16 Nov 2018 15:50:09 GMT",
    "Creator": "",
    "EditDate": "Fri, 16 Nov 2018 15:50:09 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 54,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.342904457855, 33.7113834536362]
  },
  "properties": {
    "OBJECTID": 54,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "My son Vance Gerdes lives at 28066 Lindell Rd. , he walks to school everyday with no sidewalk. The area has traffic & has no space for pedestrians to walk,  it also has no bike path.  If the city put either one along El Toror rd. it would be wonderful!",
    "Email": "cgerdes714@gmail.com",
    "GlobalID": "4a50a2b8-c48d-46d6-8aca-1a2a5c7e1e4f",
    "Mode": "Walking",
    "Status": "Dislike",
    "CreationDate": "Mon, 19 Nov 2018 17:44:34 GMT",
    "Creator": "",
    "EditDate": "Mon, 19 Nov 2018 17:44:34 GMT",
    "Editor": ""
  }
}, {
  "type": "Feature",
  "id": 55,
  "geometry": {
    "type": "Point",
    "coordinates": [-117.346787385677, 33.705071985821]
  },
  "properties": {
    "OBJECTID": 55,
    "Id": null,
    "PUBLIC_": null,
    "Comment": "bad",
    "Email": null,
    "GlobalID": "c46d2952-9794-4deb-9931-0204965f1f48",
    "Mode": "Walking",
    "Status": "Dislike",
    "CreationDate": "Thu, 29 Nov 2018 00:33:38 GMT",
    "Creator": "",
    "EditDate": "Thu, 29 Nov 2018 00:33:38 GMT",
    "Editor": ""
  }
}];

const set = new Array();

data.forEach(feat => {
  const turfed = turf.feature(
    feat.geometry, 
    {
      'comment': feat.properties.Comment, 
      'email': feat.properties.Email, 
      'mode': feat.properties.Mode, 
      'status': feat.properties.Status}
  );
  set.push(turfed);
});

const booty = turf.featureCollection(set);

module.exports = booty;