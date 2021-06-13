function resetFieldValues() {
  fName.value = "";
  lName.value = "";
  email.value = "";
  age.value = "";
  fNameCreate.value = "";
  lNameCreate.value = "";
  emailCreate.value = "";
  ageCreate.value = "";
}

var dataObj = [];
function addRow() {
  if (
    (fName.value != "" || lName.value != "" || email.value || age.value) &&
    dataObj.length < 1
  ) {
    dataObj.push({
      firstN: fName.value,
      lName: lName.value,
      email: email.value,
      age: age.value,
    });
    buildTable(dataObj);
    nameValidation.style.display = "none";
  } else {
    nameValidation.style.display = "block";
    nameValidation.style.color = "red";
  }
}

function buildTable(data) {
  var cellHtml = "";
  if (data.length >= 1) {
    for (i = 0; i < data.length; i++) {
      cellHtml += "<tr id='row_" + i + "'>";
      cellHtml += "<td>" + data[i].firstN + "</td>";
      cellHtml += "<td>" + data[i].lName + "</td>";
      cellHtml += "<td>" + data[i].email + "</td>";
      cellHtml += "<td>" + data[i].age + "</td>";
      cellHtml +=
        "<td> <a href='javascript:void(0)' onClick='editItem(" +
        i +
        ")'>Edit</a> / <a href='javascript:void(0)' onClick='deleteItem(" +
        i +
        ")'>Delete</a></td>";
      cellHtml += "</tr>";
    }
    document.getElementById("result").innerHTML = cellHtml;
  } else {
    cellHtml += "<tr><td colspan='5'>No records to show</td></tr>";
    document.getElementById("result").innerHTML = cellHtml;
  }
  resetFieldValues();
}
function editItem(index) {
  createForm.style.display = "none";
  editForm.style.display = "block";
  fNameCreate.value = dataObj[index].firstN;
  lNameCreate.value = dataObj[index].lName;
  emailCreate.value = dataObj[index].email;
  ageCreate.value = dataObj[index].age;
  btnCreate.setAttribute("onClick", "updateRow(" + index + ")");
}
function deleteItem(index) {
  if (
    confirm(
      "Are You Sure you want to delete " + dataObj[index].firstN + " record ?"
    )
  ) {
    dataObj.splice(index, 1);
    buildTable(dataObj);
  }
}
function updateRow(index) {
  // var firstN = fNameCreate.value;
  // var lName = lNameCreate.value;
  // var email =  emailCreate.value;
  // var age =  ageCreate.value;
  dataObj[index].firstN = fNameCreate.value;
  dataObj[index].lName = lNameCreate.value;
  dataObj[index].email = emailCreate.value;
  dataObj[index].age = ageCreate.value;
  buildTable(dataObj);
  createForm.style.display = "block";
  editForm.style.display = "none";
  resetFieldValues();
}
