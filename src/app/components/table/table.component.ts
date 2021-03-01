import { Component, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Users } from 'src/app/model/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  closeResult = '';
  
  //injecting custom service
  constructor(private userservice: UserService, private modalService: NgbModal) { } 
  
  //declaring header column
  columns = ["No", "First Name", "Last Name", "Email"]

  //declaring array of headers column
  /*this can be changed if the api 
    fields is changed and the model as well
  */
  index = ["id", "first_name", " last_name", "email"]
  
  users: Users[] = [];


  ngOnInit(): void {

    //fetchin data from the rest api
    this.userservice.getUsers().subscribe(
      (response)=>{
        this.users = response
        
      },
      (error: any) => {
        console.log(`Error occured : ${error}`)
      }
    )
  }


  //action icon dynamic toggling function
open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
//resolve promise function after invoking cross click
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


