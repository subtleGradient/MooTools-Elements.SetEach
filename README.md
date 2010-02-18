Elements.SetEach
================
Pass a callback function to set one or many values on every element in an Elements collection.

Notice
------
Only works with an `Elements` collection, usually gotten by using `$$`.

This will not work with individual elements. e.g. `$('myid').setEach()` will throw an error. Use `$$('#myid').setEach()` instead.

How to Use
-----------

    #JS
    function replaceFooWithBar(string){
        return String(string).replace(/\bfoo\b/g,'bar');
    };


    $$('a').setEach('href', function(currentHref, i){
        return currentHref + '?foo=bar';
    });


    $$('a').setEach('html',[
        "New foo HTML!",
        function(html){ return html + ' appended moar foo!'; },
        replaceFooWithBar,
        function(html,i){ return html + ' Index is ' + i; }
		
    ]);


    $$('a').setEachStyle({
        'color': function(currentColor, i) {
            i = i.toString(16);
            return ['#', i, i, i].join('');
        },
        'background-color': function(currentColor, i) {
            i = (15 - i).toString(16);
            return['#', i, i, i].join('');
        }
    });
