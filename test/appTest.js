import chef from "../app.js";
import chai, {assert } from "chai";
// when writing a test two basic function call you should be aware of
// describe :
// it's use to group our test cases in mocha and takes two arguments
// first is the name of the test second is the call back function
// it :
// it's use to write indivisual test cases.
// and takes the two argument first is what the test case does and second is call back function.
 


describe("chef test",function(){
    it("to check if the dish have the valid name",function(){
        let dish = chef.checkMenu()
        assert.isString(dish,"string")
    })

    it("to check if the dish is pasta",function(){
        let dish = chef.checkMenu()
        assert.equal("pasta",dish)
    })

    it("to check if the dish is pasta",function(){
        let dish = chef.checkMenu()
        assert.fail("failing a test case purposely")
    })

    it("to check if the dish is part of the menu",function(){
        let dish = chef.checkMenu()
        assert.oneOf(dish,chef.dishes)
    })
})