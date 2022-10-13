import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
myId!:Number;
  constructor(private actR: ActivatedRoute) { }

  ngOnInit(): void {
    //this.myId = Number(this.actR.snapshot.params['param']);
    this.actR.paramMap.subscribe(data => this.myId = Number(data.get('param')));

  }

}
