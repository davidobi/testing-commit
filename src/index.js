import React from "react"
import reactDom from "react-dom";

import './index.css';

function BookList(){
  return ( <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    
  </section>
  );
}
const Book =() =>{
return <article className='book'>
<Images />
<Author />
<Title />

</article >
}
const Author = () => <h4>Dan Green</h4>
const Title = () => <h1>How to Draw 101 Animals</h1>
const Images = () =>(
  <img src='https://images-na.ssl-images-amazon.com/images/I/714al5FoFPL._AC_UL200_SR200,200_.jpg' alt='' />
)
reactDom.render(<BookList />, document.getElementById('root'))
 