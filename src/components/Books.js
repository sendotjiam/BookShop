import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Books() {
	const url =
		'https://u73olh7vwg.execute-api.ap-northeast-2.amazonaws.com/staging/book?nim=2301870092&nama=Sendo';
	const [books, setBooks] = useState(null);
	let booksContent = [];

	useEffect(() => {
		axios.get(url).then((response) => {
			setBooks(response.data.products);
		});
	}, [url]);

	if (books) {
		books.map((book) => { 
            booksContent.push(
                <div  key={book.id} className='bookContainer'>
                    <div className='bookImage'>
                        <img src={book.img} alt={book.img} />
                    </div>
                    <div className='bookContent' >
                        <div className='bookName'>{book.name}</div>
                        <label className='bookCategory'>{book.category} | {book.type}</label>
                        <div className='bookDescription'>{book.description}</div>
                        <div className='bookAuthor'>by {book.author}</div>
                        <a href="https://www.google.com" className='buyBtn'>
                            ${ book.price }
                        </a>
                    </div>
                </div>
            )
        });
	}

	return <div>{booksContent}</div>;
}
