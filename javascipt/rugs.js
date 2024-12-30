const rugs = [
    {id:1, img:'../images/rug2.webp' , title:'Cascade(hand-tufted)' ,text:'ONLY 1 LEFT', desc:'From $2,950'},
    {id:2, img:'../images/rug3.webp' , title:'Cascade(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:3, img:'../images/rug4.webp' , title:'Chain Luna 1(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:4, img:'../images/rug5.webp' , title:'Twin Passion1(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:5, img:'../images/rug6.webp' , title:'Blue Revolt1(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:6, img:'../images/rug7.webp' , title:'Twin Passion3(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:7, img:'../images/rug8.webp' , title:'Twin Passion2(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:8, img:'../images/rug9.webp' , title:'Twin top(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:9, img:'../images/rug10.webp' , title:'Chain Luna2(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:10, img:'../images/rug11.webp' , title:'THR3(hand-tufted)' ,text:'', desc:'From $2,950'},
    {id:11, img:'../images/rug12.webp' , title:'Love || Vintage Rug' ,text:'ONLY 1 LEFT', desc:'$6,500'},
    {id:12, img:'../images/rug13.webp' , title:'Twin Passion Rug' ,text:'', desc:'From $4,900'},
    {id:13, img:'../images/rug14.jpg' , title:'THR Magic Rug' ,text:'', desc:'From $5000'},
    {id:14, img:'../images/rug15.webp' , title:'Kerman Revolt Vintage' ,text:'ONLY 1 LEFT', desc:'$5,250'},
    {id:15, img:'../images/rug16.jpg' , title:'Winter Luna | Rug' ,text:'', desc:'From $6,750'},
    {id:16, img:'../images/rug17.webp' , title:'THR Vintage || Rug' ,text:'', desc:'$3,900'},
    {id:17, img:'../images/rug18.webp' , title:'Kerman Luna Rug' ,text:'', desc:'From $4,700'},
    {id:18, img:'../images/rug19.webp' , title:'Midnight Revolt Rug' ,text:'ONLY 1 LEFT', desc:'From $4,900'},
    {id:19, img:'../images/rug20.jpg' , title:'Desert Luna Rug' ,text:'', desc:'$8,500'},
    {id:20, img:'../images/rug21.webp' , title:'Revolt Vintage Rug' ,text:'ONLY 1 LEFT', desc:'$6,900'},
    {id:21, img:'../images/rug22.webp' , title:'THR Vintage | Rug' ,text:'ONLY 1 LEFT', desc:'$3,900'},
    {id:22, img:'../images/rug23.jpg' , title:'Red Dragon Vintage Rug' ,text:'ONLY 1 LEFT', desc:'$2,200'},
    {id:23, img:'../images/rug24.webp' , title:'Oriental Dream Rug |' ,text:'', desc:'From $5,200'},
    {id:24, img:'../images/rug25.webp' , title:'Dragon Treasure Rug |' ,text:'', desc:'From $4000'},
    {id:25, img:'../images/rug26.webp' , title:'Dragon Treasure Rug ||' ,text:'ONLY 1 LEFT', desc:'$5,500'},
    {id:26, img:'../images/rug27.webp' , title:'Oriental Dream Rug ||' ,text:'ONLY 1 LEFT', desc:'From $4000'},
    {id:27, img:'../images/rug28.webp' , title:'Rush Pledge Rug' ,text:'ONLY 1 LEFT', desc:'From $9,500'},
    {id:28, img:'../images/rug29.webp' , title:'Oriental Dream Rug |||' ,text:'ONLY 1 LEFT', desc:'$7,200'},
    {id:29, img:'../images/rug30.webp' , title:'Lunesta Vintage Rug' ,text:'ONLY 1 LEFT', desc:'$3,900'},
    {id:30, img:'../images/rug31.jpg' , title:'Golden Dragon Vintage' ,text:'ONLY 1 LEFT', desc:'$2,750'},
    {id:31, img:'../images/rug3.webp' , title:'Navy Luna Vintage Rug' ,text:'ONLY 1 LEFT', desc:'$3,500'},
    {id:32, img:'../images/rug2.webp' , title:'Gold Luna Vintage Rug' ,text:'', desc:'$9,600'},
]

rugs.map(item => {
    const col = document.createElement('div');
    col.classList.add('col-lg-2', 'mt-3');
    col.classList.add('col-sm-6', 'mt-3');

    col.innerHTML = `
            <div class="card bg-white border border-0 mt-0">
                <img src="${item.img}" class="art-img card-img-top img-fluid">
                <div class="card-body">
                    <a href="#" class="text-black p-1" style="font-size: 13px;text-decoration:none;">${item.title}</a>
                    <p class="text-danger mt-1" style="font-size:15px;">${item.text}</p>
                    <h5 class="p-0" style="font-size:17px;">${item.desc}</h5>
                </div>
            </div>
            
            `   
    const row = document.getElementById('row2');
    row.appendChild(col);

    const textdecoration=document.querySelectorAll(' .item-title');
    textdecoration.forEach(item => {
        item.addEventListener('onmouseover', () => {
            item.setAttribute('href', 'text-decoration:underline 1px solid black;');
        })
        item.addEventListener('onmouseout', () => {
            item.setAttribute('href', 'text-decoration:none;');
        })
    })
})
const art1=[
    {id:10 , title:'Load More'},
]
art1.map(items => {
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