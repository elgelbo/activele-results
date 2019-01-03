const turf = require('@turf/turf')

const data = [

  {
    "type": "Feature",
    "id": 47,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.401328334618,
        33.6967947656104
      ]
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
  },
  {
    "type": "Feature",
    "id": 48,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.38131905537,
        33.6933447075328
      ]
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
  },
  {
    "type": "Feature",
    "id": 49,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.285373251161,
        33.6888521190228
      ]
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
  },
  {
    "type": "Feature",
    "id": 50,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.389510521699,
        33.6752664601398
      ]
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
  },
  {
    "type": "Feature",
    "id": 51,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.358107218554,
        33.7042969363677
      ]
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
  },
  {
    "type": "Feature",
    "id": 52,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.364716181566,
        33.6871137212841
      ]
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
  },
  {
    "type": "Feature",
    "id": 53,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.383845696259,
        33.6635336525556
      ]
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
  },
  {
    "type": "Feature",
    "id": 54,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.342904457855,
        33.7113834536362
      ]
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
  },
  {
    "type": "Feature",
    "id": 55,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.346787385677,
        33.705071985821
      ]
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
  },
  {
    "type": "Feature",
    "id": 56,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.309795269776,
        33.7126329048575
      ]
    },
    "properties": {
      "OBJECTID": 56,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "01340337-6895-421e-931b-18e26ad06094",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 00:40:44 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 00:40:44 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 57,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.326491249247,
        33.7022033970909
      ]
    },
    "properties": {
      "OBJECTID": 57,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "4e2ffd73-feb8-4754-8236-c21d3ab8023c",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 00:43:04 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 00:43:04 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 58,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.336662185832,
        33.6929201983037
      ]
    },
    "properties": {
      "OBJECTID": 58,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "d66d88f0-5830-41d8-910c-f678146b8bd7",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 00:43:54 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 00:43:54 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 59,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.33988083665,
        33.6900279199309
      ]
    },
    "properties": {
      "OBJECTID": 59,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "f4727168-57d7-4f18-8a5c-e9eae9db8284",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:01:37 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:01:37 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 60,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.356231582805,
        33.702881745367
      ]
    },
    "properties": {
      "OBJECTID": 60,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "23573840-5e50-40a3-b90c-9f08bb4fc18b",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:03:38 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:03:38 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 61,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.384684456036,
        33.7124494556293
      ]
    },
    "properties": {
      "OBJECTID": 61,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "7298d361-d220-49d5-8ece-9e9168e468b3",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:05:46 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:05:46 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 62,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.393353355572,
        33.726941792098
      ]
    },
    "properties": {
      "OBJECTID": 62,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "d736194f-d304-4614-88a6-929f35afae61",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:06:55 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:06:55 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 63,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.37884796922,
        33.6710293023344
      ]
    },
    "properties": {
      "OBJECTID": 63,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "e13c9ec5-b91b-4171-b380-86d59f26ad59",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:07:57 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:07:57 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 64,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.374127281353,
        33.6763864803939
      ]
    },
    "properties": {
      "OBJECTID": 64,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "aa74b001-9d51-4cf6-8b76-aac5898fb3c9",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:08:47 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:08:47 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 65,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.300015594548,
        33.6609220479525
      ]
    },
    "properties": {
      "OBJECTID": 65,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "f9bc2346-9a79-4ee8-b460-919532d3c637",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:09:53 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:09:53 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 66,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.297011520451,
        33.6640653355276
      ]
    },
    "properties": {
      "OBJECTID": 66,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "e75b09f7-29bd-44a8-94ad-75f62f96fd69",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:10:22 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:10:22 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 67,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.275639679021,
        33.6637081495414
      ]
    },
    "properties": {
      "OBJECTID": 67,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "72405306-f754-47e6-ac5a-ecf46412200a",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:11:18 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:11:18 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 68,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.263880874699,
        33.6684228851448
      ]
    },
    "properties": {
      "OBJECTID": 68,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add protected bikeway (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "898fcfb9-e394-4960-bb20-1cf4ccdd4239",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:12:03 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:12:03 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 69,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.354580805591,
        33.689195138595
      ]
    },
    "properties": {
      "OBJECTID": 69,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add bike route (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "2dbbe8e6-37e3-4bae-9b18-5ac16cdbca6c",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:13:46 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:13:46 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 70,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.314111635974,
        33.7108315151061
      ]
    },
    "properties": {
      "OBJECTID": 70,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add buffer to existing bike lane along Hwy 74. Make it a Class I or IV. (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "9a99ad8a-166a-40a1-9a16-e020d90e9b46",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:15:05 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:15:05 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 71,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.298061297229,
        33.6101846371502
      ]
    },
    "properties": {
      "OBJECTID": 71,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "I like Grand Ave in Wildomar (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "62f38f7a-01e5-4f36-9077-827b540ecf55",
      "Mode": "Biking",
      "Status": "Like",
      "CreationDate": "Thu, 27 Dec 2018 01:16:31 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:16:31 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 72,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.345139429859,
        33.6742442073889
      ]
    },
    "properties": {
      "OBJECTID": 72,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Need a bike path/trail on Lakeshore Dr. (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "9777448b-ce7d-4d00-9547-148e039c232b",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:18:41 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:18:41 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 73,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.372433588795,
        33.6611360613224
      ]
    },
    "properties": {
      "OBJECTID": 73,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Consider putting a bike trail/path around the lake (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "e891f527-8253-4e37-b74e-b7e316bca3a6",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:19:26 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:19:26 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 74,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.322179720691,
        33.66352925066
      ]
    },
    "properties": {
      "OBJECTID": 74,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Missing sidewalks (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "2c451def-35e4-4ba5-aae3-3039cfbc9b64",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:28:21 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:28:21 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 75,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.31608574181,
        33.662743434636
      ]
    },
    "properties": {
      "OBJECTID": 75,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Missing sidewalks (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "f50852a6-47e9-4909-b258-4efa3efe9fd1",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:29:07 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:29:07 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 76,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.312566683582,
        33.6623862431614
      ]
    },
    "properties": {
      "OBJECTID": 76,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Missing sidewalk (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "5821b3f7-a29a-44c4-86d1-c6006f006925",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:29:39 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:29:39 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 77,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.354623720935,
        33.6794583367632
      ]
    },
    "properties": {
      "OBJECTID": 77,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Missing sidewalk (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "68846a99-b98c-4663-8f08-44c5170edbbe",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:30:25 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:30:25 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 78,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.351447985462,
        33.6776012858403
      ]
    },
    "properties": {
      "OBJECTID": 78,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Missing sidewalk (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "b03f3077-3a23-41e2-84ef-f4dc1fc352f8",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:31:07 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:31:07 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 79,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.359516070179,
        33.6481688184926
      ]
    },
    "properties": {
      "OBJECTID": 79,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Missing sidewalk (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "df5d22ec-e5e7-48f3-83ed-7cbcf2dd61c1",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:31:53 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:31:53 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 80,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.35436622887,
        33.645167855831
      ]
    },
    "properties": {
      "OBJECTID": 80,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Missing sidewalk (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "67eef513-ca6c-4b94-b235-78223a4d4e4e",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:32:21 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:32:21 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 81,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.297374651722,
        33.6638150001618
      ]
    },
    "properties": {
      "OBJECTID": 81,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Unimproved Intersection (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "6b0d36ff-a575-4877-8ee0-1dfa8317a118",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:35:07 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:35:07 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 82,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.29917709618,
        33.6616718557633
      ]
    },
    "properties": {
      "OBJECTID": 82,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Faded crosswalk (DDML Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "fd0a47b4-aa86-4339-a53b-9942da8d1179",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:36:06 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:36:06 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 83,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.299692080311,
        33.6609574624334
      ]
    },
    "properties": {
      "OBJECTID": 83,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Lack of shade (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "9243bf31-1db1-4e73-acec-a0472970a633",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:36:39 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:36:39 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 84,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.29857628136,
        33.662743434636
      ]
    },
    "properties": {
      "OBJECTID": 84,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Railroad Canyon interchange roundabout project must have raised crosswalk (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "4248c9af-2003-4f2d-a9d3-46e981ec9ffb",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:37:55 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:37:55 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 85,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.317549063468,
        33.7100764165375
      ]
    },
    "properties": {
      "OBJECTID": 85,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "People who run red lights too fast on 74 (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "0ea5b0ca-16eb-4ac3-a3b2-51a8f7dd1c46",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:39:23 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:39:23 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 86,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.319265677238,
        33.7093624253821
      ]
    },
    "properties": {
      "OBJECTID": 86,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add more lights on 74 (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "228e5568-b5ae-4b5e-a833-9f7af07055ae",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:40:02 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:40:02 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 87,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.371622397209,
        33.7055067705709
      ]
    },
    "properties": {
      "OBJECTID": 87,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Motorists drive too fast on Nichols Rd (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "6c3adcc8-0078-4e5f-b0b1-26422b73a72b",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:40:57 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:40:57 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 88,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.386008531756,
        33.6646547649412
      ]
    },
    "properties": {
      "OBJECTID": 88,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Grand Ave needs more light (DDLM Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "2b6468f1-db18-4f66-b6e6-906bc3043199",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:41:46 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:41:46 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 89,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.320112020679,
        33.6649699578054
      ]
    },
    "properties": {
      "OBJECTID": 89,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Connect sidewalks in Country Club Heights (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "0d5c1a19-2954-4684-9ad3-9b7bd7cc0ba1",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 01:56:14 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 01:56:14 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 90,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.301331414728,
        33.6214111021446
      ]
    },
    "properties": {
      "OBJECTID": 90,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Bikeway on Corydon/Palomar is great",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "2746642e-93d8-4899-99f7-c1233616d358",
      "Mode": "Biking",
      "Status": "Like",
      "CreationDate": "Thu, 27 Dec 2018 02:06:24 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:06:24 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 91,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.324108059752,
        33.6262722745082
      ]
    },
    "properties": {
      "OBJECTID": 91,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Need sidewalks around Grand/Gregory (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "2a2a7592-55f2-4acc-90ae-e619529bfd60",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:15:58 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:15:58 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 92,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.346874649871,
        33.7019776242733
      ]
    },
    "properties": {
      "OBJECTID": 92,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Need sidewalk along El Toro Rd near Temescal Canyon High School (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "e7eb69c4-b924-4a9e-b383-8f8042d8fa86",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:18:15 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:18:15 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 93,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.349744901644,
        33.6765771621977
      ]
    },
    "properties": {
      "OBJECTID": 93,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Lakeshore Dr needs sidewalks (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "cb4db48b-4582-4959-b474-9a098a7b20f4",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:19:29 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:19:29 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 94,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.308842210411,
        33.664544404329
      ]
    },
    "properties": {
      "OBJECTID": 94,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Roads need to be safer for students around the school (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "cfef6d16-e225-4187-bc92-9dd5c46d4da9",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:21:19 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:21:19 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 95,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.290794211499,
        33.6363623642999
      ]
    },
    "properties": {
      "OBJECTID": 95,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "More lighting is needed on Mission Trail (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "8b7af12f-f714-4731-be26-e888c8dbd2c1",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:22:41 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:22:41 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 96,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.290751296155,
        33.635504839492
      ]
    },
    "properties": {
      "OBJECTID": 96,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Pathway is missing on Mission Trail",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "66535e13-4211-470f-81d3-248698420749",
      "Mode": "Walking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:24:19 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:24:19 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 97,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.374382573242,
        33.7054989718673
      ]
    },
    "properties": {
      "OBJECTID": 97,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Will Terra Cotta Rd get paved by Nichols Rd? (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "06c554a1-31cb-4cb1-a2b2-da120860a91a",
      "Mode": "Other",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:28:37 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:28:37 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 98,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.358955807013,
        33.7068981821228
      ]
    },
    "properties": {
      "OBJECTID": 98,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add flood control to ramp ends by Nichols Rd (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "4679b5f0-d3c3-451d-8fe7-1f9e370d17ba",
      "Mode": "Other",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:30:35 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:30:35 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 99,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.267909893799,
        33.6639265578519
      ]
    },
    "properties": {
      "OBJECTID": 99,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Add walking/biking improvements to Railroad Canyon (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "41f83931-88c3-43ff-84f8-85756025adca",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:38:48 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:38:48 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 100,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.285762677002,
        33.6643551797693
      ]
    },
    "properties": {
      "OBJECTID": 100,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Make Railroad Canyon safer (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "38678b42-b2fa-4259-8451-0f51148a6698",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:39:55 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:39:55 GMT",
      "Editor": ""
    }
  },
  {
    "type": "Feature",
    "id": 101,
    "geometry": {
      "type": "Point",
      "coordinates": [
        -117.325759777832,
        33.6633550586402
      ]
    },
    "properties": {
      "OBJECTID": 101,
      "Id": null,
      "PUBLIC_": null,
      "Comment": "Improve Lakeshore for bikes (WF Event)",
      "Email": "amurillofelix@placeworks.com",
      "GlobalID": "d0bf1a55-b5a8-4446-93d1-9d01bda08a4a",
      "Mode": "Biking",
      "Status": "Dislike",
      "CreationDate": "Thu, 27 Dec 2018 02:40:45 GMT",
      "Creator": "",
      "EditDate": "Thu, 27 Dec 2018 02:40:45 GMT",
      "Editor": ""
    }
  }
];

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
// console.log(booty);
