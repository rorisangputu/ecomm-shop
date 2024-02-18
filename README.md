 E-commerce Shop

Welcome to the E-commerce Shop! This is a simple web application built for online shopping. It utilizes RESTful routes, JSON for data storage, and is powered by Express.js and Node.js.

Technologies Used

- Express.js**: A minimalist web framework for Node.js used to build robust web applications. It provides features for creating RESTful APIs and handling HTTP requests and responses.
- Node.js**: A JavaScript runtime environment that enables server-side scripting. It's used for executing JavaScript code outside of a web browser, making it ideal for building server-side applications.
- JSON (JavaScript Object Notation)**: A lightweight data interchange format used for storing and transmitting data. In this application, JSON is used to store product and category data in a structured format.
- RESTful Routes**: The application implements RESTful routing principles to define routes for accessing and manipulating resources. Each route corresponds to a specific HTTP method and performs operations on resources such as retrieving, creating, updating, and deleting data.
  
How to Use

1. Installation**:
   - Clone the repository to your local machine using `git clone`.
   - Navigate to the project directory.
   - Install dependencies using `npm install`.

2. Starting the Server**:
   - Run the command `node index.js` to start the server.
   - The server will start listening on port 3000 by default.

3. Accessing Routes**:
   - Explore different routes to interact with the application's resources.
   - Below are some example routes you can access:
     - `/home`: View the home page of the e-commerce shop.
     - `/categories/all`: View all available categories.
     - `/categories/:category`: View products within a specific category.
     - `/categories/:category/:id`: View details of a specific product.
  
4. Using JSON Data**:
   - Product and category data is stored in JSON format in the `data.json` file.
   - You can modify this file to add, update, or remove products and categories as needed.

5. Customization**:
   - Customize the application further by modifying route handlers in the `index.js` file.
   - Implement additional functionality or features based on your requirements.

Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or feature implementations, feel free to open an issue or submit a pull request.
