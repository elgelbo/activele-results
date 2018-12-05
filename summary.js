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
      q2Point.push(survey.home.center);
    }

    if (survey.responses[2] != null) {
      q3.push(parseInt(Object.values(survey.responses[2])));
    }
    if (survey.responses[3] != null) {
      q4.push(Object.values(survey.responses[3]).toString());
    }
    if (survey.responses[4] != null) {
      q5.push(Object.values(survey.responses[1]).toString());
      q5Name.push(survey.home.place_name);
      q5Point.push(survey.home.center);
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

  // TODO: PLOT POINTS TO MAP, CORRECT OUTLIER GEOCODE RESULTS
  // console.log(q2Point); 
  // TODO: PLOT POINTS TO MAP, CORRECT OUTLIER GEOCODE RESULTS
  // console.log(q5Point); 

  // OUTPUT
  console.log('\n\n\n\n\n');
  console.log('**********     Results     **********')
  console.log('TOTAL # OF RESPONSES: ' + surveys.length);
  console.log('COMPLETE # OF RESPONSES: ' + complete.filter(el => el === true).length + ` (${parseFloat(complete.filter(el => el === true).length / surveys.length).toFixed(2) * 100}%)`);
  console.log('# OF RESPONSES IN SPANISH (QUESTION #1): ' + spanish.filter(el => el === true).length + ` (${parseFloat(spanish.filter(el => el === true).length / surveys.length).toFixed(2) * 100} %)`);
  console.log('LOCATION OF HOME (QUESTION 2): RESULTS MAPPED');
  console.log('**********     Question 3     **********')
  console.log('On a typical day, how do you travel around your community to shop, eat, run errands, or for social or recreational purposes?:\n'
    + `WALK: ${q3.filter(el => el === 1).length} (${q3.filter(el => el === 1).length / q3.length.toFixed(2) * 100}%)\n`
    + `BIKE: ${q3.filter(el => el === 2).length} (${q3.filter(el => el === 2).length / q3.length.toFixed(2) * 100}%)\n`
    + `PUBLIC TRANS: ${q3.filter(el => el === 3).length} (${q3.filter(el => el === 3).length / q3.length.toFixed(2) * 100}%)\n`
    + `TAXI / SHARED VEHICLE: ${q3.filter(el => el === 4).length} (${q3.filter(el => el === 4).length / q3.length.toFixed(2) * 100}%)\n`
    + `MOTORCYCLE / SCOOTER: ${q3.filter(el => el === 5).length} (${q3.filter(el => el === 5).length / q3.length.toFixed(2) * 100}%)\n`
    + `CARPOOL: ${q3.filter(el => el === 6).length} (${q3.filter(el => el === 6).length / q3.length.toFixed(2) * 100}%)\n`
    + `DRIVE ALONE: ${q3.filter(el => el === 7).length} (${q3.filter(el => el === 7).length / q3.length.toFixed(2) * 100}%)\n`
    + `COMBO: ${q3.filter(el => el === 8).length} (${q3.filter(el => el === 8).length / q3.length.toFixed(2) * 100}%)\n`
    + `OTHER: ${q3.filter(el => el === 9).length} (${q3.filter(el => el === 9).length / q3.length.toFixed(2) * 100}%)\n`
    + `* % reflects percent of toal responses to Question #3 (${q3.length} responses).`
  );
  console.log('**********     Question 4     **********')
  console.log('Do You Currently Work?:\n'
    + `YES: ${q4.filter(el => el === 'true').length} (${q4.filter(el => el === 'true').length / q4.length.toFixed(2) * 100}%)\n`
    + `NO: ${q4.filter(el => el === 'false').length} (${q4.filter(el => el === 'false').length / q4.length.toFixed(2) * 100}%)\n`
    + `* % reflects percent of toal responses to Question #4 (${q4.length} responses).`);
  console.log('LOCATION OF HOME (QUESTION 5): RESULTS MAPPED');

  console.log('**********     Question 6     **********')
  console.log('Journey to Work:\n'
    + `WALK: ${q6.filter(el => el === 1).length} (${q6.filter(el => el === 1).length / q6.length.toFixed(2) * 100}%)\n`
    + `BIKE: ${q6.filter(el => el === 2).length} (${q6.filter(el => el === 2).length / q6.length.toFixed(2) * 100}%)\n`
    + `PUBLIC TRANS: ${q6.filter(el => el === 3).length} (${q6.filter(el => el === 3).length / q6.length.toFixed(2) * 100}%)\n`
    + `TAXI / SHARED VEHICLE: ${q6.filter(el => el === 4).length} (${q6.filter(el => el === 4).length / q6.length.toFixed(2) * 100}%)\n`
    + `MOTORCYCLE / SCOOTER: ${q6.filter(el => el === 5).length} (${q6.filter(el => el === 5).length / q6.length.toFixed(2) * 100}%)\n`
    + `CARPOOL: ${q6.filter(el => el === 6).length} (${q6.filter(el => el === 6).length / q6.length.toFixed(2) * 100}%)\n`
    + `DRIVE ALONE: ${q6.filter(el => el === 7).length} (${q6.filter(el => el === 7).length / q6.length.toFixed(2) * 100}%)\n`
    + `COMBO: ${q6.filter(el => el === 8).length} (${q6.filter(el => el === 8).length / q6.length.toFixed(2) * 100}%)\n`
    + `OTHER: ${q6.filter(el => el === 9).length} (${q6.filter(el => el === 9).length / q6.length.toFixed(2) * 100}%)\n`
    + `* % reflects percent of toal responses to Question #6 (${q6.length} responses).`
  );
  console.log('**********     Question 7     **********')
  console.log('Do you currently go to school?:\n'
    + `YES: ${q7.filter(el => el === 'true').length} (${((q7.filter(el => el === 'true').length / q7.length) * 100).toFixed(2)}%)\n`
    + `NO: ${q7.filter(el => el === 'false').length} (${q7.filter(el => el === 'false').length / q7.length.toFixed(2) * 100}%)\n`
    + `* % reflects percent of toal responses to Question #7 (${q7.length} responses).`);
  console.log('**********     Question 8     **********')
  console.log(JSON.stringify(q8));
  console.log('**********     Question 9     **********')
  console.log('Journey to School:\n'
    + `WALK: ${q9.filter(el => el === 1).length} (${q9.filter(el => el === 1).length / q9.length.toFixed(2) * 100}%)\n`
    + `BIKE: ${q9.filter(el => el === 2).length} (${q9.filter(el => el === 2).length / q9.length.toFixed(2) * 100}%)\n`
    + `PUBLIC TRANS: ${q9.filter(el => el === 3).length} (${q9.filter(el => el === 3).length / q9.length.toFixed(2) * 100}%)\n`
    + `TAXI / SHARED VEHICLE: ${q9.filter(el => el === 4).length} (${q9.filter(el => el === 4).length / q9.length.toFixed(2) * 100}%)\n`
    + `MOTORCYCLE / SCOOTER: ${q9.filter(el => el === 5).length} (${q9.filter(el => el === 5).length / q9.length.toFixed(2) * 100}%)\n`
    + `CARPOOL: ${q9.filter(el => el === 6).length} (${q9.filter(el => el === 6).length / q9.length.toFixed(2) * 100}%)\n`
    + `DRIVE ALONE: ${q9.filter(el => el === 7).length} (${q9.filter(el => el === 7).length / q9.length.toFixed(2) * 100}%)\n`
    + `COMBO: ${q9.filter(el => el === 8).length} (${q9.filter(el => el === 8).length / q9.length.toFixed(2) * 100}%)\n`
    + `OTHER: ${q9.filter(el => el === 9).length} (${q9.filter(el => el === 9).length / q9.length.toFixed(2) * 100}%)\n`
    + `* % reflects percent of toal responses to Question #8 (${q9.length} responses).`
  );
  const summary = {
    'total': surveys.length,
    'complete': {
      'count': complete.filter(el => el === true).length,
      'percent': (parseFloat(complete.filter(el => el === true).length / surveys.length) * 100).toFixed(2)
    },
    'spanish': {
      'count': spanish.filter(el => el === true).length,
      'percent': (parseFloat(spanish.filter(el => el === true).length / surveys.length) * 100).toFixed(2)
    }
  };
  return summary;
}