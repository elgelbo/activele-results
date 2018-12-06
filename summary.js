const turf = require('@turf/turf');
function cleanString(s) {
  return s.replace(/[^A-Za-z0-9_]/g, "");
}
exports.pipeline = (surveys) => {
  const complete = new Array();
  const spanish = new Array();
  const q1 = new Array();
  const q2 = new Array();
  const q2Name = new Array();
  const q2Point = new Array();
  const q3 = new Array();
  const q4 = new Array();
  const q5 = new Array();
  const q5Name = new Array();
  const q5Point = new Array();
  const q6 = new Array();
  const q7 = new Array();
  const q8 = new Array();
  const q9 = new Array();
  surveys.forEach(survey => {
    complete.push(survey.complete);
    spanish.push(survey.spanish);
    spanish.push(survey.home);
    q1.push(survey.responses[0]);
    if (survey.responses[1] != null) {
      q2.push(Object.values(survey.responses[1]).toString());
      q2Name.push(survey.home.place_name);
      q2Point.push(turf.point(survey.home.geometry.coordinates));
    }

    if (survey.responses[2] != null) {
      q3.push(parseInt(Object.values(survey.responses[2])));
    }
    if (survey.responses[3] != null) {
      q4.push(Object.values(survey.responses[3]).toString());
    }
    if (survey.work.geometry != null) {
      q5.push(Object.values(survey.responses[1]).toString());
      q5Name.push(survey.home.place_name);
      q5Point.push(turf.point(survey.work.geometry.coordinates));
    }
    if (survey.responses[5] != null && survey.responses[5].answer != 'skip') {
      q6.push(parseInt(Object.values(survey.responses[5])));
    }
    if (survey.responses[6] != null) {
      q7.push(Object.values(survey.responses[6]).toString());
    }
    // NEED TO GET COUNT BY HS NAME
    if (survey.responses[7] != null && survey.responses[7].answer != 'skip') {
      q8.push(cleanString(Object.values(survey.responses[7]).toString().toLowerCase()));
    }
    if (survey.responses[8] != null && survey.responses[8].answer != 'skip') {
      q9.push(parseInt(Object.values(survey.responses[8])));
    }
  });
  const homePoints = turf.featureCollection(q2Point);
  const workPoints = turf.featureCollection(q5Point);

  const q3Summary = [
    {
      'title': 'Walk',
      'count': q3.filter(el => el === 1).length,
      'percent': JSON.parse((q3.filter(el => el === 1).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Bike',
      'count': q3.filter(el => el === 2).length,
      'percent': JSON.parse((q3.filter(el => el === 2).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Public Transportation',
      'count': q3.filter(el => el === 3).length,
      'percent': JSON.parse((q3.filter(el => el === 3).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Taxi / Shared Vehicle',
      'count': q3.filter(el => el === 4).length,
      'percent': JSON.parse((q3.filter(el => el === 4).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Motorcycle / Scooter',
      'count': q3.filter(el => el === 5).length,
      'percent': JSON.parse((q3.filter(el => el === 5).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Carpool',
      'count': q3.filter(el => el === 6).length,
      'percent': JSON.parse((q3.filter(el => el === 6).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Drove Alone',
      'count': q3.filter(el => el === 7).length,
      'percent': JSON.parse((q3.filter(el => el === 7).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Combination',
      'count': q3.filter(el => el === 8).length,
      'percent': JSON.parse((q3.filter(el => el === 8).length / q3.length.toFixed(2) * 100).toFixed(2)),
    },
    {
      'title': 'Other',
      'count': q3.filter(el => el === 9).length,
      'percent': JSON.parse((q3.filter(el => el === 9).length / q3.length.toFixed(2) * 100).toFixed(2)),
    }
  ];
  const summary = {
    'total': surveys.length,
    'complete': {
      'count': complete.filter(el => el === true).length,
      'percent': (parseFloat(complete.filter(el => el === true).length / surveys.length) * 100).toFixed(2)
    },
    'spanish': {
      'count': spanish.filter(el => el === true).length,
      'percent': (parseFloat(spanish.filter(el => el === true).length / surveys.length) * 100).toFixed(2)
    },
    'question2': {
      'responses': q2,
      'names': q2Name,
      'points': {
        'features': homePoints,
        'bbox': turf.bbox(homePoints),
        'center': turf.center(homePoints)
      },
      'total': q2.length,
      'question': 'Where do you live?',
      'percent': ((q2.length / surveys.length) * 100).toFixed(2)
    },
    'question3': {
      'question': 'On a typical day, how do you travel around your community to shop, eat, run errands, or for social or recreational purposes?',
      'total': q3.length,
      'percent': ((q3.length / surveys.length) * 100).toFixed(2),
      'responses': q3Summary.sort(function (a, b) {
        return a.count - b.count;
      }).reverse()
    },
    'question4': {
      'question': 'Do You Currently Work?',
      'total': q4.length,
      'responses': [{
        'title': 'Yes',
        'count': q4.filter(el => el === 'true').length,
        'percent': JSON.parse(((q4.filter(el => el === 'true').length / q4.length) * 100).toFixed(2)),
      },
      {
        'title': 'No',
        'count': q4.filter(el => el === 'false').length,
        'percent': JSON.parse(((q4.filter(el => el === 'false').length / q4.length) * 100).toFixed(2)),
      }]
    },
    'question5': {
      'responses': q5,
      'names': q5Name,
      'points': {
        'features': workPoints,
        'bbox': turf.bbox(workPoints),
        'center': turf.center(workPoints)
      },
      'total': q5.length,
      'question': 'What is the address where you work?',
      'percent': ((q5.length / surveys.length) * 100).toFixed(2)
    },
    'question6': {
      'question': 'How do you normally travel to/from work?',
      'responses': {
        'total': q6.length,
        'walk': {
          'count': q6.filter(el => el === 1).length,
          'percent': JSON.parse((q6.filter(el => el === 1).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'bike': {
          'count': q6.filter(el => el === 2).length,
          'percent': JSON.parse((q6.filter(el => el === 2).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'publicTrans': {
          'count': q6.filter(el => el === 3).length,
          'percent': JSON.parse((q6.filter(el => el === 3).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'shared': {
          'count': q6.filter(el => el === 4).length,
          'percent': JSON.parse((q6.filter(el => el === 4).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'moto': {
          'count': q6.filter(el => el === 5).length,
          'percent': JSON.parse((q6.filter(el => el === 5).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'carpool': {
          'count': q6.filter(el => el === 6).length,
          'percent': JSON.parse((q6.filter(el => el === 6).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'driveAlone': {
          'count': q6.filter(el => el === 7).length,
          'percent': JSON.parse((q6.filter(el => el === 7).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'combo': {
          'count': q6.filter(el => el === 8).length,
          'percent': JSON.parse((q6.filter(el => el === 8).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
        'other': {
          'count': q6.filter(el => el === 9).length,
          'percent': JSON.parse((q6.filter(el => el === 9).length / q6.length.toFixed(2) * 100).toFixed(2)),
        },
      }
    },
    'question7': {
      'question': 'Do you currently go to school?',
      'responses': {
        'total': q7.length,
        'yes': {
          'count': q7.filter(el => el === 'true').length,
          'percent': JSON.parse(((q7.filter(el => el === 'true').length / q7.length) * 100).toFixed(2)),
        },
        'no': {
          'count': q7.filter(el => el === 'false').length,
          'percent': JSON.parse(((q7.filter(el => el === 'false').length / q7.length) * 100).toFixed(2)),
        }
      }
    },
    'question8': {
      'question': 'What is the name of the school you go to?',
      'responses': q8
    },
    'question9': {
      'question': 'How do you normally travel to/from school?',
      'responses': {
        'total': q9.length,
        'walk': {
          'count': q9.filter(el => el === 1).length,
          'percent': JSON.parse((q9.filter(el => el === 1).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'bike': {
          'count': q9.filter(el => el === 2).length,
          'percent': JSON.parse((q9.filter(el => el === 2).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'publicTrans': {
          'count': q9.filter(el => el === 3).length,
          'percent': JSON.parse((q9.filter(el => el === 3).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'shared': {
          'count': q9.filter(el => el === 4).length,
          'percent': JSON.parse((q9.filter(el => el === 4).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'moto': {
          'count': q9.filter(el => el === 5).length,
          'percent': JSON.parse((q9.filter(el => el === 5).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'carpool': {
          'count': q9.filter(el => el === 6).length,
          'percent': JSON.parse((q9.filter(el => el === 6).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'driveAlone': {
          'count': q9.filter(el => el === 7).length,
          'percent': JSON.parse((q9.filter(el => el === 7).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'combo': {
          'count': q9.filter(el => el === 8).length,
          'percent': JSON.parse((q9.filter(el => el === 8).length / q9.length.toFixed(2) * 100).toFixed(2)),
        },
        'other': {
          'count': q9.filter(el => el === 9).length,
          'percent': JSON.parse((q9.filter(el => el === 9).length / q9.length.toFixed(2) * 100).toFixed(2)),
        }
      }
    }
  };
  return summary;
}