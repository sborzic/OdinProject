let myLibrary = [
  { //default data
    image: 'https://i.pinimg.com/originals/1c/c4/b6/1cc4b62b78d0f83b7f8b361771dd9cc2.jpg',
    author: 'J.R.R. Tolkien',
    title: 'Lord of the Rings',
    pages: 350,
    isRead: true
  }
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
}

document.getElementById('add-book').addEventListener('click', addBook);

function render(){

  //loop throught array


  //create div for each book

  //add style

  //add data

  //add style for data

  //add buttons

  //style buttons
  
}