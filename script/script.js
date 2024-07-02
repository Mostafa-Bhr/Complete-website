const user= document.querySelector('.name')
const pass=document.querySelector('.password')
const btn= document.querySelector('.okay')
const rbtn=document.querySelector('.clear')
const show= document.querySelector('.result')
const display=()=>{
    if(user.value===''){
        document.querySelector('.result').innerHTML+=`plase fill the Username`
       }
       else if(pass.value===''){
        document.querySelector('.result').innerHTML+=`plase fill the password`
       }
       else if(user.value==='mostafa' && pass.value==='5559966' ){
        document.querySelector('.result').innerHTML+=`Welcome ${user.value}`
       }
       else{
        document.querySelector('.result').innerHTML+=`Username and Password is wrong`
       }
}
btn.addEventListener('click',display)
rbtn.addEventListener('click',()=>{
    document.querySelector('.result').innerHTML=''
})

  