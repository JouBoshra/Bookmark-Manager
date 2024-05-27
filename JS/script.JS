//the declration of user variable
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");


//create new arr
var productList = [];

//local storage for product list items
if(localStorage.getItem("sitename") !== null) { 
    productList= JSON.parse(localStorage.getItem("sitename"));
    displayData();
    
}


// create new object and add to array with validation
function addProduct() {
    var urlValue = siteUrl.value;
    if (isValidURL(urlValue)) {
      var siteData = {
        sitecategory: siteName.value,
        siteHref: urlValue,
      };
      productList.push(siteData);
      localStorage.setItem("sitename", JSON.stringify(productList));
      displayData();
      clearInputFields();
    } else {
      alert("Please enter a valid website URL.");
    }
    
  }
  


function displayData() {
  var rowDisplay = "";
  for (var i = 0; i < productList.length; i++) {
    rowDisplay += `
        <tr>
        <td>${i+1}</td>
       <td>${productList[i].sitecategory}</td>
        <td><a href="${productList[i].siteHref}"><button  action="https://google.com" type="button" class="btn btn-outline-success">
       <i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
       <td><button onclick="deleteraw(${i})" type="button" class="btn btn-outline-danger">
          <i class="fa-solid fa-trash-can"></i>Delete</button></a>
        </td>
     </tr>
         `;
  }
  document.getElementById("rowDisplay").innerHTML = rowDisplay;
  deleteData()
}

// functions clear data 

function deleteData() {
    siteName.value = null;
    siteUrl.value = null;
}
function deleteraw (indexArr) { 
    productList.splice(indexArr, 1);
    displayData();
          localStorage.setItem("sitename", JSON.stringify(productList));

}
// function to validate URL
function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  }