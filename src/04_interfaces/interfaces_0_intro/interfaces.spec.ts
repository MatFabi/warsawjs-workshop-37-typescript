import { expect } from 'chai';

describe('Interfaces - introduction', () => {

    it('Required object parameter', () => {

        function getLabel(labelledObj: { label: string }) {
            return labelledObj.label;
        }
        let myObj = {
            label: "test"
        }
    /*Exercise - create myObj that will pass test*/

        expect(getLabel(myObj)).to.equal('test');
    });

    it('Required object parameter with interface', () => {

        /*Exercise - create IMyObject interface that will have same result as above*/

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.label;
        }
        interface IMyObject{
            size:number,
            label:string
        }
        
        let myObj = {size: 10, label: "test"};

        expect(getLabel(myObj)).to.equal('test');
    });

    it('Required object parameter with interface - with function', () => {

        /*Exercise - implement missing things here*/

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.doubleText(labelledObj.label);
        }
        interface IMyObject{
            label:string,
            doubleText: (text: string)=> string;
        }
        let myObj: IMyObject = {label: "test", doubleText: (text: string) => text + text};

        expect(getLabel(myObj)).to.equal('testtest');
    });

    it('Required object parameter with interface - optional parameter', () => {
        
        interface IMyObject{
            size?:number,
            label:string;
        }

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.label + (labelledObj.size ? labelledObj.size : '');
        }
        
        let myObj: IMyObject = {size: 10, label: "test"};
        let myObj2: IMyObject = {label: "test"};

        expect(getLabel(myObj)).to.equal('test10');
        expect(getLabel(myObj2)).to.equal('test');
    });

    // it('Required object parameter with interface - with extenstion', () => {

    //     interface IMyObject {
    //         label: string,
    //     }

    //     /*Exercise - implement missing interface here*/

    //     function getLabel(labelledObj: IMyObjectWithSize) {
    //         return labelledObj.label + (labelledObj.size ? labelledObj.size : '');
    //     }
        
    //     let myObj: IMyObjectWithSize = {size: 10, label: "test"};
    //     let myObj2: IMyObject = {label: "test"};

    //     expect(getLabel(myObj)).to.equal('test10');
    //     expect(getLabel(myObj2)).to.equal('test');
    // });

    it('Required object parameter with interface - index signatures', () => {

        interface IMyObject {
            label: string,
            [propname:string]:string
            /*Exercise - index signature that accept only string properties*/
        }

        function getLabel(labelledObj: IMyObject) {
            return labelledObj.prefix + labelledObj.label;
        }
        
        let myObj: IMyObject = {prefix: "pre-", label: "test"};

        expect(getLabel(myObj)).to.equal('pre-test');
    });

    // it('Required object parameter with interface - exercise with index signatures', () => {

    //     interface IMyFnBase{
    //         [propName:string]:string;
    //     }
    //     interface IMyFn {
    //         joinText:(...parms:IMyFnBase[])=>number;

    //     }
    //     let myObj: IMyFn {
    //         joinText:function(...parms:IMyFnBase[]){
    //             return parms.length
    //         }
    //     }

    //     expect(myObj.joinText({type: 'test', value: "1"}, {type: 'test', value: "2"})).to.equal("test1test2");
    // });
});