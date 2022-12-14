import { Component, OnInit } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  user: { first_name: string, last_name: string, email: string, phone_number: string } =
    {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: ""
    };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe(response => {
      response.forEach((element, index) => {
        this.user.first_name = element.first_name;
        this.user.last_name = element.last_name;
        this.user.email = element.email;
        this.user.phone_number = element.phone_number;
      });
    })
  }
}
