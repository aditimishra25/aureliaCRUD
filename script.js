var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["employeeName"] = document.getElementById("employeeName").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["employeeID"] = document.getElementById("employeeID").value;
      return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.employeeName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.designation;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.employeeID;
    
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("employeeName").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("employeeID").value = "";
 
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("employeeName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[1].innerHTML;
    document.getElementById("employeeID").value = selectedRow.cells[2].innerHTML;
  
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.employeeName;
    selectedRow.cells[1].innerHTML = formData.designation;
    selectedRow.cells[2].innerHTML = formData.employeeID;
   
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("employeeName").value == "") {
        isValid = false;
        document.getElementById("employeeNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("employeeNameValidationError").classList.contains("hide"))
            document.getElementById("employeeNameValidationError").classList.add("hide");
    }
    return isValid;
}