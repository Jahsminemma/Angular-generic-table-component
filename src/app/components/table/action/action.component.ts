import { Component, OnInit, Input} from '@angular/core';
import { Users } from 'src/app/model/User';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  //show alert function
  showAlert() {
   alert("working on this function I have not gotten the right solution yet")
  }
  
  
  }

