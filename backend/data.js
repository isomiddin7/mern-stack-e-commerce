import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Isomiddin',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
    ],
    products: [
        {
            // _id: '1',
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: "Shirts",
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },

        {
            // _id: '2',
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: "Shirts",
            image: '/images/p2.jpg',
            price: 80,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality shirt'
        },

        {
            // _id: '3',
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: "Pants",
            image: '/images/p3.jpg',
            price: 90,
            countInStock: 10,
            brand: 'Nike',
            rating: 5.5,
            numReviews: 10,
            description: 'high quality shirt'
        },

        {
            // _id: '4',
            name: 'Adidas Fit Pants',
            slug: 'adidas-fit-pants',
            category: "Pants",
            image: '/images/p4.jpg',
            price: 100,
            countInStock: 10,
            brand: 'Adidas',
            rating: 5.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
    ]
}

export default data;