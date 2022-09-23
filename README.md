# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Shoe Drip ![](src/images/ReadMe.jpeg)
### Developer
Roshanak Ahmed

### Deployed Project
https://project-4-shoes-frontend.netlify.app/

## Brief
I was asked to build a full-stack Flask and React application in two weeks, with my own backend and frontend, and deploy it online with a git repository hosted on Github. It was required for me to use a Python Flask RESTful API to serve my data from a Postgres database and consume that API with a separate frontend built with React. I was required to implement wireframes and establish core MVP features. I spent an additional week polishing up my project and spent a total of 3 weeks on the current version of the project.

## Overview
I built a full-stack E-commerce app selling Shoes using JavaScript, Bulma, React, Python, Flask, and a PostgreSQL database. Users could login/register, post comments, and create/delete shoes on the deployed project. Users could also update comments on the back-end.

## Technologies Used
**Technologies**
- Excalidraw for whiteboarding
- Quick Database Diagrams to describe relationships
- Visual Studio Code to create product
- Terminal to install dependencies
- Command Line Tools to install dependencies
- Pexels to collect images
- Cloudinary to upload images into URLs
- React for frontend development
- RESTful API for frontend and backend development
- Flask, Python, Flask-SQLAlchemy, Psycopg, Marshmallow, Flask- Marshmallow, Marshmallow-SQLAlchemy, Flask-Bcrypt, and pyJWT for backend development
- Insomnia to test CRUD functionality of my API
- React and JavaScript for frontend development
- HTML for frontend development
- CSS for styling in frontend development
- Bulma to import CSS in frontend development
- Google Fonts to import fonts
- PostgreSQL database to hold my data
- TablePlus to check my database
- Netlify for frontend deployment
- Heroku for backend Flask App deployment and creating Postgres database instance
- Github to host my git repositories and deployed project links online 
- MongoDB to run our database in our terminal 

**Installation Instructions for Dependencies**
Install Dependencies on Backend:
- `pipenv install Flask`
- `pipenv install Flask-SQLAlchemy`
- `pipenv install psycopg2-binary`
- `pipenv install flask-marshmallow`
- `pipenv install marshmallow-sqlalchemy`
- `pipenv install flask-bcrypt`
- `pipenv install marshmallow`
- `pipenv install PyJWT`

**Run Project**
  1. Terminal: run `mongod --dbpath ~/data/db`
  2. Backend: run `pipenv run python seed.py`
  3. Backend: run `pipenv run flask run`
  4. Frontend: run `npm i`
  5. Frontend: run `npm start`

## Approach Taken
Using whiteboarding on Excalidraw, I created the design and wireframes of the app first. I also described the relationships in the database on Quick Database Diagrams.
I proceeded to create the backend Flask Python app and API on Visual Studio Code. I tested my backend CRUD functionality on Insomnia.

I also checked the database was running properly on TablePlus and ran MongoDB while doing so.

I then created the frontend React app on Visual Studio Code and connected my API from the backend. I previewed my project on Mozilla. I registered and logged in users, added reviews, deleted shoes, created new shoes and checked TablePlus to see if my database was successfully updated when I did so.

I commented on my code throughout the project to explain it. I also committed changes to my app often. When I experienced bugs, I checked my console on Mozilla to debug errors. I also regularly seeded my database on the backend to ensure there were no errors.

I created an e-commerce site because I wanted to create something with a real world application. There were several things I found interesting during this project.

In the backend, I ensured that registered users received a token during login that they could use to create reviews, create new shoes, and delete shoes. Without registering a valid account, users would not be able to login and receive a token. Without the token received during login, no one would be able to create reviews, create new shoes, or delete shoes, which would prevent spam bots from interfering with the app. I tested this on the backend when posting reviews and deleting shoes using the bearer token received during login with a registered account on Insomnia. Therefore, the token is only given to users who successfully register their accounts and login with the same registered user information:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663969925/project%204%20readme/Picture1_f3sf1f.jpg)

On the frontend, users do not have access to deleting shoes or the option to post reviews and new shoes if they are not logged in properly with a registered account. Below is an example of what a logged in user sees. They are able to add reviews to shoes:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970001/project%204%20readme/Picture2_xgmsnu.jpg)

