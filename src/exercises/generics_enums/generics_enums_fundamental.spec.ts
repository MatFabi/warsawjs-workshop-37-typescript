// import { expect } from 'chai';



// describe('Generics and enums- fundamentals exercise', () => {

//     it('Exercise 1', () => {
//         let list = new MyList<string>();
//         expect(list.length).to.equal(0);

//         list.add("Element1");
//         list.add("Element2");
//         list.add("Element3");

//         expect(list.length).to.equal(3);
//         expect(list.first()).to.equal("Element1");
//         expect(list.first()).to.equal(list.getAll()[0]);

//         list.remove("Element2");
//         expect(list.length).to.equal(2);

//         let listNextInstance = new MyList<string>(list);
//         expect(listNextInstance.length).to.equal(2);

//         expect(list.add('NewElement').getAll().length).to.equal(3);

//         expect(list.operation(Operation.Add, "ElementAddedWithEnum").length).to.equal(4);

//     });
