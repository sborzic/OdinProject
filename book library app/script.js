let myLibrary = [];

function Book (author, title, pages, isRead, image = 'https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'){
  this.image = image
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.changeStatus = () => this.isRead = this.isRead ? false : true
    // if(!isRead){
    //   this.isRead = true;
    // }else{
    //   this.isRead = false;
    // }
}

document.getElementById('add-book').addEventListener('click', addBook);

function addBook(){
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = Number(document.getElementById('pages').value);
  let isRead = document.getElementById('read-status').checked;
  
  let book = new Book(author, title, pages, isRead);
  myLibrary.push(book);

  clearBooks();
  render();
}


function render(){
  myLibrary.forEach((book, index) => {
    //create DOM elements for book data
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
    bookCard.append(deleteButton, imageContainer, bookTitle, bookAuthor, bookPages, bookStatus);
    imageContainer.appendChild(bookImage);

    //add data
    bookImage.src = book.image;
    bookAuthor.innerHTML = `Written by: ${book.author}`;
    bookTitle.innerHTML = book.title;
    bookPages.innerHTML = `${book.pages} pages`;
    deleteButton.innerHTML = 'x';
    if(book.isRead){
      bookStatus.innerHTML = 'You\'ve read it';
      //styled here for initial color
      bookStatus.style.background = '#5fa061'
    } else{
      bookStatus.innerHTML = 'Not read';
      //styled here for initial color
      bookStatus.style.background = '#a05f7e'
    }

    //add style
    bookCard.classList.add('book');
    imageContainer.classList.add('image-container')
    bookImage.classList.add('book-img');
    deleteButton.classList.add('delete-button');  
    bookStatus.classList.add('read-status');

    //add listener for delete
    deleteButton.addEventListener('click', ()=>{
      let index = Number(event.target.parentNode.getAttribute('data-index'));
      myLibrary.splice(index,1);
      clearBooks();
      render();
    })

    //add listener for status change
    bookStatus.addEventListener('click', ()=>{
      let index = Number(event.target.parentNode.getAttribute('data-index'));
      myLibrary[index].changeStatus();
      clearBooks();
      render();
    })
  });
  
  // let readStatus = Array.from(document.getElementsByClassName('read-status'));
  //   readStatus.forEach((element)=>{
  //     element.addEventListener('click', ()=>{
  //       let index = Number(event.target.parentNode.getAttribute('data-index'));
  //       let status = myLibrary[index].isRead;
  //       if(status){
  //         myLibrary[index].changeStatus();
  //         // myLibrary[index].isRead = false;
  //         element.style.background = '#a05f7e';
  //         element.innerHTML = 'Not read';
  //       } else{
  //         myLibrary[index].changeStatus();
  //         // myLibrary[index].isRead = true;
  //         element.style.background = '#5fa061';
  //         element.innerHTML = 'You\'ve read it';
  //       }
  //     });
  //   });
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

//show form
  let newBookButton = document.getElementById('show-form');
  newBookButton.addEventListener('click', ()=>{

    let form = document.getElementById('form');
    if(form.style.display === 'flex' ){
      form.style.display = 'none'
    } else{
      form.style.display = 'flex'
    }
  });
