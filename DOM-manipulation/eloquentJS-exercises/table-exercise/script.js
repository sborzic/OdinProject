const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let tableContainer = document.getElementById('mountains');
let table = document.createElement('table');
tableContainer.appendChild(table);

let tableHeader = document.createElement('tr');
table.appendChild(tableHeader);

let columnNames = Object.keys(MOUNTAINS[0]);
for(let i=0; i<columnNames.length; i++) {
  let columnName = document.createElement('th')
  columnName.textContent = columnNames[i];
  tableHeader.appendChild(columnName);
}

MOUNTAINS.forEach(mountain => {
  let dataRow = document.createElement('tr')
  let name = document.createElement('td');
  let height = document.createElement('td');
  let place = document.createElement('td');
  name.textContent = mountain.name;
  height.textContent = mountain.height;
  height.style.textAlign = 'right';
  place.textContent = mountain.place;
  table.appendChild(dataRow);
  dataRow.appendChild(name);
  dataRow.appendChild(height);
  dataRow.appendChild(place);
});

