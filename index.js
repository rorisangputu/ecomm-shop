const express = require('express');
const app = express();
const path = require('path');
const shopData = require("./data.json")

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/', (req, res) => {
    const data = shopData;
    res.render('home', {data});
})

app.get('/categories/all', (req, res) => {
    const data = shopData;
    res.render('categories/all', {data});
})

app.get('/categories/:category', (req, res) => {
    const {category} = req.params;
    const Category = shopData.categories.find(cat => cat.catName === category);
    if(!Category){
        res.render('notfound', {Category})
    }
    res.render('categories/category', {Category});
})

app.get('/categories/:category/:id', (req, res) =>{
    const {category, id} = req.params;
    const Category = shopData.categories.find(p => p.catName === category)
    if(Category){
        const Product = Category.products.find(identi => identi.id === parseInt(id))
        if (Product){
            res.render('categories/product', {Product});
        }
    }
    
    
});





app.listen(3000, () =>{
    console.log("Listening on port 3k")
})
