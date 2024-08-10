import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userModel } from 'src/app/models/users.model';
import { ApiCallsService } from 'src/app/service/api-calls.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  //start declaration of variables
  addUserForm!: FormGroup;
  allUsers: userModel[] = []
  //end declaration of variables

  constructor(private fb: FormBuilder, private apiService: ApiCallsService) { }

  ngOnInit(): void {
    this.createAddUserForm()
    this.getUsers()
  }

  //get users
  getUsers() {
    this.allUsers=[]
    this.apiService.getUsers().subscribe({
      next: ((response) => {
        console.log("response from api-----", response.data);

        for (let i = 0; i < response.data.length; i++) {

          let record: userModel = response.data[i]

          this.allUsers.push(record)

        }

      }),
      error: ((error) => {
        console.log("error occured------", error);
      })
    })
  }

  //create form 
  createAddUserForm() {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    })
  }

  //get user data
  getUserData() {
    if (this.addUserForm.valid) {

     
      
      this.apiService.addUser(this.addUserForm.value).subscribe({
        next:((response)=>{
          console.log(response);
         this.getUsers()
          
        }),error:((error)=>{
          console.log(error);
          
        })
      })
    } else {
      console.log("this form is invalid");

    }

  }


}
