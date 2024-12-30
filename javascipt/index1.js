(function main () {
    const user = JSON.parse(localStorage.getItem('user-name'))
    console.log(`Welcome ${user}`);
    const userPlaceholder = document.getElementById('user1');
    userPlaceholder.innerText=`Welcome ${user}`;
})()