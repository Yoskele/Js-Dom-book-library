// const wmf = document.querySelector('#book-list li:nth-child(2)');
// console.log(wmf);
//
//let books = document.querySelector('#book-list li .name');
//console.log(books);
//
//let books = document.querySelectorAll('#book-list li .name');
// console.log(books);
//
//
// Array.from(books).forEach(function (book){
//   console.log(book);
// });

// += is append.
// Array.from(books).forEach(function (book){
//   book.textContent += '(book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = `<h2> Books and more Books </h2>`;

// += is like an appaned.
// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = `<h2> Books and more Books </h2>`;
// bookList.innerHTML += '<p> This is how you add HTML </p>';

/* --------------------------Below is New ----------------------------------- */
// const banner = document.querySelector('#page-banner');
// console.log('#page-banner node Type is', banner.nodeType) //  Returns #page-banner node type is 1 Number one stands for What it is. WW3 School says 1 is Element
// console.log('#page-banner node Name is', banner.nodeName); // Tells us the elements Name. Div.
// console.log('#page-banner has child nodes', banner.hasChildNodes()); // To see if has Children. Retrun True or False . #page-banner has child nodes true

// Clone a node
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);


// ----------------------------------  Traversing the DOM-------------------------

// const bookList = document.querySelector('#book-list');
// // // console.log('The ParentNode is ', bookList.parentNode);
// // // console.log('The Parent Element is ', bookList.parentElement.parentElement); // Goes up to the parent twice.
// // console.log(bookList.childNodes);


// console.log('book-list next sibling is:', bookList.nextSibling);
// console.log('book-list next Element sibling is:', bookList.nextElementSibling);


// console.log('book-list previous sibling is:', bookList.previousSibling);
// console.log('book-list previous Element sibling is:', bookList.previousElementSibling);


// bookList.previousElementSibling.querySelector('p').innerHTML += `<br /> Too Cool For Every One Else`





// ----------------------------- DOM EVENTS ------------------------------------------
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click',function(e){
// 	e.preventDefault();
// 	console.log('You cant go to Google')
// })



// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
// 	btn.addEventListener('click',function(e){
		
// 		const li = e.target.parentElement;
// 		li.parentNode.removeChild(li);

// 	});
// });



// ----------------------------- DOM EVENTS Bubbling ------------------------------------------

// Delete Books
const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
	if(e.target.className === 'delete'){
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

// ----------------------------- DOM  Interacting With Forms ------------------------------------------
// Add Book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
	e.preventDefault(); // If we dont have preventDefault on the page would refresh when the user submit the form.
	const value = addForm.querySelector('input[type="text"]').value; // Reciving the value from the Input.


	// Create Elements
	const li = document.createElement('li');
	const bookName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	// add Content
	deleteBtn.textContent = 'Delete';
	bookName.textContent = value; // Comes from above.

	// Add Classes
	bookName.classList.add('name');
	deleteBtn.classList.add('delete');

	// Append to Dom appending first the book name and the delete button to the li. 
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	// appendning the li now to the list.
	list.appendChild(li);

});


// Hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
	if(hideBox.checked){
		list.style.display = 'none';
	}else{
		list.style.display = 'initial';
	}
});

//Custom Search Filter 
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
	const term = e.target.value.toLowerCase();

	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(function(book){
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			book.style.display = 'block';
		}else{
			book.style.display = 'none';
		}
	})
});