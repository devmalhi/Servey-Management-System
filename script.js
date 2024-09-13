document.getElementById('AddRow').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the values from the form inputs
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;

    // Get the table body by its ID
    var table = document.getElementById('mytable').getElementsByTagName('tbody')[0];

    // Create a new row
    var newRow = table.insertRow();

    // Insert new cells (columns) in the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    // Add text to the new cells
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = city;

    // Create edit and delete buttons
    var editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', function() {
        document.getElementById('name').value = cell1.innerHTML;
        document.getElementById('age').value = cell2.innerHTML;
        document.getElementById('city').value = cell3.innerHTML;
        table.deleteRow(newRow.rowIndex - 1); // Remove the row for editing
    });

    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1);
    });

    // Add buttons to the last cell
    cell4.appendChild(editButton);
    cell4.appendChild(deleteButton);

    // Clear the form inputs
    document.getElementById('AddRow').reset();
});
