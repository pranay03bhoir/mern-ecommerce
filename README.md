
# MERN eCommerce

This is a full-stack eCommerce application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse products, add them to the cart, and make purchases. It also includes features for sellers to manage their products and for admins to oversee the entire platform.

**Note: This project is a work in progress. Some features may not be fully implemented yet.**

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Product Management**: Sellers can add, edit, and delete products.
- **Shopping Cart**: Users can add products to the cart and proceed to checkout.
- **Order Management**: Users can view their order history, and admins can manage all orders.
- **Admin Dashboard**: Admins have access to a dashboard to manage users, products, and orders.
- **Responsive Design**: The application is fully responsive and works on all devices.
- **Secure API**: Protected API endpoints with authentication and authorization.
- **Image Uploads**: Users can upload product images to Cloudinary.
- **Category Management**: Products can be organized into categories for easy browsing.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pranay03bhoir/mern-ecommerce.git
   cd mern-ecommerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the application**:
   ```bash
   npm run dev
   ```

## Usage

- **Frontend**: The frontend is built with React and Redux. It includes components for product listing, product details, cart, checkout, and user authentication.
- **Backend**: The backend is built with Node.js, Express, and MongoDB. It includes routes for user authentication, product management, and order management.

## API Endpoints

### Image Upload Routes

- `POST /api/upload`: Upload an image to Cloudinary (Authenticated users only)

### Category Routes

- `GET /api/categories`: Get all categories
- `POST /api/categories`: Create a new category (Admin only)
- `PUT /api/categories/:id`: Update a category (Admin only)
- `DELETE /api/categories/:id`: Delete a category (Admin only)

### Wishlist Routes

- `GET /api/wishlist`: Get user's wishlist
- `POST /api/wishlist`: Add a product to the wishlist
- `DELETE /api/wishlist/:id`: Remove a product from the wishlist

### User Routes

- `POST /api/users/login`: Authenticate user and get token
- `POST /api/users/register`: Register a new user
- `GET /api/users/profile`: Get user profile
- `PUT /api/users/profile`: Update user profile

### Product Routes

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get product by ID
- `POST /api/products`: Create a new product (Admin only)
- `PUT /api/products/:id`: Update a product (Admin only)
- `DELETE /api/products/:id`: Delete a product (Admin only)

### Order Routes

- `POST /api/orders`: Create a new order
- `GET /api/orders/myorders`: Get logged-in user's orders
- `GET /api/orders/:id`: Get order by ID
- `PUT /api/orders/:id/pay`: Update order to paid
- `PUT /api/orders/:id/deliver`: Update order to delivered (Admin only)

## Environment Variables

The application requires the following environment variables:

- `NODE_ENV`: The environment in which the application is running (development, production)
- `PORT`: The port on which the server will run
- `MONGO_URI`: The URI for connecting to MongoDB
- `JWT_SECRET`: The secret key for signing JWT tokens
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name for image hosting
- `CLOUDINARY_API_KEY`: Cloudinary API key
- `CLOUDINARY_API_SECRET`: Cloudinary API secret

## Project Structure

The project structure is as follows:

```
mern-ecommerce/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── server.js
├── client/
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── reducers/
│   │   ├── screens/
│   │   ├── store.js
│   │   ├── App.js
│   │   ├── index.js
├── .env
├── package.json
├── README.md
```

## Technologies Used

- **Frontend**:
  - React
  - Redux
  - React Router
  - Axios
  - Bootstrap

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT
  - Cloudinary

## Future Improvements

- **Payment Integration**: Implement payment gateways like Stripe or PayPal for processing transactions.
- **Product Reviews and Ratings**: Allow users to leave reviews and ratings for products.
- **Wishlist**: Enable users to add products to a wishlist for future purchases.
- **Advanced Search and Filtering**: Improve the search functionality with advanced filters and sorting options.
- **Notifications**: Add email and in-app notifications for order updates and promotions.
- **Multi-language Support**: Provide support for multiple languages to cater to a broader audience.
- **Performance Optimization**: Optimize the application for better performance and faster load times.
- **Security Enhancements**: Implement additional security measures to protect user data and prevent attacks.
- **User Roles & Permissions**: Introduce different user roles, such as moderators and sellers, with specific permissions.
- **Analytics Dashboard**: Provide detailed analytics for sellers and admins to track sales and user behavior.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. Make sure to follow the code style and include tests for any new features or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

