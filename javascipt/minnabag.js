const cart=[];

const minnabag=[
    {id:1 ,img:'../images/icons8-checked-10.png', text:'Free US shipping applied.'},
]

minnabag.map(items => {
    const col = document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML = `
            <div class="d-flex justify-content-start align-items-start" style="margin-left:3%;">
            <img src="${items.img}" class="img-top img-fluid d-inline" style="width:20px;height:20px;">
            <p style="font-weight:bold;">${items.text}</p>
            </div>
            <hr>
            `
    
    const row = document.getElementById('row2');
    row.appendChild(col);
})

const minnabag1=[
    {id:2,img:'../images/bag1.webp',text1:'The Minna Bag:Black & Gold',text2:'Size: O/S',text3:'Color: Black Leather',text4:'Material: Fine Black Cow Hide Leather / Polished Gold Buckle'},
]

minnabag1.map(items=>{
    const col=document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML=`
    <div class="card border border-0">
        <div class="row g-0">
        <div class="col-lg-4">
        <img src=${items.img} class="img-fluid">
    </div>
    <div class="col-lg-8 d-flex justify-content-end align-items-center">
        <div class="card-body">
            <a href="#" class="card-title" style="font-weight:bold;color:black;text-decoration:none;">${items.text1}</a>
            <p class="card-text" style="font-size:13px;">${items.text2}</p>
            <p class="card-text" style="font-size:13px;">${items.text3}</p>
            <p class="card-text" style="font-size:13px;">${items.text4}</p>
            <h5 class="d-flex justify-content-end align-items-center">USD 350.00</h5>
        </div>
    </div>
    `
    const row=document.getElementById('row2');
    row.appendChild(col);
})

const minnabag4=[
    {id:1,img:'../images/59.webp',text9:'Pirooz Bracelet Gold', text10:'USD 175.00',btn2:'ADD'},
]

minnabag4.map(items=>{
    const col=document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML=`
    <p class ="d-flex justify-content-start align-items-center" style="font-weight:bold;margin-left:3%;">YOU MAY ALSO LIKE...</p>
    <div class="card  border border-0">
        <div class="row g-0">
        <div class="col-lg-4">
        <img src=${items.img} class="img-fluid">
    </div>
    <div class="col-lg-8">
        <div class="card-body">
            <h5 class="card-title" style="font-size:15px;">${items.text9}</h5>
            <p class="card-text text-secondary" style="font-size:15px;">${items.text10}</p>
            <button type="submit" class="btn bg-dark text-white rounded-0 d-flex justify-content-end align-items-center" style="font-weight:bold">${items.btn2}</button>
        </div>
    </div>
    `
    const row = document.getElementById('row5');
    row.appendChild(col);
})

const minnabag5=[
    {id:1,img:'../images/shop.webp',text9:'Trip Luna Necklace Gold', text10:'USD 145.00',btn2:'ADD'},
]

minnabag5.map(items=>{
    const col=document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML=`
    <p class ="d-flex justify-content-start align-items-center" style="font-weight:bold;margin-left:3%;">YOU MAY ALSO LIKE...</p>
    <div class="card  border border-0">
        <div class="row g-0">
        <div class="col-lg-4">
        <img src=${items.img} class="img-fluid">
    </div>
    <div class="col-lg-8">
        <div class="card-body">
            <h5 class="card-title" style="font-size:15px;">${items.text9}</h5>
            <p class="card-text text-secondary" style="font-size:15px;">${items.text10} <span style="text-decoration:line-through;"> USD 175.00</span></p>
            <button type="submit" class="btn bg-dark text-white rounded-0 d-flex justify-content-end align-items-center" style="font-weight:bold">${items.btn2}</button>
        </div>
    </div>
    `
    const row = document.getElementById('row6');
    row.appendChild(col);
})

const minnabag7=[
    {id:1,img:'../images/60.jpg',text9:'Pirooz Ring Gold', text10:'USD 160.00',btn2:'ADD'},
]

minnabag7.map(items=>{
    const col=document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML=`
    <p class ="d-flex justify-content-start align-items-center" style="font-weight:bold;margin-left:3%;">YOU MAY ALSO LIKE...</p>
    <div class="card  border border-0">
        <div class="row g-0">
        <div class="col-lg-4">
        <img src=${items.img} class="img-fluid">
    </div>
    <div class="col-lg-8">
        <div class="card-body">
            <h5 class="card-title" style="font-size:15px;">${items.text9}</h5>
            <p class="card-text text-secondary" style="font-size:15px;">${items.text10}</p>
            <button type="submit" class="btn bg-dark text-white rounded-0 d-flex justify-content-end align-items-center" style="font-weight:bold">${items.btn2}</button>
        </div>
    </div>
    `
    const row = document.getElementById('row7');
    row.appendChild(col);
})

const minnabag2=[
    {id:1,btn1:'Apply'},
]

minnabag2.map(items=>{
    const col=document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML=`
    <div class="d-flex justify-content-start align-items-center">
        <input type="text" class="form-control w-75 rounded-0 m-2" placeholder="Discount code">
        <button type="submit" class="btn bg-dark text-white rounded-0" style="padding:7px 24px;font-weight:bold">${items.btn1}</button>
    </div>
    `
    const row = document.getElementById('row3');
    row.appendChild(col);
})

const minnabag3=[
    {id:1,text5:'Subtotal:',text6:'USD 300.00',text7:'CHECKOUT',text8:'VIEW SHOPPING BAG'},
]

minnabag3.map(items=>{
    const col=document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML=`
    <div class="d-flex justify-content-between align-items-center">
        <p style="font-weight:bold;font-size:18px;">${items.text5}</p>
        <p style="font-weight:bold;font-size:18px;">${items.text6}</p><br>
    </div>
    <div class="col-lg-12">
        <button class="btn bg-dark text-white rounded-0 w-100" style="font-weight:bold;font-size:15px;">${items.text7}</button>
        <button class="btn bg-white text-dark rounded-0 w-100 border border-black border-1 mt-1" style="font-weight:bold;font-size:15px;">${items.text8}</button>
    </div>
    `
    const row=document.getElementById('row4');
    row.appendChild(col);
})

const minnabag8=[
    {id:1,title:'Add'},
]

minnabag8.map(items =>{
    const col=document.createElement('div');
    col.classList.add('col-lg-12');
    col.innerHTML=`
        <button class="btn3 mt-4 bg-black text-white w-75" style="padding: 10px 50px;" id="add" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" data-id=${items.id}>${items.title}</button><br>
    `
    const row=document.getElementById('row8');
    row.appendChild(col);
    const buttons=document.querySelectorAll(' .btn3');
    buttons.forEach(items =>{
        items.addEventListener('click',(e) =>{
            const id=e.target.getAttribute('data-id');
            const currentItem=products.filter(items => items.id === +id)
            cart.push(currentItem);
            const cartCount=document.getElementById('cart-count');
            cartCount.classList.remove('d-none');
            cartCount.innerText=cart.length;
            localStorage.setItem('cart',JSON.stringify(cart));
        })
    })
    
})