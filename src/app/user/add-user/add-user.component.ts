import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

reactiveForm = new FormGroup({
firstName: new FormControl(''),
lastName: new FormControl(''),
credentials: new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
})

});

  constructor() { }

  ngOnInit(): void {

  }

  Save(){
    console.log(this.reactiveForm);

  }

}
