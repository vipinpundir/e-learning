
E-Learning Website README
E-Learning Website

Welcome to the E-Learning website! This web application is designed to provide various programming courses to users who want to improve their skills and productivity. The courses cover different programming languages and are created by renowned instructors in the field. The website is built using React and Redux, and it utilizes a JSON server (db.json) to provide course data and user information.

Table of Contents
Getting Started
Installing JSON Server
Starting JSON Server
Courses
Users
Getting Started
To set up the E-Learning website on your local system, follow the steps below:

Installing JSON Server
The E-Learning website uses a JSON server to provide course data and user information. Make sure you have Node.js and npm installed on your system. To install JSON Server globally, run the following command in your terminal:

npm install -g json-server

Starting JSON Server
Before running the website, create a db.json file in the root directory and paste the following content into it:

{
  "courses": [
    {
      "id": 1,
      "title": "Python Programming",
      "author": "Harshit Vasisth",
      "categories": "programming language",
      "price": 900,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png",
      "videourl": "https://www.youtube.com/embed/Y8Tko2YC5hA"
    },
    {
      "id": 2,
      "title": "Java Programming",
      "author": "Dusrgash",
      "categories": "programming language",
      "price": 1500,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://www.developer.com/wp-content/uploads/2022/12/java-programming-tutorials-tips-300x200.png",
      "videourl": "https://www.youtube.com/embed/Y8Tko2YC5hA"
    },
    {
      "id": 3,
      "title": "C Programming Language",
      "author": "My sir g",
      "categories": "programming language",
      "price": 1100,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230630120259/C-Language-Introduction.png",
      "videourl": "https://www.youtube.com/embed/To2EtJUqj8Y"
    },
    {
      "id": 4,
      "title": "C++ Programming Language",
      "author": "Code with harry",
      "categories": "programming language",
      "price": 800,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png",
      "videourl": "https://www.youtube.com/embed/6dbXuMSjBgc"
    },
    {
      "id": 5,
      "title": "Swift Programming Language",
      "author": "unknow",
      "categories": "programming language",
      "price": 1200,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://contentstatic.techgig.com/thumb/msid-77766933,width-460,resizemode-4/5-Tips-to-level-up-your-Swift-programming-skills.jpg?173434",
      "videourl": "https://www.youtube.com/embed/nAchMctX4YA"
    },
    {
      "title": "Reactjs",
      "author": "Code with Harry",
      "categories": "Programming Language",
      "price": "999",
      "desc": "This is Best and Popular Course.",
      "img": "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      "videourl": "https://www.youtube.com/embed/N3AkSS5hXMA",
      "id": 6
    }
  ],
  "user": [
    {
      "name": "Vipin Pundir",
      "email": "vipin1@gmail.com",
      "password": "1234",
      "role": "admin"
    },
    {
      "name": "Vipin",
      "email": "vipin2@gmail.com",
      "password": "1234",
      "role": "normal"
    }
  ]
}


E-Learning Website README
E-Learning Website

Welcome to the E-Learning website! This web application is designed to provide various programming courses to users who want to improve their skills and productivity. The courses cover different programming languages and are created by renowned instructors in the field. The website is built using React and Redux, and it utilizes a JSON server (db.json) to provide course data and user information.

Table of Contents
Getting Started
Installing JSON Server
Starting JSON Server
Courses
Users
Getting Started
To set up the E-Learning website on your local system, follow the steps below:

Installing JSON Server
The E-Learning website uses a JSON server to provide course data and user information. Make sure you have Node.js and npm installed on your system. To install JSON Server globally, run the following command in your terminal:

Copy code
npm install -g json-server
Starting JSON Server
Before running the website, create a db.json file in the root directory and paste the following content into it:

json
Copy code
{
  "courses": [
    {
      "id": 1,
      "title": "Python Programming",
      "author": "Harshit Vasisth",
      "categories": "programming language",
      "price": 900,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png",
      "videourl": "https://www.youtube.com/embed/Y8Tko2YC5hA"
    },
    {
      "id": 2,
      "title": "Java Programming",
      "author": "Dusrgash",
      "categories": "programming language",
      "price": 1500,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://www.developer.com/wp-content/uploads/2022/12/java-programming-tutorials-tips-300x200.png",
      "videourl": "https://www.youtube.com/embed/Y8Tko2YC5hA"
    },
    {
      "id": 3,
      "title": "C Programming Language",
      "author": "My sir g",
      "categories": "programming language",
      "price": 1100,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230630120259/C-Language-Introduction.png",
      "videourl": "https://www.youtube.com/embed/To2EtJUqj8Y"
    },
    {
      "id": 4,
      "title": "C++ Programming Language",
      "author": "Code with harry",
      "categories": "programming language",
      "price": 800,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png",
      "videourl": "https://www.youtube.com/embed/6dbXuMSjBgc"
    },
    {
      "id": 5,
      "title": "Swift Programming Language",
      "author": "unknow",
      "categories": "programming language",
      "price": 1200,
      "desc": "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
      "img": "https://contentstatic.techgig.com/thumb/msid-77766933,width-460,resizemode-4/5-Tips-to-level-up-your-Swift-programming-skills.jpg?173434",
      "videourl": "https://www.youtube.com/embed/nAchMctX4YA"
    },
    {
      "title": "Reactjs",
      "author": "Code with Harry",
      "categories": "Programming Language",
      "price": "999",
      "desc": "This is Best and Popular Course.",
      "img": "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
      "videourl": "https://www.youtube.com/embed/N3AkSS5hXMA",
      "id": 6
    }
  ],
  "user": [
    {
      "name": "Vipin Pundir",
      "email": "vipin1@gmail.com",
      "password": "1234",
      "role": "admin"
    },
    {
      "name": "Vipin",
      "email": "vipin2@gmail.com",
      "password": "1234",
      "role": "normal"
    }
  ]
}
Save the file and then start the JSON Server with the following command:

json-server --watch db.json

Now you're all set! The website should be up and running at http://localhost:3000.

Users
The E-Learning website allows users to access courses based on their roles. There are two user roles available:

Admin User

Name: Vipin Pundir
Email: vipin1@gmail.com
Password: 1234
Role: admin
Normal User

Name: Vipin
Email: vipin2@gmail.com
Password: 1234
Role: normal
As an admin user, you have full access to the website, including the ability to add, edit, or delete courses. Normal users can browse the courses and watch their videos but do not have permission to modify course data.

Feel free to explore the E-Learning website and enhance your programming skills with our diverse range of courses!

Note: Please make sure you have the db.json server running to see the course data and user information on the website.

Thank you for using our E-Learning platform! Happy learning! 🚀