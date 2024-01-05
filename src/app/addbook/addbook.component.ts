import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  dataBook:any;
  content:any;
  showForm:boolean=false;
  constructor(private http:HttpClient,private form:FormBuilder,private route:Router,private service:DataServiceService){
      service.bookDetails().subscribe((book)=>{
        this.dataBook=book;
        this.content=this.dataBook.description;
      })
  }

  Addnewbook=this.form.group(
    {
      id:['',Validators.required],
      coursename:['',Validators.required],
      description:['',Validators.required]
    }
  )

  bookAddition(){
    this.service.bookDetails().subscribe((data)=>{
      const find=data.find((founddata:any)=>{
          return founddata.id==this.Addnewbook.controls['id'].value;
    })
    if(find){
      alert("Already Added");
    }
    else{
      this.service.addBookDetails(this.Addnewbook.value);
      // this.http.post<any>("http://localhost:3000/bookDetails",this.Addnewbook.value).subscribe((posted)=>{
      //   alert("Book Added");
      //   this.route.navigateByUrl('addbook').then(()=>{
      //     window.location.reload();
      //   });
      // })
    }
    })
  }

  addBook(){
    this.showForm=true;
  }

  closeForm(){
    this.showForm=false;
  }
}
