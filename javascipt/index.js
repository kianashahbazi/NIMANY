
(function main (){
    const render =(data) => {
        const productContainer=document.getElementById('products');
        console.log(productContainer);
        data.map(item =>{
            const col=document.createElement('div');
            col.classList.add('col-lg-3' , 'mt-3');
            col.classList.add('col-sm-6' , 'mt-3');

            col.innerHTML=`
            <div class="card border border-0" style="width: 15rem;">
                <img src=${item.image} class="img-fluid">
                <a href="../pages/minnabag.html" class="item text-black p-3" style="text-decoration:none;" data-id=${item.id}>${item.title}</a>
                <h5 class="p-3">${item.price}</h5>
            </div>
            `
            productContainer.appendChild(col);
        })
        const buttons = document.querySelectorAll(' .item');
        buttons.forEach(item =>{
            item.addEventListener('click', () =>{
                const id=item.getAttribute('data-id');
                localStorage.setItem('id' , JSON.stringify(id))
                navigation.navigate('../pages/product.html')
            })
        })
    }
    const data= [
        {id:1 , title:'The Minna Bag:Black & Gold' , price:'$300' , image:'../images/bag1.webp'},
        {id:2 , title:'The Minna Bag:Beige & Gold' , price:'$350' , image:'../images/bag2.webp'},
        {id:3 , title:'The Minna Bag:Brown & Gold' , price:'$350' , image:'../images/bag3.jpg'},
        {id:4 , title:'The Minna Bag:Black & Silver' , price:'$300' , image:'../images/silver.webp'},
    ]
    render(data);
})()