However, a user who is not logged in does not have this option to add reviews:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970085/project%204%20readme/Picture3_ilmuvi.jpg)

Furthermore, I ensured to add validation errors in the Controllers folder in the backend to ensure that users must fill all fields appropriately for registration and login. Missing fields and invalid fields would prevent successful registration and login:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970123/project%204%20readme/Picture4_ttgpv9.jpg)

In addition, in order to create a shoe, users also need to fill out valid fields so bots and spammers do not spam the Shoes page with improper data.

I added validation checks and error messages for improper validation when testing the endpoints on Insomnia. For instance, the following code allowed me to see an error message on Insomnia if I attempted to view a shoe that didn’t exist:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970164/project%204%20readme/Picture5_or5ksy.jpg)

I typed in an incorrect shoe ID in the URL of a shoe that didn’t exist, and saw the error message I created in my code when trying to get my shoe:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970201/project%204%20readme/Picture6_awwqrj.jpg)

Likewise, users also see an error if they try to create a shoe with missing or invalid fields:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970235/project%204%20readme/Picture7_oves3h.jpg)

I also added authorization errors on the secure route file of the backend middleware when trying to post reviews, delete shoes, or update reviews without using the correct bearer token from login:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970281/project%204%20readme/Picture8_uonmwv.jpg)

For example, the following authorization error is seen when trying to update a review without the correct bearer token:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970313/project%204%20readme/Picture9_wzgcfb.jpg)

I also added a seed file to add messages to my terminal during seeding to ensure there were no errors when seeding my database. I used the following code, and the messages ensuring successful seeding can be viewed in the terminal: 

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970357/project%204%20readme/Picture10_dialhv.jpg)

This is the terminal during successful seeding: 
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970395/project%204%20readme/Picture11_xo3x0e.jpg)

I created my very first Flask SQLAlchemy model with my base model on the backend. I found the base model quite interesting because it allowed me to create common fields that all of my other models could use.

I created an administrative user in the user data model on the backend. I also created an association object in the shoe category model on the backend so I could create a many to many relationship between my shoes and the following categories: flat, heel, sandal, and boot. I ensured in my shoe data that each shoe fell into either the flat or heel category and fell into the sandal or boot category. Each shoe had multiple categories, and each category belonged to multiple shoes:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970430/project%204%20readme/Picture12_lkuiup.jpg)

The multiple categories per shoe can be seen on TablePlus as each shoe ID has more than one category associated with it:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970483/project%204%20readme/Picture13_u3srqj.jpg)

Meanwhile, the reviews had a one to one relationship with shoes as each shoe could only be posted on one individual shoe at a time.

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970590/project%204%20readme/Picture14_ncdjhg.jpg)

I was fascinated by learning how to create specific columns for my shoe table in my database using the shoe model on the backend. I determined what type of data would be stored under the columns (i.e. text, boolean, or integer) and whether this data was unique or nullable:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970758/project%204%20readme/Picture15_qhe2af.jpg)

I saw the following columns in TablePlus when running my database:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970797/project%204%20readme/Picture16_culcqw.jpg)

Furthermore, I saw updates on TablePlus whenever users deleted shoes, posted reviews, or created new shoes. This ensured my frontend and database were connected and working properly.

Furthermore, in the shoe serializer on the backend, I nested reviews inside the shoe so that each reviews would be attached to each shoe:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970867/project%204%20readme/Picture17_d9ydcf.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970879/project%204%20readme/Picture18_sjs8bo.jpg)

In the user model file on the backend, I also hashed and encrypted the password to create an added layer of security so that the password would not be stored within the database:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970910/project%204%20readme/Picture19_x6jscb.jpg)

It was interesting to create my own database data for the API on the backend. I used Pexels to search for images for my API data, and I learned about using Cloudinary to upload images into URLs so that my app would not be too large of a file with too many images in the images folders. I then linked the backend to the frontend to fetch the shoe data from the API and post it on the shoe page to be read.

