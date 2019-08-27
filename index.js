console.log("hello!!");

function createTable(){
    var x= document.createElement("table");
    x.setAttribute("id","myTable");
    x.setAttribute("cellpadding","3");
    document.body.appendChild(x);

    var rh = x.insertRow(0);
    var h1 = rh.insertCell(0);
    var h2 = rh.insertCell(1);
    var h3 = rh.insertCell(2);
    h1.innerHTML="Item Name";
    h2.innerHTML="Quantity";
    h3.innerHTML="Action";

    var v =document.getElementById("btn");
    v.setAttribute("onclick","Modal()");   
    v.innerHTML="click to add data";
}

function Modal(){
    var v =document.getElementById("btn");
    v.setAttribute("data-toggle","modal");
    v.setAttribute("data-target","#examplemodal");

    var f = document.createElement("form");
    f.setAttribute("id","myForm");
    f.setAttribute("name","myForm")
    f.setAttribute("onsubmit","show()");
    document.getElementById("modalBody").appendChild(f);

    var p1 = document.createElement("placeholder");
    p1.innerHTML="Item Name : ";
    f.appendChild(p1);

    var input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","input1");
    f.appendChild(input1);

    var br = document.createElement("br");
    f.appendChild(br);

    var p2 = document.createElement("placeholder");
    p2.innerHTML="Quantity : ";
    f.appendChild(p2);

    var input2 = document.createElement("input");
    input2.setAttribute("type","number");
    input2.setAttribute("id","input2");
    f.appendChild(input2);
}

function show(){

    console.log("submitted!");
    var iname = document.getElementById("input1").value;
    var qty = document.getElementById("input2").value;  
    var x= document.getElementById("myTable");
    var r= x.insertRow(1);
    r.setAttribute("id","row");
    var c1=r.insertCell(0);
    c1.setAttribute("id","c1");
    var c2= r.insertCell(1);
    var c3= r.insertCell(2);

    c1.innerHTML=iname;
    c2.innerHTML=qty;

    var a = document.createElement("input");
    a.setAttribute("type","button");
    a.setAttribute("value","Delete");
    a.setAttribute("onclick","deleteRow(this)");
    c3.appendChild(a);

    var b = document.createElement("input");
    b.setAttribute("type","button");
    b.setAttribute("id","update");
    b.setAttribute("value","Update");
    b.setAttribute("onclick","update(this)");
    b.setAttribute("data-toggle","modal");
    b.setAttribute("data-target","#examplemodal");
    c3.appendChild(b);

    var x= document.getElementById("modalBody");
    x.innerHTML="";
}

function deleteRow(r){
    console.log("deleted!!");
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

function update(r){

    var myNode = r.parentNode.parentNode.rowIndex;

    //var myNodeList = document.querySelectorAll("#row");

    console.log("Updated!!" +myNode);

    var f = document.createElement("form");
    f.setAttribute("id","myForm");
    f.setAttribute("name","myForm")
    f.setAttribute("onsubmit","show()");
    document.getElementById("modalBody").appendChild(f);

    var p1 = document.createElement("placeholder");
    p1.innerHTML="Item Name : ";
    f.appendChild(p1);

    var input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","input1");
    f.appendChild(input1);

    var br = document.createElement("br");
    f.appendChild(br);

    var p2 = document.createElement("placeholder");
    p2.innerHTML="Quantity : ";
    f.appendChild(p2);

    var input2 = document.createElement("input");
    input2.setAttribute("type","number");
    input2.setAttribute("id","input2");
    f.appendChild(input2);

    var s = document.getElementById("submit-btn");
    s.innerHTML = "Update";
    s.setAttribute("onclick","");
    s.addEventListener("click",function(){

        var iname = document.getElementById("input1").value;

        var columnNode = document.querySelectorAll("#c1");
        for(var i=0;i<columnNode.length;i++){
            columnNode[1].innerHTML = iname;
        }
        //var showdata = document.getElementById("input1").getAttribute("value");
        //alert("show"+ iname);
    /*console.log("showUpdated!");
    
    var qty = document.getElementById("input2").value;  
    var x= document.getElementById("myTable");
    var r= x.insertRow(myNode);
    r.setAttribute("id","row");
    var c1=r.insertCell(0);
    var c2= r.insertCell(1);
    var c3= r.insertCell(2);

    c1.innerHTML=iname;
    c2.innerHTML=qty;

    var a = document.createElement("input");
    a.setAttribute("type","button");
    a.setAttribute("value","Delete");
    a.setAttribute("onclick","deleteRow(this)");
    c3.appendChild(a);

    var b = document.createElement("input");
    b.setAttribute("type","button");
    b.setAttribute("id","update");
    b.setAttribute("value","Update");
    b.setAttribute("onclick","update(this)");
    b.setAttribute("data-toggle","modal");
    b.setAttribute("data-target","#examplemodal");
    c3.appendChild(b);

    var x= document.getElementById("modalBody");
    x.innerHTML="";

    console.log("myNode : "+ myNode);
    document.getElementById("myTable").deleteRow(myNode+1);*/
    updateToSubmit();
    });
}

function updateToSubmit(){
    var s = document.getElementById("submit-btn");
    s.innerHTML = "Submit";
    s.setAttribute("onclick","show()");
}

function remove(){
    var x= document.getElementById("modalBody");
    x.innerHTML="";
}