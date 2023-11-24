const express = require('express')
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
var cors = require('cors')
const port = 3003

app.use(cors());

const home = [
  {
    "homeimage": [{prodName: "Nike Jordan", prodPrice: 22500, imagePath: "/img/featured1.png", productId: 1}],
    "featured": [{prodName: "Nike Jordan", prodPrice: 17500, imagePath: "/img/featured1.png", productId: 2, image1: "/img/images/nike3.webp", image2: "/img/images/nike3-2.jpeg", image3: "/img/images/nike3-3.webp", image4: "/img/images/nike3-1.webp"},
                  {prodName: "Nike Jordan", prodPrice: 11500, imagePath: "/img/featured2.png", productId: 3, image1: "/img/images/nike5.jpg", image2: "/img/images/nike5-1.jpg", image3: "/img/images/nike5-2.jpg", image4: "/img/images/nike5-3.jpg"},
                  {prodName: "Nike Jordan", prodPrice: 10500, imagePath: "/img/featured3.png", productId: 4, image1: "/img/images/nike2.webp", image2: "/img/images/nike2-2.webp", image3: "/img/images/nike2-4.webp", image4: "/img/images/nike2-1.webp"}
                ],
    "collection": [{prodName: "Nike", imagePath: "/img/collection1.png", productId: "1"},
                  {prodName: "Adidas", imagePath: "/img/collection2.png", productId: "2"},
                  ],
    "women": [{prodName: "Nike Free TR", prodPrice: 18500, imagePath: "/img/women1.png", productId: 10, image1: "/img/images/nike7-1.jpg", image2: "/img/images/nike7-2.jpg", image3: "/img/images/nike7-3.jpg", image4: "/img/images/nike7-4.jpg"},
              {prodName: "Nike Free TR", prodPrice: 15000, imagePath: "/img/women2.png", productId: 20, image1: "/img/images/nike8.jpg", image2: "/img/images/nike8-1.jpg", image3: "/img/images/nike8-2.jpg", image4: "/img/images/nike8-3.jpg"},
              {prodName: "Nike GS Pink", prodPrice: 16500, imagePath: "/img/women3.png", productId: 30, image1: "/img/images/nike9.png", image2: "/img/images/nike9-1.png", image3: "/img/images/nike9-2.png", image4: "/img/images/nike9-3.png"},
              {prodName: "Nike Get 5", prodPrice: 19500, imagePath: "/img/women4.png", productId: 40, image1: "/img/images/nike6.webp", image2: "/img/images/nike6-1.webp", image3: "/img/images/nike6-2.webp", image4: "/img/images/nike6-3.jpg"}
            ],
    "offer": [{imagePath: "/img/offert.png", productId: "1"},
            ],
    "new": [{imagePath: "/img/new2.png", productId: 100, prodPrice: 11000, prodName: "Adidas Yeezy 350"},
            {imagePath: "/img/new3.png", productId: 200, prodPrice: 13400, prodName: "Adidas Yeezy 350 Sly"},
            {imagePath: "/img/new4.png", productId: 300, prodPrice: 12500, prodName: "Adidas Yeezy 350 v2"},
            {imagePath: "/img/new5.png", productId: 400, prodPrice: 9000, prodName: "Adidas Yeezy 350 Far"},
          ]
  }
];

const products = [{prodName: "Nike Jordan", prodPrice: 25000, imagePath: "/img/featured1.png", productId: 1, image1: "/img/images/nike3.webp", image2: "/img/images/nike3-2.jpeg", image3: "/img/images/nike3-3.webp", image4: "/img/images/nike3-1.webp"},
                  {prodName: "Nike Free RN", prodPrice: 12500, imagePath: "/img/featured2.png", productId: 92, image1: "/img/images/nike5.jpg", image2: "/img/images/nike5-1.jpg", image3: "/img/images/nike5-2.jpg", image4: "/img/images/nike5-3.jpg"},
                  {prodName: "Nike Free RN", prodPrice: 31050, imagePath: "/img/featured3.png", productId: 93, image1: "/img/images/nike2.webp", image2: "/img/images/nike2-2.webp", image3: "/img/images/nike2-4.webp", image4: "/img/images/nike2-1.webp"},
                  {prodName: "Nike Sply", prodPrice: 10500, imagePath: "/img/new2.png", productId: 94, image1: "/img/images/adidas5-1.png", image2: "/img/images/adidas5-2.png", image3: "/img/images/adidas5-3.png", image4: "/img/images/new2.png"},
                  {prodName: "Nike Sply", prodPrice: 20500, imagePath: "/img/new4.png", productId: 95, image1: "/img/images/adidas2.webp", image2: "/img/images/adidas2-1.webp", image3: "/img/images/adidas2-2.webp", image4: "/img/images/adidas2-3.webp"},
                  {prodName: "Nike Womens", prodPrice: 25000, imagePath: "/img/women1.png", productId: 10, image1: "/img/images/nike7-1.jpg", image2: "/img/images/nike7-2.jpg", image3: "/img/images/nike7-3.jpg", image4: "/img/images/nike7-4.jpg"},
                  {prodName: "Nike Free TR", prodPrice: 15000, imagePath: "/img/women2.png", productId: 20, image1: "/img/images/nike8.jpg", image2: "/img/images/nike8-1.jpg", image3: "/img/images/nike8-2.jpg", image4: "/img/images/nike8-3.jpg"},
                  {prodName: "Nike GS Pink", prodPrice: 10000, imagePath: "/img/women3.png", productId: 30, image1: "/img/images/nike9.png", image2: "/img/images/nike9-1.png", image3: "/img/images/nike9-2.png", image4: "/img/images/nike9-3.png"},
                  {prodName: "Nike Get 5", prodPrice: 15000, imagePath: "/img/women4.png", productId: 40, image1: "/img/images/nike6.webp", image2: "/img/images/nike6-1.webp", image3: "/img/images/nike6-2.webp", image4: "/img/images/nike6-3.jpg"},
                  {prodName: "Nike Free TR", prodPrice: 17000, imagePath: "/img/new3.png", productId: 90, image1: "/img/images/adidas3.jpg", image2: "/img/images/adidas3-1.jpg", image3: "/img/images/adidas3-2.jpg", image4: "/img/images/adidas3-3.jpg"},
                  {prodName: "Nike Sply", prodPrice: 15000, imagePath: "/img/new5.png", productId: 89, image1: "/img/images/adidas1-3.jpg", image2: "/img/images/adidas1-2.jpg", image3: "/img/images/adidas1-1.webp", image4: "/img/images/adidas1.jpg"},
                ];

app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  console.log("/home invoked");
  res.send(JSON.stringify(home));
})

app.get('/products', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(products));
  // res.sendStatus(404);
})

app.post('/posts', jsonParser, (req, res) => {
  console.log("Request body: "+req.body);
})

app.post('/login', jsonParser, (req, res) => {
  console.log("Request body: " + req.body);
  const email = req.body.email;
  const password = req.body.password;
  
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    return isValid;
  }
  const isPasswordValid = (password) => {
    const validPassRegex = /pass+/;
    return (password == null || password.length < 8)? false: validPassRegex.test(password);
  }
  if(isEmailValid(email) && isPasswordValid(password)) {
    console.log("Auth success");
    res.send(JSON.stringify({
      email: email,
      name: email.substring(0, email.indexOf('@')),
      token: Math.random().toString(36).substring(2)
    }))
  } else {
    res.sendStatus(400);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
