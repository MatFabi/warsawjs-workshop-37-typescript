import { expect } from 'chai';


describe('Array deeper', () => {

    it('concat', () => {
        var alpha: Array<any> = ["a", "b", "c"]; 
        var numeric: Array<any> = [1, 2, 3];

        var result = alpha.concat(numeric); 

        expect(result.length).to.equal(6);
        expect(result).to.deep.equal(["a","b","c",1,2,3]);
    });

    it('every', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Monica", age: 22}
        ]; 

        var result = users.every(x=> x.age > 20); 

        expect(result).to.equal(true);
    });

    it('every - seperate function', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Monica", age: 22}
        ]; 

        function isOldEnough(x:User){
            return x.age>23
        }

        var result = users.every(isOldEnough); 

        expect(result).to.equal(false);
    });

    it('some - seperate function', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Monica", age: 22}
        ]; 

        function isOldEnough(element: User, index: number, array: Array<User>) { 
            return (element.age >= 30); 
            } 

        var result = users.some(isOldEnough); 

        expect(result).to.equal(true);
    });


    it('filter', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Monica", age: 22}
        ]; 

        var result = users.filter(x=> x.age >= 30); 

        expect(result.length).to.equal(2);
    });

    it('filter - seperate function', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Monica", age: 22}
        ]; 

        function isOldEnough(element: User, index: number, array: Array<User>) { 
            return (element.age >= 30);
        } 

        var result = users.filter(isOldEnough); 

        expect(result.length).to.equal(2);
    });


    it('forEach', () => {
        let numeric: Array<number> = [1, 2, 3];
        let copiedArray: Array<number> = [];

        numeric.forEach(x=>copiedArray.push(x));

        expect(copiedArray.length).to.equal(3);
        expect(copiedArray).to.deep.equal([1, 2, 3]);
    });

    it('join', () => {
        var alpha: Array<string> = ["a", "b", "c"]; 

        var result = alpha.join(',')

        expect(result).to.equal("a,b,c");
    });

    it('indexOf', () => {
        var alpha: Array<string> = ["a", "b", "c"]; 

        var result = alpha.indexOf("b"); 

        expect(result).to.equal(1);
    });

    it('map', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Monica", age: 22}
        ]; 

        var result = users.map(x=>x.age); 

        expect(result.length).to.equal(3);
        expect(result).to.deep.equal([31,39,22]);
    });

    it('push', () => {
        var alpha: Array<string> = ["a", "b", "c"]; 

        alpha.push("d")

        expect(alpha.length).to.equal(4);
        expect(alpha).to.deep.equal(["a", "b", "c", "d"]);
    });


    it('unshift', () => {
        const alpha: Array<string> = ["a", "b", "c"]; 

        const lewLenght = alpha.unshift("d")

        expect(lewLenght).to.equal(4);
        expect(alpha).to.deep.equal(["d", "a", "b", "c"]);
    });

    it('reduce', () => {
        let numeric: Array<number> = [1, 2, 3];

        let sum = numeric.reduce((x,y)=>y*3+x); 

        expect(sum).to.equal(16);
    });

    it('shift', () => {
        let numeric: Array<number> = [5, 2, 3];

        let shifted = numeric.shift();

        expect(shifted).to.equal(5);
        expect(numeric.length).to.equal(2);
    });

    it('slice', () => {
        let numeric: Array<number> = [5, 2, 3];

        let sliced = numeric.slice(2);

        expect(sliced).to.deep.equal([3]);
        expect(numeric.length).to.equal(3); 
    });

    it('sort by age', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Monica", age: 22}
        ]; 

        var result = users.sort((x,y)=>x.age-y.age)
        expect(result.length).to.equal(3);
        expect(result.map(x=>x.age)).to.deep.equal([22, 31, 39]);
    });

    it('sort by name desc', () => {
        interface User {
            name: string,
            age: number
        }

        var users: Array<User> = [
            {name: "Jessica", age: 31},
            {name: "John", age: 39},
            {name: "Alan", age: 42},
            {name: "Monica", age: 22}
        ]; 

        var result = users.sort((x,y)=>x.name>y.name?-1:y.name>x.name?1:0);

        expect(result.length).to.equal(4);
        expect(result.map(x=>x.name)).to.deep.equal(["Monica", "John", "Jessica", "Alan"]);
    });
});