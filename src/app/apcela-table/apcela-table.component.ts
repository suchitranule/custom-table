import { Component, OnInit, Input ,OnChanges} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'apcela-table',
  templateUrl: './apcela-table.component.html',
  styleUrls: ['./apcela-table.component.scss']
})
export class ApcelaTableComponent implements OnInit{
filteredItems : any[];
pages : number = 4;
pageNumber : number = 0;
currentIndex : number = 1;
items: any[];
pagesIndex : Array<number>;
pageStart : number = 1;
inputName : string = '';
offset : number = 2;
tFootColSpan:number = 1;
@Input() pagination: boolean;
@Input() columns: any[];
@Input() data: any[];
@Input() sort: any;
@Input() title: string;

constructor( ){
  this.data = [];
  this.refreshItems();
};

ngOnInit(){
  this.tFootColSpan = this.columns.length;
  this.init();
}

ngOnChanges() {
  this.init();
}
init(){
this.currentIndex = 1;
this.pageStart = 1;
this.pages = 3;

this.pageNumber = parseInt(""+ (this.data.length / this.offset));
if(this.data.length % this.offset != 0){
   this.pageNumber ++;
}

if(this.pageNumber  < this.pages){
      this.pages =  this.pageNumber;
}

this.refreshItems();
console.log("this.pageNumber :  "+this.pageNumber);
}

FilterByName(){
this.data = [];
if(this.inputName != ""){
   this.data.forEach(element => {
       if(element.name.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
         this.data.push(element);
      }
   });
}else{
this.data = this.data;
}
console.log(this.data);
this.init();
}
fillArray(): any{
var obj = new Array();
for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
         obj.push(index);
}
return obj;
}
refreshItems(){
      this.items = this.data.slice((this.currentIndex - 1)*this.offset, (this.currentIndex) * this.offset);
      this.pagesIndex =  this.fillArray();
}
prevPage(){
if(this.currentIndex>1){
this.currentIndex --;
}
if(this.currentIndex < this.pageStart){
this.pageStart = this.currentIndex;
}
this.refreshItems();
}
nextPage(){
if(this.currentIndex < this.pageNumber){
   this.currentIndex ++;
}
if(this.currentIndex >= (this.pageStart + this.pages)){
this.pageStart = this.currentIndex - this.pages + 1;
}

this.refreshItems();
}
setPage(index : number){
this.currentIndex = index;
this.refreshItems();
}


}
