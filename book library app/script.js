let myLibrary = [
];

function Book (author, title, pages, isRead, image = 'https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'){
  this.image = image
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBook(){
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = Number(document.getElementById('pages').value);
  let isRead;
  if(document.getElementById('read-status').checked){
      isRead = true;
    } else{
      isRead = false;
    }

  let book = new Book(author, title, pages, isRead);
  myLibrary.push(book);

  clearBooks();
  render();
}

document.getElementById('add-book').addEventListener('click', addBook);

function render(){

  //loop through array
  myLibrary.forEach((book, index) => {

    //create elements for book data
    let bookCard = document.createElement('div');
    let deleteButton = document.createElement('div');
    let imageContainer = document.createElement('div');
    let bookImage = document.createElement('img');
    let bookAuthor = document.createElement('h4');
    let bookTitle = document.createElement('h2');
    let bookPages = document.createElement('h5');
    let bookStatus = document.createElement('h5');
    
    //add elements to DOM
    let bookList = document.getElementById('book-list');

    bookList.appendChild(bookCard);
    bookCard.setAttribute('data-index', index);
    bookCard.append(deleteButton, imageContainer, bookAuthor, bookTitle, bookPages, bookStatus);
    imageContainer.appendChild(bookImage);

    //add data
    bookImage.src = book.image;
    bookAuthor.innerHTML = book.author;
    bookTitle.innerHTML = book.title;
    bookPages.innerHTML = book.pages;
    deleteButton.innerHTML = 'x';
    if(book.isRead){
      bookStatus.innerHTML = 'You\'ve read it'
    } else{
      bookStatus.innerHTML = 'Not read'
    }

    //add style
    bookCard.classList.add('book');
    imageContainer.classList.add('image-container')
    bookImage.classList.add('book-img');
    deleteButton.classList.add('delete-button');


    
  })
  
  let deleteButtons = Array.from(document.querySelectorAll('.delete-button'));
  deleteButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
      let index = Number(event.target.parentNode.getAttribute('data-index'));
      console.log(index);
      myLibrary.splice(index,1);
      clearBooks();
      render();
    })
  })
  //add button listeners



  //style buttons
  
}


//clear DOM for rendering with new book
function clearBooks(){
  let list = document.getElementById('book-list');
  let bookCard = list.lastElementChild;
  while(bookCard){
    list.removeChild(bookCard);
    bookCard = list.lastElementChild;
  }
}

