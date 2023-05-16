# Nou Store

 ### An online marketplace for all the football stans


 ## Table Of Contents
- [Nou Store](#nou-store)
    - [An online marketplace for all the football stans](#an-online-marketplace-for-all-the-football-stans)
  - [Table Of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Tech Used :](#tech-used-)
  - [Learnings](#learnings)
  - [Future Improvments](#future-improvments)
  - [Installation](#installation)
  - [Contributions](#contributions)
  - [Links](#links)


 ## Key Features
 - ### Home Page
    - User can browse the landing page and discover featured categories

 - ### Product Listing Page
    - User can view a wide range of products listed with a convenient **filter section** on the left side
    - User can 
        - **Sort** By Price
        - **Filter** By Category
        - **Filter** By Rating

    - A clear all filters button is also available for user convenience
    - On individual product cards, a prominent CTA button allows users to easily add the product to their cart.

 - ### Cart Management
  
    - **Private Route**, only accessible to logged-in users
    - Users can easily **update or delete** items in their cart.
    - Users can also add products to their wishlist from the cart.

 - ### Wishlist Management
     - **Private Route**, only accessible to logged-in users
    - Users can easily add items to their wishlist, with duplicates automatically excluded.
    - Users can also easily remove items from their wishlist.

 - ### Authorization Page
 
    - A login page and a signup page are available
    - Uses **Localstorage API**  to handle the login/signup
  

 ## Tech Used : 
 - HTML, CSS
 - React JS
 - React Context API
 - React Router V6
 - State Management - useReducer + ContextAPI
 - [Nou-CL](https://nou-cl.netlify.app/) - A CSS Component Library, made by me.
 - Backend - Mockbee
 ## Learnings
 - Planning out the folder structure and hierarchy of a complex project before jumping to code
 - Using OpenSource Software and API's (mockbee) by reading documentation
 - How Complex State can be managed by using **useReducer** and **ContextAPI**
 - Public & Private Routing, using React Router
 - Building **utility functions** and using them when required to keep the code meaningful and concise
 ## Future Improvments

 - Add more filters
 - Alerts on user interaction like product add, update, delete
 - Use Dynamic Routing on individual products
 - More Responsive on mobile devices
 - Use firebase/alternatives to store user data and move away from local storage auth

 ## Installation
 To install and set up Nou Store, follow these steps:
 
 1. Clone the Repository:
   ```
   git clone https://github.com/abhijitdotsharma/nou-store-react.git

   ```
 2. Install the required dependencies:
   ```
    npm install
   ```
 3. Start the development server:
   ```
   npm start
   ```

 ## Contributions

 All contributions to Nou Store are welcome! If you would like to contribute, please follow these guidelines:

```
 1. Fork the repository and create a new branch for your changes.
 2. Make your changes, include good commit message.
 3. Open a pull request and describe your changes.
```

 ## Links
 
 [![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://abhijit.super.site/)
 [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhijitdotsharma/)
 [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/abhi_exe)