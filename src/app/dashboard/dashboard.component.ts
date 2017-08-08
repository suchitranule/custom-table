import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
heading:string;
offsets:number;
Title: any[] = [
    {
      display: 'Title', //The text to display
      variable: 'Name', //The name of the key that's apart of the data array
      filter: 'text' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Title 2', //The text to display
      variable: 'Amount', //The name of the key that's apart of the data array
      filter: 'decimal : 1.0-2' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Title 3', //The text to display
      variable: 'Date', //The name of the key that's apart of the data array
      filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'Title 4', //The text to display
      variable: 'Day', //The name of the key that's apart of the data array
      filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
    }
  ];

  rows: any[] = [
  {
    Name: 'Data 1',
    Amount: 100.23,
    Date: 1433588216000,
    Day: 'Thursday'
  },
  {
    Name: 'Data 3Data 3Data 3Data 3Data 3Data 3Data 3Data 3Data 3',
    Amount: .010123,
    Date: 1461820116000
  },
  {
    Name: 'Data 4',
    Amount: 1873.02301,
    Date: 1423128616000
  },
  {
    Name: 'Data 5',
    Amount: -93,
    Date: 1439220116000
  },
  {
    Name: 'Data 2',
    Amount: 0.875623,
    Date: 1432387616000
  }
];
  constructor() {
    this.heading = "Product Lists";
    this.offsets = 2;
  }

  ngOnInit() {
  }

}
