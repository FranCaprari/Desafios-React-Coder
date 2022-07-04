const products = [
    {id:'01', name:'Proteina', category: 'proteinas', description: 'Texto de ejemplo, descripcion de producto', img:'https://i.postimg.cc/fbx0f8BH/whey2lb.png', price:'3333', stock:'5'},
    {id:'02', name:'Whey Avena',category: 'proteinas', description:'Texto de ejemplo, descripcion de producto', img:'https://i.postimg.cc/gcXQG5kX/wheyavena.png', price:'3333', stock:'6'},
    {id:'03', name:'Whey Burner',category: 'proteinas', description:'Texto de ejemplo, descripcion de producto', img:'https://i.postimg.cc/RZ9DQZ1K/wheyburner.png', price:'3333', stock:'5'},
    {id:'04', name:'Whey Isolate',category: 'proteinas', description:'Texto de ejemplo, descripcion de producto', img:'https://i.postimg.cc/QxczTT7j/wheyisolate.png', price:'3333', stock:'5'},
    {id:'05', name:'Vitamina',category: 'vitaminas', description:'Texto de ejemplo, descripcion de producto', img:'https://i.postimg.cc/7Y3Hv3hf/vitaminas.png', price:'3333', stock:'5'},
    {id:'06', name:'Vitamina 2',category: 'vitaminas', description:'Texto de ejemplo, descripcion de producto', img:'https://i.postimg.cc/7Y3Hv3hf/vitaminas.png', price:'3333', stock:'5'},
    {id:'07', name:'Creatina',category: 'creatinas', description:'Texto de ejemplo, descripcion de producto.', img:'https://i.postimg.cc/rsT1fGz5/creatina150g.png', price:'3333', stock:'5'},
    {id:'08', name:'Creatina 2',category: 'creatinas', description:'Texto de ejemplo, descripcion de producto', img:'https://i.postimg.cc/rsT1fGz5/creatina150g.png', price:'3333', stock:'5'},
]


export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(products);
        }, 2000);
    });
};


export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const productoSeleccionado = products.find(
            (prod) => prod.id === (id)
        );
        setTimeout(() => {
            resolve(productoSeleccionado);
        }, 2000);
    });
};