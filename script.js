// JS_Discussion
 // var x = 29;
        // var y = 5;
        // if (typeof (y) == "number") {
        //     console.log(x + y.toString());
        // } else {
        //     console.log(x + y);
        // }
        // function anji(a, b) {

        //     console.log(a + b);
        // }
        // anji(10, 5);

        // function anji(e){
        //     console.log("Anji is ", e.id);
        // }
        // var html = "<li><button id=" + data[i].ID + " onclick='anji(this)'>Hello World" + "" + data[i].text + "</button></li>" 

        var today = new Date();
        console.log(today);
        var baseCount = 50;
        var todayOnly = moment(today).format('DD');
        console.log(todayOnly);
        console.log(baseCount * todayOnly)

        var car = {
            type: "Fiat",
            model: "500",
            color: "white",
            fullName: function () {
                return this.firstName + " " + this.lastName;
            }
        };
        // var apiUrl = "https://dhhsdev.ideaentity.com/teams/dhhsois/DevNP3/_api/web/lists/getByTitle('SpendActions')/items?$select=ID,Title,COR/Title,EstimatedCurrentYearCost,EstimatedCurrentYearCost,FY,Author/Id,Author/Title,Status/ID,Status/Title,TBM/ID,TBM/Title,Created,Modified,Division/ID,Division/DivisionShortName,Branch/ID,Branch/BranchShortName,ProductServiceName/Title,ProductServiceName/ID&$top=500&$expand=COR,Status,Division,Branch,TBM,Author,ProductServiceName&$orderby=Modified%20desc";
        // var response = await fetch(apiUrl);
        // var data = await response.json();


        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         console.log(this.results);
        //     }
        // };
        // xhttp.open("GET", "https://www.metaweather.com/api/location/search/?query=san", true);
        // xhttp.send();

        function a(a, b) {
            alert(a + b)
            return a + b


        }
        var rowHtml = '';

        var list = document.getElementById('list');
        var countVal = 0;
        function addLink() {
            for (i = 0; i < 100; i++) {
                rowHtml += "<li>";
                rowHtml += "<a href='#'>";
                rowHtml += "Row# "+ (i+1);
                rowHtml += "<a>";
                rowHtml += "</li>";
                countVal = i+1
            }
            list.innerHTML = rowHtml;
            var listCount = document.getElementById('recCount')
            listCount.innerHTML = countVal;
            console.log(rowHtml)
        }
alert('Js Discussion!')
