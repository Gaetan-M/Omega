# Omega
Application de mobile de messagerie interne a une entreprise
# Features

- Discussion with one person (inbox)
- Discussion with grooup of person (group)
- Call one user
- Look list if call and appel of one user
- Possibility to communicate without internet  connection

# Technologie

## FRONT END 

- [React-Native](https://reactnative.dev/) - JavaScript UI Library

 install with this code 
 
        npm install react-native-cli --save
        
- Expo

 use 
       npm install expo-cli --save
-Socket-io

       npm install socket.io-cli
       
## BACK END 
- [Express](https://expressjs.com/) - Web Framework for Node.js
- [Mongdb](https://www.mongodb.com/) - No Relational Database
- [Redis](https://redis.io/) - In-Memory Data Structure Store used for Authorization
- [Socket](https://socket.io/) -websockets

# TEAM
- Project Lead - [Gaetan](https://github.com/Gaetan-M)
- Full Stack - [Angelo](https://github.com/angeloDiepe)
- Full Stack - [Gaetan](https://github.com/Gaetan-M)
- Designer/ Styling Lead - [Delphine](https://github.com/Delphi-943)

## Running Locally in Development Mode

To get started with the front end, fork the repository and run the following commands:

    npm install
    npm start
if permission issue found run with prefix sudo. Ex

    sudo npm install

## Building and Deploying in Production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Running Test in Development Mode

If you are the first time to start the tests, run the following command to ensure all related packages installed:

    npm install

To get started with Unit Test, run the following command:

    npm run test

