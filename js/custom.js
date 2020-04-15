
$(document).ready(function() {

    fetch('https://api.covid19api.com/summary')
    .then(function(res){

         return res.json()
         
         })
    .then(function(data){

        console.log(data);
        let input = data.Global;

        let output = `
        <h2 class="red pl-5">Global Statistics</h2>`;
     
         output += 
            `
        <ul class= "ulist1">
        <li>New Confirmed <span class="number2">:</span> <span class="number">${input.NewConfirmed}</span></li>
        
        <li class="bg-white text-dark num1">Total Confirmed <span class="number2">:</span> <span class="number">${input.TotalConfirmed}</span></li>
       
        <li>New Deaths <span class="number2">:</span>  <span class="number">${input.NewDeaths}</span></li>
        
        <li class="bg-white text-dark num1">Total Deaths <span class="number2">:</span>      <span class="number"> ${input.TotalDeaths}</span></li>
        
        <li>New Recovered <span class="number2">:</span>     <span class="number"> ${input.NewRecovered}</span></li>
        
        <li class="bg-white text-dark num1">Total Recovered <span class="number2">:</span>    <span class="number">${input.TotalRecovered}</span></li>
       
        </ul>
        
        `
        document.getElementById("output").innerHTML=output;
    })


    fetch('https://api.covid19api.com/live/country/nigeria')
    .then(function(res){

         return res.json()
         
         })
    .then(function(data){

        console.log(data);
        let output = `
        <h2 class=" red pl-5">Nigeria Statistics</h2>`;
        let input = data[0];
         output += 
            `
        <ul class= "ulist1">
        <li>Country :${input.Country}</span></li>
        
        <li class="bg-white text-dark num1">Confirmed :${input.Confirmed}</span></li>
        
        <li>Deaths :${input.Deaths}</span></li>
        
        <li class="bg-white text-dark num1">Recovered:${input.Recovered}</span></li>
        
        <li>Active: ${input.Active}</span></li>
       
        <li class="bg-white text-dark num1">Date: ${input.Date}</span></li>
        
        </ul>
        
        
        `
        document.getElementById("Nigeria").innerHTML=output;
    })

    fetch('https://api.covid19api.com/summary')
    .then(function(res){

         return res.json()
         
         })
    .then(function(data){

        console.log(data);
        let output = "";
     
         
         data.Countries.forEach(function(input){
            
     output +=  `
        <ul class="ulist2">
        <li class= "list1" onClick="getDetails(this)" Country="${input.Country}" NewConfirmed="${input.NewConfirmed}" TotalConfirmed="${input.TotalConfirmed}" NewDeaths="${input.NewDeaths}" TotalDeaths="${input.TotalDeaths}" NewRecovered="${input.NewRecovered}"TotalRecovered="${input.TotalRecovered}">${input.Country}<span class="number2">:</span>${input.TotalConfirmed}</li>
        </ul>
        `
        })
                
            
        document.getElementById("countries").innerHTML=output;
    })

   

    


})

function getDetails(Count){
    console.log(Count);
    let Country = Count.getAttribute("Country");
    let NewConfirmed = Count.getAttribute("NewConfirmed");
    let TotalConfirmed = Count.getAttribute("TotalConfirmed");
    let NewDeaths = Count.getAttribute("NewDeaths");
    let TotalDeaths = Count.getAttribute("TotalDeaths");
    let NewRecovered = Count.getAttribute("NewRecovered");
    let TotalRecovered = Count.getAttribute("TotalRecovered");
    

    let user = "";
    user += `<table class="table table-bordered table-dark">
    
    <tr class="header">
    <th scope="col">Country</th>
    <td scope="row">${Country}</td>
    </tr>
    
    <tr>
    <th scope="col">New Confirmed</th>
    <td>${NewConfirmed}</td>
    </tr>
    
    <tr>
    <th scope="col">Total Confirmed</th>
    <td>${TotalConfirmed}</td>
    </tr>

    <tr>
    <th scope="col">NewDeaths</th>
    <td>${NewDeaths}</td>
    </tr>

    <tr>
    <th scope="col">TotalDeaths</th>
    <td>${TotalDeaths}</td>
    </tr>

    <tr>
    <th scope="col">NewRecovered</th>
    <td>${NewRecovered}</td>
    </tr>

    <tr>
    <th scope="col">TotalRecovered</th>
    <td>${TotalRecovered}</td>
    </tr>
    </table>
    `
    document.getElementById("count-pro").innerHTML = user;
}
