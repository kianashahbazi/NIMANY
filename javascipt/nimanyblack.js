const nimanyblack = [
    {id:1,img:'../images/nimany1.webp', title:'Cyrus The Greate - Beige' , price:'$700'},
    {id:2,img:'../images/nimany2.webp', title:'Cyrus The Greate - Black' , price:'$700'},
    {id:3,img:'../images/nimany3.webp', title:'The Beluga Clutch' , price:'$465'},
    {id:4,img:'../images/nimany4.webp', title:'Unity Clutch - Emerald' , price:'$325'},
    {id:5,img:'../images/nimany5.webp', title:'The Persia , Black' , price:'$470'},
    {id:6,img:'../images/nimany6.jpg', title:'Black Rope Matt Black Hardware' , price:'$145'},
    {id:7,img:'../images/nimany7.webp', title:'Unity Clutch - Eclipse' , price:'$325'},
    {id:8,img:'../images/nimany8.webp', title:'Love Story Necklace Gold' , price:'$195'},
    {id:9,img:'../images/nimany9.jpg', title:'Love Story Necklace Steel' , price:'$175'},
    {id:10,img:'../images/nimany10.webp', title:'Luna Drop Choker - Gold' , price:'$300'},
    {id:11,img:'../images/nimany11.webp', title:'Luna Drop Choker - Steel' , price:'$225'},
    {id:12,img:'../images/nimany12.webp', title:'Luna Drop Choker - Silver' , price:'$225'},
    {id:13,img:'../images/nimany13.webp', title:'Luna Drop Choker - Silver' , price:'$300'},
    {id:14,img:'../images/nimany14.webp', title:'THR 1 Shoulder Bag' , price:'$380'},
    {id:15,img:'../images/nimany15.webp', title:'Serpent Bracelet Steel' , price:'$185'},
    {id:16,img:'../images/nimany16.webp', title:'Black Leather Gold Diamond' , price:'$250'},
    {id:17,img:'../images/nimany17.webp', title:'The Unicome Clutch' , price:'$600'},
]
nimanyblack.map(item => {
    const col = document.createElement('div');
    col.classList.add('col-lg-3', 'mt-3');
    col.classList.add('col-sm-6', 'mt-3');

    col.innerHTML = `
            <div class="card bg-white border border-0 mt-0 rounded-0">
                <img src="${item.img}" class="card-img-top img-fluid">
                <div class="card-body">
                    <a href="#" class="title text-black p-1" style="font-size: 15px;text-decoration:none;">${item.title}</a>
                    <h5 class="p-0 mt-4" style="font-size:17px;">${item.price}</h5>
                </div>
            </div>
            
            `   
    const row = document.getElementById('row11');
    row.appendChild(col);
})
const nimanyblack1=[
    {id:18 , title:'Load More'},
]
nimanyblack1.map(items => {
    const col = document.createElement('div');
    col.classList.add('col-lg-12', 'mt-3');
    col.innerHTML = `
            <div class="d-flex justify-content-center align-items-center mt-5">
                    <button class="btn1 text-secondary bg-transparent rounded-5 border border-secondary border-2" style="padding: 10px 30px;">${items.title}</button>
            </div>
            
            `
    
    const row = document.getElementById('row1');
    row.appendChild(col);
})