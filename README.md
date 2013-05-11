<h1>js-modalalert</h1>
<h2>Tutorial</h2>
<h3>Sample Parameters in Method Call</h3>
<code>
onclick="showAlert('Alert Title', 'This is the body of the alert.', 'Close Button', 1)"
</code>
<ul>
<li><em>'Alert Title'</em> fills the alert's title slot.</li>
<li><em>'This is the body of the alert.'</em> fills the body.</li>
<li><em>'Close Button'</em> gives a title to the button responsible for dismissing the alert.</li>
<li><em>1</em> tells the script to look for an array dictating the form fields.<br />
A value of <em>0</em> would tell the method that the alert is strictly presentation.</li>
</ul>
<h3>Returning Information</h3>
The method <em>getAlertContents()</em> iterates though the information input by the user and stores it in an array. The array <em>alertInfo</em> is a global variable for easy access for sending to a server or for further processing. The elements are stored in the array in the same order that they appear on the modal alert window.
<pre>
<code>
function getAlertContents(){
    for(j = 0; j &lt; buttonValue.length; j++){
        var el = document.getElementById('alertForm'+j).value;
        alertInfo.push(el);
    }
}
</code>
</pre>
<h2>Advantages</h2>
<ul>
<li>Creates custom alert based on parameter inputs.</li>
<li>Allows for custom title and body.</li>
<li>Allows addition of blank textfields with predetermined width.</li>
</ul>
<h2>Disadvantages</h2>
<ul>
<li>Does not function on mobile browsers (iOS confirmed, Android unconfirmed)</li>
<li>Naming of elements could lead to confusion later on in development</li>
</ul>
<h2>Planned Implementation</h2>
<ul>
<li>Support for more form elements such as buttons and menus.</li>
<li>Pass an array to the class for creating custom form alerts with ease.</li>
<li>Support for color change.</li>
<li>AJAX Support</li>
</ul>
