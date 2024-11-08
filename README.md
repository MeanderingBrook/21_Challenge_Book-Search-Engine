# Full-Stack Developer Bootcamp Module 21 - Challenge: Book Search Engine

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [Render App Deployment](#render-app-deployment)
- [Application Screenshots](#application-screenshots) 


## Description

The Book Search Engine is a browser-based application that permits Users to search, and save individual Books under User-specific accounts  (Saved Books), such Books then accessible only to the individual User. Book searchs are conducted through a publicly-available Google Books API. As developed, the Book Search Engine is accessible through a public web deployment (e.g., Render) and may also be run as a local instance, specific to each accessing computer.

Saved Books are held as structured data within a MongoDB document database and, consequently, may be accessible through the Web, if publicly deployed, and through a local instance (using a local MongoDB database).

User Accounts are maintained, and validated using JSON Web Tokens, providing secure, encrypted User credentialing.

The Book Search Engine source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

Saved Books are selected through the Book Search page, while the Saved Books page (Component) aggregates and presents saved Saved Books for later reference and use.

The Book Search Engine provides a sequential, timeline-based view of Saved Books.

The app utlizes a React frontend, including dynamically-generated content based on search and selection functions; Nodejs Modules (Apollo Server, Apollo Client) to manage save (Post) and remove (Delete) activities Saved Books to a remote or local MongoDB database through GraphQL; React to dynamically update app pages (Components) with Saved Books. 

The Node Module, JSON Web Tokens (JWT) is used to manage User accounts and access, hashing and securely storing User login credentials.

Because User Records and Saved Books are stored within a MongoDB database, either remote or local, data will persist across User sessions on individual, hosting computers, or remote hosting sessions, and will be visible only to authenticated  Users of the remote and local App instances.


## Installation

The Book Search Engine source code may be downloaded from its GitHub repository, and run directly by a hosting computer, or through a Web hosting service (e.g., Render, Heroku).

No Installation of the Book Search Engine itself is required; the app is fully browser-based, accessed through any modern browser that supports modern web technologies (e.g., React, JavaScript (Nodejs), Express, JWT).

However, local computers must hold an installation of Node.js, Apollo Server and Client, React, JWT and MongoDB in order the run local instances of the Book Search Engine application.


## Usage

The Book Search Engine is intended for use by one or more Users to search for, and store Books that will be held remotely and locally, and persist across multiple sessions. 

All Users of the Book Search Engine on a remote or local instance will visibility only to the data of individual, authenticated User accounts.


## Credits and Code Source

React components, Database and Route-management Code was substantively outlined and contributed to by Program Tutors, who provided recommentations on the effectively mapping data returned from the App database to use at the presentation layer (Handlebars), and to manage CRUD operations.

Additional Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

Return value and generated content testing and data evaluation, see archive.js ('archive' Folder)

`console.log` output of specification data specific to User requirements; see server.js, index.js, MainRoute, etc.


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/21_Challenge_Book-Search-Engine.git


## Render App Deployment

https://two1-challenge-book-search-engine-d3dv.onrender.com/


## Application Screenshots

![Book Search Engine: React App Homepage - Screenshot 01](./client/src/assets/images/Book-Search-Engine_React-App_Screenshot-01_Homepage.png?raw=true "Book Search Engine: React App Homepage")

![Book Search Engine: React App New User Sign-Up - Screenshot 02](./client/src/assets/images/Book-Search-Engine_React-App_Screenshot-02_New-User-Sign-Up.png?raw=true "Book Search Engine: React App New User Sign-Up")

![Book Search Engine: React App User Login - Screenshot 03](./client/src/assets/images/Book-Search-Engine_React-App_Screenshot-03_User-Login.png?raw=true "Book Search Engine: React App User Login")

![Book Search Engine: React App Book Search Results - Screenshot 04](./client/src/assets/images/Book-Search-Engine_React-App_Screenshot-04_Book-Search-Results.png?raw=true "Book Search Engine: React App Book Search Results")

![Book Search Engine: React App Saved Books - Screenshot 05](./client/src/assets/images/Book-Search-Engine_React-App_Screenshot-05_Saved-Books.png?raw=true "Book Search Engine: React App Saved Books")