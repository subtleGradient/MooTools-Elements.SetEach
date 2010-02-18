/*
---
script: Elements.setEach.js

provides: [Elements.setEach, Elements.setEachStyle]
description: Pass a callback function to set one or many values on every element in an Elements collection.

license: MIT-style license.
authors: Thomas Aylott, Ryan Florence

requires:
- core/1.2.4: $util
- core/1.2.4: Array
- core/1.2.4: Elements
...
*/

(function(){
	
	function defineSetEach(get, set){
		
		return function(property, setter){
			var setters = {};
			if ($type(property) == 'object') setters = property;
			else setters[property] = setter;
			
			Array.each(this, function(element, index, elements){
				$each(setters, function(modifiers, property){
					
					var value = element[get](property);
					
					$splat(modifiers).each(function(modifier){
						if (typeof modifier == 'function')
							value = modifier.call(element, value, index, elements);
						else value = modifier;
					});
					
					if ($defined(value)) element[set](property, value);
				});
			});
			return this;
		};
		
	};
	
	Elements.implement('setEach', defineSetEach('get','set'));
	Elements.implement('setEachStyle', defineSetEach('getStyle','setStyle'));
	
})();
