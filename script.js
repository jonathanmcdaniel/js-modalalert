/*
 * Created by Jonathan McDaniel July 2013
 * Last Edited: July 29, 2013
 * http://github.com/jonathanmcdaniel
 */

var buttonValue = new Array();
var alertInfo = new Array();

//This function creates the alertview and shows it on screen
//The parameters to the function determine the number of elements in the view
function showAlert(title, body, button, form){
    
    var alertTitle = document.getElementById('alerttitle');
    var alertBody = document.getElementById('alertbody');
    var alertButton = document.getElementById('closebutton');
    
    //This sets the placeholder text for each element
        buttonValue[0] = 'First Name';
        buttonValue[1] = 'Last Name';
        buttonValue[2] = 'user@domain.com'
    
    alertTitle.innerHTML = title;
    
    //This bit determines the purpose for the alertview
    //If the developer wants the alert to be strictly presentation 0 is set for the form parameter and only the body and title are shown
    //If the developer wants form elements, the form parameter recieves a 1
    //The form elements are then created to match the length of the placeholder array and are presented in that order
    if(form == 0){
        alertBody.innerHTML = body;
    }else{
        var formString = '';
        for(i = 0; i < buttonValue.length; i++){
            formString = formString + '<input type="text" size="30" id="alertForm' +i +'" placeholder="' +buttonValue[i] +'"><br />';
        }
        alertBody.innerHTML = formString + body;
    }
    alertButton.innerHTML = button;
    
    //Finally, the alertview is presented to the user
    document.getElementById('acontainer').style.visibility = 'visible';
}

//This function hides the alertview
//This would be an ideal location to call the getAlertContents() method
function closeAlert(){
    document.getElementById('acontainer').style.visibility = 'hidden';
}


//This function retrieves the data stored in the alert elements
//and stores them in the alertInfo array
function getAlertContents(){
    for(j = 0; j < buttonValue.length; j++){
        var el = document.getElementById('alertForm'+j).value;
        alertInfo.push(el);
    }
}