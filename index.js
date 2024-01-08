function createTable() {
    const table = document.getElementById("myTable");

    let counter = 1;
    for (let i = 0; i < 10; i++) {
      const row = table.insertRow(i);

      for (let j = 0; j < 10; j++) {
        const cell = row.insertCell(j);
        cell.innerHTML = counter++;
      }
    }
  }
  window.onload = createTable;