
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];

    var n = 0;
    var x = 1;

    function addRow() {
      var addRown = document.getElementById("result");
      var newRow = addRown.insertRow(n);

      list1[x] = document.getElementById("fName").value;
      list2[x] = document.getElementById("lName").value;
      list3[x] = document.getElementById("email").value;
      list4[x] = document.getElementById("age").value;

      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);

      cell1.innerHTML = list1[x];
      cell2.innerHTML = list2[x];
      cell3.innerHTML = list3[x];
      cell4.innerHTML = list4[x];

      n++;
      x++;
      
    }