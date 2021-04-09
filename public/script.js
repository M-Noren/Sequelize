// Retrieve dining halls
async function dataHandler() {
  const endpoint = '/api/dining';
  console.log(endpoint);
  const request = await fetch(endpoint);
  const dininghalls = await request.json();
  return dininghalls;

}

// This function loads the dining halls into the table
function loadTableData(data) {
  const table = document.getElementById("DiningHalls");
  const row = table.insertRow();
  const hall = row.insertCell(0);
  hall.innerHTML = data.hall_name;
  const location = row.insertCell(1);
  location.innerHTML = data.hall_address;
}

// Once the request is successfully retrieved, pass the data into our table function
dataHandler().then(dininghalls => {
  console.log(dininghalls.data[0]);

  for (i = 0; i < dininghalls.data.length; i += 1) {
    loadTableData(dininghalls.data[i]);
  }
})