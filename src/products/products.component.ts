import { Component } from "@angular/core";


@Component({
    selector:"app-products",
    templateUrl:"./products.component.html",
    styleUrls:["./products.component.scss"]
})
export class productsComponent{

    string:string = "";
    onSearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value;
        console.log(val)
        this.string = val;
    }

    string1:string = "";
    onProduct(ele:HTMLInputElement){
        console.log(ele.value)
        this.string1 = ele.value;
    }

    string2:string = "";
    onStudent(ele:HTMLInputElement){
        console.log(ele.value)
        this.string2 = ele.value;
    }

    string3:string = "";
    onUser(ele:HTMLInputElement){
        console.log(ele.value)
        this.string3 = ele.value;
    }

    string4:string="";
    onEmployee(ele:HTMLInputElement){
        console.log(ele.value)
        this.string4 = ele.value;
    }

}