let dropdownMenu = document.getElementsByClassName('sub-nav-item-dropdown');
for (let i = 0; i < dropdownMenu.length; i++) {
  const element = dropdownMenu[i];
  element.addEventListener('mouseover', function(e) {
    element.classList.add('active_nav');
  });

  element.addEventListener('mouseout', function(e) {
    element.classList.remove('active_nav');
  });
}

const searchicon = document.querySelector('.search-icon');
const cancelicon = document.querySelector('.cancel-icon');
const searchForm = document.querySelector('.form-wrapper');

searchicon.onclick = () => {
  searchForm.classList.add('active');
  searchicon.classList.add('hide');
  cancelicon.classList.add('show');
}

cancelicon.onclick = () => {
  searchForm.classList.remove('active');
  searchicon.classList.remove('hide');
  cancelicon.classList.remove('show');
}