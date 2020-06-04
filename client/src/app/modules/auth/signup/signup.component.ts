import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstName = ""
  lastName = ""
  email = "";
  password = "";
  confirmPassword = "";
  errors = new Set();

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  handleSignup(event) {
    event.preventDefault();


    if (this.firstName && this.lastName && this.email && this.password) {
      if (this.password !== this.confirmPassword) {
        this.errors.add("* Password and Confirm Password don't match")
      }

      const credentials = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }

      this.authService.signup(credentials)
      .subscribe((data) => {
        console.log("we got", data);
      }, (error) => {
        console.log("error - ", error)
        this.errors.add(error.error.message)
      })

    } else {
      this.errors.add("* You must provide required inputs")
    }
  }

}
