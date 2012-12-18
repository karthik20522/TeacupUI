TeacupUI
========

jQuery based simple representation of percentage data as a layer of ingredients in a tea cup. Yes, a teacup!! Read more at http://kufli.blogspot.com/2012/12/teacup-ui-fun-simple-to-use-jquery.html

Tested on: IE9, Firefox (17.0.1), Chrome (23..) & Safari (5.1.7)

How to:

	 <div id="Latte">
		<a value="20" href="http://kufli.blogspot.com">Milk Foam</a>
		<a value="50" href="http://github.com/karthik20522">Steamed Milk</a>
		<a value="30" href="https://github.com/karthik20522/TeacupUI">Expresso</a>
	</div>
	
	 $("#Latte").teacup();
	 

Custom colors:

	<div id="White">
		<a value="50" href="http://kufli.blogspot.com">Steamed Milk</a>
		<a value="30" href="http://github.com/karthik20522">Expresso</a>
	</div>
	
	 $("#White").teacup({ colors: ["#B9BC8D", "#E2640F"] });
	 

Read more at http://kufli.blogspot.com/2012/12/teacup-ui-fun-simple-to-use-jquery.html


