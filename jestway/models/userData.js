const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.n = 0;
        this.users = [];
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
            this.n = this.n + 1;
        });
    }

    // Method to add a user
    addUser(user) {
        this.users.push(user);
        // this.n = this.n + 1;
    }

    // Method to clear all users
    removeOneUser() {
        if ( this.users.length > 0 ) {
            this.n = this.n - 1;
            return this.users.pop();
        }else{
            this.n = this.n - 1;
            return null
        }       
    }

    removeTwoUser() {
        if ( this.users.length > 0 ) {
            this.n = this.n - 2;
            return this.users.pop();
        }else{
            return null
        }       
    }


    // Method to clear all users
    getUserCount() {
        return this.n;
    }

    // Method to clear all users
    clearUsers() {
        this.users = [];
        this.n = 0;
    }

    

}

module.exports = UserData;