const products = [
    {id:'01', name:'Proteina', description:'...', img:'https://i.postimg.cc/fbx0f8BH/whey2lb.png', price:'3333', stock:'5'},
    {id:'02', name:'Whey Avena', description:'...', img:'https://i.postimg.cc/gcXQG5kX/wheyavena.png', price:'3333', stock:'5'},
    {id:'03', name:'Whey Burner', description:'...', img:'https://i.postimg.cc/RZ9DQZ1K/wheyburner.png', price:'3333', stock:'5'},
    {id:'04', name:'Whey Isolate', description:'...', img:'https://i.postimg.cc/QxczTT7j/wheyisolate.png', price:'3333', stock:'5'},
    {id:'05', name:'Whey Nitro', description:'...', img:'https://i.postimg.cc/R0ZpypD0/wheynitro.png', price:'3333', stock:'5'},
    {id:'06', name:'Whey Woman', description:'...', img:'https://i.postimg.cc/13HYW1MT/wheywoman.png', price:'3333', stock:'5'},
    {id:'07', name:'Ultra pro', description:'...', img:'https://i.postimg.cc/ZYGgncCf/wheyultrapro.png', price:'3333', stock:'5'},
    {id:'08', name:'Proteina', description:'...', img:'https://i.postimg.cc/fbx0f8BH/whey2lb.png', price:'3333', stock:'5'},
]


export const getData = new Promise ((resolve, reject) =>{
    let condition = true;
    setTimeout(() =>{
        if(condition){
            resolve(products)
        }else{
            reject('Error 404')
        }
    }, 2000)
})