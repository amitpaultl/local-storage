
const apiKey = 'fbe10c07cff54cd9bbbc7bbdf628effe';
const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-05&sortBy=publishedAt&apiKey=fbe10c07cff54cd9bbbc7bbdf628effe`

fetch(url)
.then(res => res.json())
.then(dats => console.log(dats))

const alates = () =>{
    const comfrom = alert('Hello bangla')
    console.log(comfrom);
}
const conftomw = () =>{
    const comfrom = confirm('confirm bangla')
    console.log(comfrom);
}
const promer = () =>{
    const comfrom = prompt('prompt bangla')
    console.log(comfrom);
}

const sessoin = (key, value, propty)=>{
    document.getElementById(key).addEventListener('click', ()=>{
        const values = document.getElementById(value);
        const val = values.value
        localStorage.setItem(propty, val);
    })
}
sessoin('nameAdd','name', 'Name');
sessoin('ageAdd','age', 'Age');

const sessoinRemove = (key, value)=>{
    document.getElementById(key).addEventListener('click', ()=>{
        
        localStorage.removeItem(value);
    })
}

sessoinRemove('nameremove','Name');
sessoinRemove('ageRemove','Age');

document.getElementById('clear').addEventListener('click', ()=>{
        
    localStorage.clear();
})

const names = localStorage.getItem('Name');






const inputId = (key) =>{
    const getelementId = document.getElementById(key);
    const vale = getelementId.value;
    return vale
}

const dispalyId = () =>{
    const key = inputId('key');
    const vale = inputId('valu');

    savaItemLocal(key, vale);
}

const getShopinCard = () =>{
    let seveCard = localStorage.getItem('card');
    let card = {};

    if(seveCard){
        card = JSON.parse(seveCard);
    }
    return card
}


const savaItemLocal = (key, vale) =>{
    const card = getShopinCard();
    card[key] = vale;
    const cardSting = JSON.stringify(card);
    
    localStorage.setItem('card', cardSting)

}

const seddinDispaly = (key, vale)=>{
    const iid = document.getElementById('sessoin');
    const div = document.createElement('li');
    div.innerText = `${key} : ${vale}`
    iid.appendChild(div)
}


const dispalyStor = () =>{
    const card = getShopinCard();
    for (const key in card) {
        const valu = card[key];
        seddinDispaly(key, valu);
        
    }
}

dispalyStor();