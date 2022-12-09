/* gumball.js */
/*
 * get the content of a JSON file using Ajax
 *
 */

window.onload = function () {
  /* local host server */
  //var url = "http://localhost:8080/HTML5/ch8/gumball/sales.json";
  /* 실제 gumball server */
  var url = "http://gumball.wickedlysmart.com";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
};

/* 
window.onload = function () {
  // local host server
  // var url = "http://localhost:8080/HTML5/ch8/gumball/sales.json";
  // 실제 gumball server
  var url = "http://gumball.wickedlysmart.com";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status == 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
};
*/

function updateSales(responseText) {
  var salesDiv = document.getElementById("sales");
  var sales = JSON.parse(responseText);
  for (var i = 0; i < sales.length; i++) {
    var sale = sales[i];
    var div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
    salesDiv.appendChild(div);
  }
}
