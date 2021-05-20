import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {
    projectname :" ",
    availaible:false
  };
  submitted = false;


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
   
  addNewProduct() : void {
    const data = {
      name: this.product.projectname

    };
    this.dataService.addNewProduct(data).subscribe(response => {
      console.log(response)
      this.submitted = true;
    },
    error => {
      console.log(error);
    });

  }
  
  }

