import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Data = {
    projectname:" ",
    published:false
  }
  submitted = false;

  
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

  saveData():void{
    const data = {
      projectname:this.Data.projectname

    };

    this.dataservice.create(data).subscribe(response =>{
      console.log(response);
      this.submitted=true;
    },
    error => {
      console.log(error);
    });
    
  }

  newdata():void{
    this.submitted=false;
    this. Data = {
      projectname:"",
      published:false
    }
  }
  
  }

