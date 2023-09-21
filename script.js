const searchBar = document.querySelector('.searchbar');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

function searchClick() {
    search.classList.toggle('active');
    if (search.classList.contains('active')) {
        input.placeholder = 'Meklēt...';
    } else {
        search.classList.remove('active');
        input.blur();
        input.value = '';
    }
}

btn.addEventListener('click', searchClick)


