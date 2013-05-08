<h1>js-modalalert</h1>
<h2>Customizable alternative to the standard JavaScript alert method</h2>
<h3>Sample parameters in method call</h3>
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
<h3>Advantages</h3>
<ul>
<li>Creates custom alert based on parameter inputs.</li>
<li>Allows for custom title and body.</li>
<li>Allows addition of blank textfields with predetermined width.</li>
</ul>
<h3>Disadvantages</h3>
<ul>
<li>Does not function on mobile browsers (iOS confirmed, Android unconfirmed)</li>
<li>Naming of elements could lead to confusion later on in development</li>
</ul>
<h3>Planned Implementation</h3>
<ul>
<li>Support for more form elements such as buttons and menus.</li>
<li>Pass an array to the class for creating custom form alerts with ease.</li>
<li>Support for color change.</li>
</ul>
