import axios from 'axios'

// console.log("This is axios header", axios);
const headerContainer = document.querySelector(".header-container");

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.

  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!

  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //

  //  <div class="header">            div-class1
  //    <span class="date">{ date }</span> => span-class2
  //    <h1>{ title }</h1>             h1 (title)
  //    <span class="temp">{ temp }   </span> span-class3 
  //  </div>
  //

  

//function

  let headerDiv = document.createElement('div');
  let span = document.createElement('span');
  let h1 = document.createElement('h1');

  //header
  headerDiv.classList.add('header');

  //date
  let span1 = span;
  headerDiv.appendChild(span1);
  span1.classList.add('date');
  span1.textContent = 'MARCH 13, 2020';

  //header Title
  headerDiv.appendChild(h1);
  h1.textContent = "Lambda Times";

  //temp
  let span2 = span;
  headerDiv.appendChild(span2);
  span2.classList.add("temp");
  span2.textContent = "58°";
// return
  return headerDiv;
};

let myHeader = Header();

console.log("this is my header", myHeader);

headerContainer.appendChild(myHeader);


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.

  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