Users could click on individual shoes to learn more about each shoe, as well as delete shoes. Logged in users could also add reviews and create new shoes which would then appear on the shoes page:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970969/project%204%20readme/Picture20_gxh6xx.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970980/project%204%20readme/Picture21_tdvn8p.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663970983/project%204%20readme/Picture22_umgqbz.jpg)

The new reviews that logged in users added would also update on the TablePlus database:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971029/project%204%20readme/Picture23_srpt85.jpg)

On the backend, I set up my terminal to show me whenever users would get, post, or delete a resource:

# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971060/project%204%20readme/Picture24_gbootg.jpg)

## Screenshots
**Project Pitch Deck**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971160/project%204%20readme/Picture25_eblgmq.png)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971160/project%204%20readme/Picture26_hn5n2u.jpg)

**Testing CRUD functionality on Insomnia:**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971214/project%204%20readme/Picture27_ifcg44.jpg)

**Embedded Project:**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971297/project%204%20readme/Picture28_q41xu4.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971297/project%204%20readme/Picture29_hknaae.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971298/project%204%20readme/Picture30_ikj7ff.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971329/project%204%20readme/Picture31_s1ogcw.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971329/project%204%20readme/Picture32_fnm1df.jpg
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971329/project%204%20readme/Picture33_hsh2nt.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971330/project%204%20readme/Picture34_tmqxps.jpg)

**Project Code:**
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971393/project%204%20readme/Picture35_zm1pmq.jpg)
# ![](https://res.cloudinary.com/dgicm5dgb/image/upload/v1663971393/project%204%20readme/Picture36_aau7rk.jpg)


 ## Bugs, Blockers, Wins
 **Bugs**
 The app currently doesn’t show if shoes are in-stock or not. In order to see the review appear, the user has to manually refresh the page. To address this bug in the meantime, I have directed users back to the main shoe page so users do not think their reviews are not being posted after they click “submit”. The error handling popup message does not display errors for invalid login and registration on the frontend, however, users are unable to register and login if they do not meet the correct requirements.

 **Blockers**
 I could not give users the options to add categories from a drop-down list while creating new shoes. To potentially solve this, I can ask users whether the shoe is a boot or sandal, and whether the shoe is a flat or heel, to give users the option to type in categories manually. I also was not able to fetch filtered shoes from the API by category and display on the Search page. To solve this, I can link separate tabs for Flats, Heels, Boots, and Sandals fetching shoes from each specific category. Users are also unable to delete or update their own reviews on the frontend, however, they are able to do so on the backend. I can create an additional delete button for the comments like I did with the reviews.

 **Wins**
 The app reads all the shoes from the API. Users are able to register their usernames, login, add reviews, read reviews, create new shoes, and delete existing shoes on the frontend. Users are also able to update reviews, delete reviews, and create new categories on the backend. Users see an error message on the backend and frontend if they attempt to get a shoe that does not exist. Users see an error message on both the frontend and backend if they attempt to post a shoe with invalid fields. Furthermore, CSS, Flexbox, and Bulma are used for styling purposes. The shoe index page is component responsive.

 ## Future Features
- Media queries across every component to make it responsive to different browsers/mobiles/tablets
- Add testing using Mocha, Chai, and Supertest
- Add user avatar
- 5 star rating system for each user to create average rating of shoes 
- Option to delete user’s reviews
- Add shoe sizes
- Show whether shoes are in stock or not
- Fix Login/Registration error handler bug
- Option to filter and search shoes by category (possibly create tabs for each category on the Shoe Index)
- Create Shoe page: change “in_stock” to “in stock” and add option for categories
- Full CRUD functionality: can update comments on backend but need to add option to update comments on frontend

## Key Learnings
During this project I was able to practice my Python and Flask skills for the first time when creating my RESTful API on the backend. I also got some practice implementing CRUD functionality on a backend model and used Insomnia to check my API endpoints. This is also the first project in which I built a full-stack application with my own backend and API solo. In addition, this was the first time I learned to serve my data from a Postgres database and read all updates from the frontend (including posting reviews, creating new shoes, and deleting shoes) using TablePlus. Furthermore, this is the first time I implemented many to many relationships in my backend by creating the ShoeCategory model. 