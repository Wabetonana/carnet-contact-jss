var selectedRow = null;
function onFormSubmit(){
var FormData = readFormData();
if(selectedRow == null){
    insertContact(FormData);
    resetForm();
}
else
updateRecord(FormData);
resetForm();
}

function readFormData(){
    var FormData = {};
    FormData["nom"] = document.getElementById("nom").value;
    FormData["prenom"] = document.getElementById("prenom").value;
    FormData["postnom"] = document.getElementById("postnom").value;
    FormData["telephone"] = document.getElementById("telephone").value;
    FormData["email"] = document.getElementById("email").value;
    FormData["ville"] = document.getElementById("ville").value;
    FormData["pays"] = document.getElementById("pays").value;
    return FormData;
}

function insertContact(data){
    var table = document.getElementById("contactlist").getElementsByTagName(`tbody`)[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nom;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.prenom;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.postnom;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telephone;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.ville;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.pays;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a href="#" onClick = "onEdit(this)">Edit</a>
                            <a href="#" onClick = "onDelete(this)">Delete</a>`;

}

function resetForm(){
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("postnom").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("ville").value = "";
    document.getElementById("pays").value = "";
    var selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nom").value = selectedRow.cells[0].innerHTML;
    document.getElementById("prenom").value = selectedRow.cells[1].innerHTML;
    document.getElementById("postnom").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telephone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("ville").value = selectedRow.cells[5].innerHTML;
    document.getElementById("pays").value = selectedRow.cells[6].innerHTML;
    var ShowFrmes = document.getElementById("form1");
    ShowFrmes.style.display = "block";
}

function updateRecord(FormData){
    selectedRow.cells[0].innerHTML = FormData.nom;
    selectedRow.cells[1].innerHTML = FormData.prenom;
    selectedRow.cells[2].innerHTML = FormData.postnom;
    selectedRow.cells[3].innerHTML = FormData.telephone;
    selectedRow.cells[4].innerHTML = FormData.email;
    selectedRow.cells[5].innerHTML = FormData.ville;
    selectedRow.cells[6].innerHTML = FormData.pays;
}

function onDelete(td){
    if(confirm("Sure de supprimer ")){
        row = td.parentElement.parentElement;
    document.getElementById("contactlist").deleteRow(row.rowIndex);
    resetForm();
    }
}

window.onload = function () {
    document.getElementById("form1").style.display = "none";    
}

function ShowFrm(){
    var ShowFrme = document.getElementById("form1");
    if (ShowFrme.style.display == "none") {
        ShowFrme.style.display = "block";
        btn.style.display = "none";
    } else {
        ShowFrme.style.display = "none";    
    }
}

function hiedefrm(){
    var ShowFrme = document.getElementById("form1");
    if (ShowFrme.style.display == "block") {
        ShowFrme.style.display = "none";
        btn.style.display = "none";
        btn.style.display = "block";
    }
}