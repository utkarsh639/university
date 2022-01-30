var l;
var table=document.querySelector(".table");
var input = document.getElementById("input");
var search= document.querySelector(".search");
table.style.display="none";
function fetching(a){
    fetch(`http://universities.hipolabs.com/search?country=${a}`)
    .then(Response=>{ return Response.json()
    })
    .then(data=>{
        console.log(data);
       console.log(data.length);
        l= data.length;
        console.log(data[0].name);
        table.innerHTML="";
        var tr1 = document.createElement("tr");
        var th1 = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        var th4 = document.createElement("th");
        var th5 = document.createElement("th");
        th1.innerText="S/No";
        th2.innerText="College Name";
        th3.innerText="Country";
        th4.innerText="Domain";
        th5.innerText="Web Page";
        appendind(tr1,th1,th2,th3,th4,th5);
        table.append(tr1);
        
        for (var i=0; i<l;i++){
          var tr=  document.createElement("tr");
          var td1= document.createElement("td");
          var td2= document.createElement("td");
          var td3= document.createElement("td");
          var td4= document.createElement("td");
          var td5= document.createElement("td");
          td1.innerText=i+1;
          td2.innerText=data[i].name;
          td3.innerText=data[i].country;
          td4.innerText=data[i].domains[0];
          td5.innerText=data[i].web_pages[0];
          appendind(tr,td1,td2,td3,td4,td5);
          table.appendChild(tr);
          table.style.display="table";
          
        }
    })

}

function appendind(a,b,c,d,e,f){
    a.appendChild(b);
    a.appendChild(c);
    a.appendChild(d);
    a.appendChild(e);
    a.appendChild(f);
}
function call(){
     fetching(input.value);
}