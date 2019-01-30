//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
var navElem = document.getElementsByClassName('navi');
//console.log(navElem);

for(var i=0; i<navElem.length; i++){
    navElem[i].addEventListener('click', showHideNavMenuItem);
}

function showHideNavMenuItem(){
    var childShowHide = this.querySelectorAll('.inner')[0];
    if(childShowHide.style.display === 'block'){
        childShowHide.style.display = 'none';
    }else{
        childShowHide.style.display = 'block';    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var secItem = document.getElementsByClassName('name');
//console.log(showSecItem);

for(var i=0; i<secItem.length; i++){
    secItem[i].addEventListener('click', shSecItem);
}

function shSecItem(){
    var childSecItem = this.querySelectorAll('.menu')[0];
    if(childSecItem.style.display === 'block'){
        childSecItem.style.display = 'none';
    }else{
        childSecItem.style.display = 'block'
    }
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



