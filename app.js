function addcomment()
{
    console.log(this);
    var comment=
    document.getElementById("comment").value;
    var message = "<h3>"+comment + "</h2>"+"<br>";
    

    document
    .getElementById("Commen")
    .innerHTML +=message;
    
} 

//document.querySelector("button")
//.addEventListener("click",addcomment);
