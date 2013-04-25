function showAlert(){
    var alertTitle = document.getElementById('alerttitle');
    var alertBody = document.getElementById('alertbody');
    alertTitle.innerHTML = '';
    alertBody.innerHTML = '';
    document.getElementById('acontainer').style.visibility = 'visible';
}
function hideAlert(){
    document.getElementById('acontainer').style.visibility = 'hidden';
}