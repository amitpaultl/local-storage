
const getId = (id, valu, key) =>{
    document.getElementById(id).addEventListener('click', function(){
        const inputId =  document.getElementById(valu)
        const inputIdNumber = inputId.value;
        localStorage.setItem(key, inputIdNumber)
        inputId.value = ' ';
        
    })
}

const nameSet = localStorage.getItem('Name');
const EmailSet = localStorage.getItem('Email');
const massSet = localStorage.getItem('Message');
const dispalyId = document.getElementById('dispaly');
dispalyId.innerHTML= `
<li>${nameSet}</li>
<li>${EmailSet}</li>
<li>${massSet}</li>
`

 


getId('NameAdd','Name','Name');
getId('EmailAdd','Email','Email');
getId('messgeseAdd','messgese','Message');

const daletId = (id, Name)=>{
    document.getElementById(id).addEventListener('click', function(){
        localStorage.removeItem(Name);
    })
}

daletId('NameDelete','Name');

daletId('EmailDelete','Email');

daletId('messgeseDelete','Message');



document.getElementById('clear').addEventListener('click', function(){
    localStorage.clear()
})


