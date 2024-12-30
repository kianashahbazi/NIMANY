const showUser=() =>{
    const userName=JSON.parse(localStorage.getItem('user-name'));
    const userBtn=document.getElementById('user');
    if(userName){
        userBtn.innerText=userName;
        userBtn.addEventListener('click',(e) =>{
            e.preventDefault();
            localStorage.removeItem('user-name');
            navigation.reload();
        })
    }
}
(async function render(){
    showUser();
})()