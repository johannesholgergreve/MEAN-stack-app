# MEAN-stack-app
Using AngularJS with MongoDB, NodeJS and Express. User can change skill sets with CRUD options

# Install NodeJS on Ubuntu 16.04 server

1. Install HomeBrew
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Update brew
$ brew update

3. Install NodeJS
$ sudo apt-get update
$ sudo apt-get install nodejs

4. Install node package manager
$ sudo apt-get install npm

5. Install needed node modules (In project folder)
$ npm install socket.io
$ npm install mongodb

# Install MongoDB on Ubuntu 16.04 server

1. Adding MongoDB repository
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

2. Create list file for Mongo
$ echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

3. Update package list
$ sudo apt-get update

4. Install MongoDB
$ sudo apt-get install -y mongodb-org

5. Create MongoDB data folder
$ sudo mkdir -p /data/db

6. Run Mongod
$ Mongod

7. Use Mongo
$ Mongo

