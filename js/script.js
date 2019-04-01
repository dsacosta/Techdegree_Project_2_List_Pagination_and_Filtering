/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// const ul = document.getElementsByName('ul')

const studentList = document.querySelector('.student-list');
const page = document.querySelector('.page');
let newList = studentList.querySelectorAll('li.student-item');
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const showPage = (list, page) => {
   const maxPage = (page * 10) - 1;
   const minPage = (page * 10) - 10;
   for (let i = 0; i < list.length; i ++) {
      if( i >= minPage && i <= maxPage) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }  
   }
};

   showPage(newList, 6);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) =>{
   //Determine how many pages are needed for the list by dividing the
      //total number of of list items by the max number of items per page
   const displayMax = list.lenght / 10;
   //Create a div, giv it the "pagination" class, and append it to the .page
      //div
   const paginationDiv = document.querySelector ('div.page');
   paginationDiv.classList.add("pagination");
   // Add a ul to the pagination div to strore the pagination links
   const li = document.createElement('li');
   paginationDiv.appendChild(li);
   // For every page, add li and a tags with the page number number text
   for (let i = 0; i < displayMax.length; i++) {
      document.getElementById('div.page').innerHTML += li
   }



}


/*** Remember to delete the comments that came with this file, and replace them with your own code comments.
*****/