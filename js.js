
setTimeout(()=>{
    // console.log('hello');
},3500)

//2

const promet= () =>{

    const number =  prompt('plesse input number');
    const stingNumber = parseInt(number);
    alert(stingNumber + 200);
}


// 3

const confrom = ()=>{
    const comrom = confirm('Are you location show');

        if (comrom) {
            console.log(location.href);
        }else{
            console.log('Dhour hoy');
        }
}

// 2.2
document.getElementById('Incrizen').addEventListener('click', ()=>{
    const incrizenNum = document.getElementById('num');
    const incrizenSting = incrizenNum.innerText;
    const incrizenStingNumber = parseInt(incrizenSting)
    const dobul = incrizenStingNumber + 1
    // incrizenNum.innerText = dobul;
    localStorage.setItem('NumberId' , dobul);
    
    const num = localStorage.getItem('NumberId');
   
   
        const paret = JSON.parse(num);
        incrizenNum.innerText = num;
        console.log(paret);
    
  
    

    


})




// 1.1

var num = {}


const dispaly = () =>{

    document.getElementById('name').addEventListener('click', ()=>{
        num['Name'] = 'Shakhib khan'
    });
    
    
    document.getElementById('age').addEventListener('click', ()=>{
        num['Age'] = 12
    })

    // localStorage.setItem('card', JSON.stringify(num));
    

}

dispaly();

document.getElementById('nameRemove').addEventListener('click', ()=>{
        
});



document.getElementById('ageRemove').addEventListener('click', ()=>{
    localStorage.removeItem('Age');
});





document.getElementById('alete').addEventListener('click', ()=>{
    const keys = localStorage.getItem(localStorage.key('Age'), 'Age');
    // const dispaly = 
    alert('Age : '+ keys);
})


