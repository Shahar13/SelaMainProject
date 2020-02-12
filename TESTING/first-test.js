//IF WE USE NODE - add the next import
var assert = require('assert');
// CAN BE ADDED TO PACKAGE.json at "scripts": { "test": "ng test",

// the general idea: 
// Arrange => Act => Assert
// Given => When => Then

describe("decribe here what should be test here", () => {
    // can define vars
    let x = 5;

    // it should something
    it("should be something", () => {
        console.log("Hello Dear World");
        throw new Error("This is an error num 1");
    });
    it("should be accessible using as index", () => {
        const arr = [3, 6, 9];
        arr[1] = 10;
        assert.equal(10, arr[1]);
    });
    it("should be 22222", function () {
        console.log("Hello Dear World");
        assert.equal("stringSomething", "stringSomething");
    });

    before("before", function(){
        console.log("something");
        this.arr = [3, 6, 9];
    });
    
    beforeEach("before", function(){
        console.log("something else");
        this.arr = [3, 6, 9];
    })

})