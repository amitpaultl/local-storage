
const getId = (id, valu, key) =>{
    document.getElementById(id).addEventListener('click', function(){
        const inputId =  document.getElementById(valu)
        const inputIdNumber = inputId.value;

        localStorage.setItem(key,inputIdNumber)

        inputId.value = ' ';
        
    })
}



// all key


function allStorage() {
    const obj = {
        name:localStorage.getItem('Name'),
        massage:localStorage.getItem('Email'),
        email: localStorage.getItem('Message')
    };
    console.log(obj);

    const stin = JSON.stringify(obj)
    localStorage.setItem('all', stin)



}



allStorage()





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




/*



        let savedCart = localStorage.getItem('objectData');

        let objectData = {};

        
        // let cart = {};
        if(savedCart){
            objectData = JSON.parse(savedCart);
        } else{
            return objectData;
        }
        

        objectData[key] = inputIdNumber;
        const cartStringified = JSON.stringify(objectData);

        localStorage.setItem('objectData', cartStringified);
        
        
        
        
        */