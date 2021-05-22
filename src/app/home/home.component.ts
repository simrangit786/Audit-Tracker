
import { Component, OnInit ,Inject } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id:Number;
  message:string;
  products = [];

  constructor(private dataService : DataService) { }

    

  ngOnInit() {

    this.dataService.sendGetrequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })

    // this.dataService.deleteAll().subscribe(data =>{
    //    this.message = "resource deleted successfuly";
    // })
    
    
    }
    deletedata(id):void{
      if(confirm("are you sure?")){
      this.dataService.delete(id).subscribe(data =>{
        console.log(data);
      })
    }

  }

  update(id,data):void{
    this.dataService.update(id,data).subscribe(response =>{
      console.log(response);
    })
  }
}

  
  
  


