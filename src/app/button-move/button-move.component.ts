import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-move',
  templateUrl: './button-move.component.html',
  styleUrls: ['./button-move.component.css']
})
export class ButtonMoveComponent implements OnInit {
selectedToAdd: any;
   selectedToRemove: any;
   selectedItems: any = [];
   groupsArray: any = [];
   constructor() {
     this.groupsArray = [{'groupName':'ramu'},
                       {'groupName':'ravi'},
                       {'groupName':'teja'},
                       {'groupName':'murali'}]
   }

   ngOnInit() {
   }

   assign() {
  this.selectedItems = this.selectedItems.concat(this.selectedToAdd);
  this.groupsArray = this.groupsArray.filter(selectedData => {
  return this.selectedItems.indexOf(selectedData) < 0;
  });
  this.selectedToAdd = [];
   }
 
   unassign() {
  this.groupsArray = this.groupsArray.concat(this.selectedToRemove);
  this.selectedItems = this.selectedItems.filter(selectedData => {
     return this.groupsArray.indexOf(selectedData) < 0;
  });
  this.selectedToRemove = [];
   }
}