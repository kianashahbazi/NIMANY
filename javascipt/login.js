(function app(){
    const Users=[
        {id:1, userName:'kiana', initial: 'K', pass:'123456'},
        {id:2, userName:'mehdi',inittial:'M' , pass:'654321'},
        {id:3, userName:'reza' ,inittial:'R' , pass:'112233'},
        {id:4, userName:'mamad' ,inittial:'M' , pass:'445566'},

    ]
    const handleSubmit=(e) =>{
        e.preventDefault();
        const email =document.getElementById('email');
        const pass =document.getElementById('pass');
        const user =Users.filter(item => item.userName.toLowerCase() === email.value.toLowerCase().trim());
        
        if(user.length && pass.value === user [0].pass){
            console.log('login successful');
            localStorage.setItem('user-name' , JSON.stringify(user [0].userName))
            setTimeout(() => {
                navigation.navigate('../pages/page3login.html')
            }, 2000);
            
        }
        else{
            console.log('invalid');
            
        }
    }
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', handleSubmit)
})()