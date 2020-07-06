let myLibrary = [
  { //default data
    author: 'J.R.R. Tolkien',
    title: 'Lord of the Rings',
    pages: 350,
    isRead: true
  }
];

function Book (author, title, pages, isRead){
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