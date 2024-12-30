const data= [
    {id:1 , title:'The Minna Bag:Black & Gold' , price:'$300' , image:'../images/bag1.webp'},
    {id:2 , title:'The Minna Bag:Beige & Gold' , price:'$350' , image:'../images/bag2.webp'},
    {id:3 , title:'The Minna Bag:Brown & Gold' , price:'$350' , image:'../images/bag3.jpg'},
    {id:4 , title:'The Minna Bag:Black & Silver' , price:'$300' , image:'../images/silver.webp'},
]

const id = JSON.parse(localStorage.getItem('id'))
const [item] =data.filter(item => item.id === +id);
console.log(item);
const image = document.getElementById('image');
image.setAttribute('src', item.image);
const title = document.getElementById('title');
title.innerText=item.title;
const price = document.getElementById('price');
price.innerText=item.price;