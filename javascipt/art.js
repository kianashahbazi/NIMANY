// const art = [
//     {id:1 , img:'../images/art1.webp', title:'Midnight Revolt I' , desc:'$400'},
//     {id:2 , img:'../images/art20.webp' , title:'Summer Revolt I' , desc:'$500'},
//     {id:3 , img:'../images/art22.webp' , title:'Royal Crown I' , desc:'$500'},
//     {id:4 , img:'../images/art26.webp' , title:'Love & Fame II' , desc:'$500'},
//     {id:5 , img:'../images/art30.webp' , title:'Love & Fame III' , desc:'$500'},
//     {id:6 , img:'../images/art34.webp' , title:'Luna New York I' , desc:'$500'},
//     {id:7 , img:'../images/art7.webp' , title:'Eveything Grand II' , desc:'$500'},
//     {id:8 , img:'../images/art9.webp' , title:'Luna Monaco II' , desc:'$500'},
//     {id:9 , img:'../images/art11.webp' , title:'Love & Fame II' , desc:'$500'},
// ]
const art1=[
    {id:10 , title:'Load More'},
]
// art.map(item => {
//     const col = document.createElement('div');
//     col.classList.add('col-lg-4', 'mt-3');
//     col.innerHTML = `
//             <div class="card card border border-0 mt-0">
//                 <img src="${item.img}" class="art-img card-img-top img-fluid">
//                 <div class="card-body">
//                     <a href="#" class="text-black p-3" style="font-size: 16px;text-decoration:none;">${item.title}</a>
//                     <h5 class="p-3">${item.desc}</h5>
//                 </div>
//             </div>
            
//             `   
//     const row = document.getElementById('row1');
//     row.appendChild(col);
// })
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
