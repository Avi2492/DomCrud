const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');
const form = document.getElementById('book-form');
let selectedRow = null; 

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  if (title.value === '' || author.value === '' || year.value === '') {
    alert('Please fill in all fields');
    return;
  }

  if (selectedRow === null) {
    
    const row = document.createElement('div');
    row.classList.add('table-section');
    row.innerHTML = `
      <div>${title.value}</div>
      <div>${author.value}</div>
      <div>${year.value}</div>
      <button class="edit-btn"><i class="ri-edit-box-line"></i></button>
      <button class="delete-btn"><i class="ri-delete-bin-line"></i></button>
    `;

    
    bookList.appendChild(row);
  } else {
    
    selectedRow.children[0].innerText = title.value;
    selectedRow.children[1].innerText = author.value;
    selectedRow.children[2].innerText = year.value;
    selectedRow = null; 
  }

 
  title.value = '';
  author.value = '';
  year.value = '';
});


bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit-btn')) {
    
    selectedRow = e.target.parentElement;
    title.value = selectedRow.children[0].innerText;
    author.value = selectedRow.children[1].innerText;
    year.value = selectedRow.children[2].innerText;
  } else if (e.target.classList.contains('delete-btn')) {
    
    const row = e.target.parentElement;
    bookList.removeChild(row);
  }
});
