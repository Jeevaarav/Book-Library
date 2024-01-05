import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  dataBook:any;
  description:boolean[]=[false];
  content:any;
  viewShown:boolean[]=[true];
  displayContent:any;
  constructor(private http:HttpClient,private service:DataServiceService){
     service.bookDetails().subscribe((data)=>{
        this.dataBook=data;
        this.content=this.dataBook.description;
     })

  }

  viewDetails(index:any){
    console.log(index);
    this.description[index]=true;
  }

}
