// get input element
let filterInput = document.getElementById('filterInput');

// add event listeners
filterInput.addEventListener('keyup', filterComics);

function filterComics() {
    // get input value
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // get comics ul
    let ul = document.getElementById('comics');
    // get li from ul
    let li = ul.querySelectorAll('li.collection-item');

    //loop through collection-item li
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        // if match
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}