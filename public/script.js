// Retrieve dining halls
async function dataHandler() {
  const endpoint = '/api/dining';
  console.log(endpoint);
  const request = await fetch(endpoint);
  const dininghalls = await request.json();
  return dininghalls;

}

// // This function loads the dining halls into the table
// function loadTableData(data) {
//   const table = document.getElementById("DiningHalls");
//   const row = table.insertRow();
//   const hall = row.insertCell(0);
//   hall.innerHTML = data.hall_name;
//   const location = row.insertCell(1);
//   location.innerHTML = data.hall_address;
// }

// // Once the request is successfully retrieved, pass the data into our table function
// dataHandler().then(dininghalls => {
//   console.log(dininghalls.data[0]);

//   for (i = 0; i < dininghalls.data.length; i += 1) {
//     loadTableData(dininghalls.data[i]);
//   }
// })




window.onload = () => {
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Meal Macros'
    },
    axisX: {
      valueFormatString: 'DDD'
    },
    axisY: {
      prefix: '$'
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries
    },
    data: [{
      type: 'stackedBar',
      name: 'Meals',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 56 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 41 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 75 },
        { x: new Date(2017, 1, 5), y: 98 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Snacks',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 86 },
        { x: new Date(2017, 0, 31), y: 95 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 58 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 65 },
        { x: new Date(2017, 1, 5), y: 89 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Drinks',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 48 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 41 },
        { x: new Date(2017, 1, 2), y: 55 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 83 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Dessert',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 61 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 61 },
        { x: new Date(2017, 1, 2), y: 75 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 105 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Takeaway',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 52 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 20 },
        { x: new Date(2017, 1, 2), y: 35 },
        { x: new Date(2017, 1, 3), y: 30 },
        { x: new Date(2017, 1, 4), y: 45 },
        { x: new Date(2017, 1, 5), y: 25 }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};