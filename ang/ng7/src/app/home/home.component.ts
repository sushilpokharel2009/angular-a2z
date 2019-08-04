import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from "./../services/user.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  showingLogin: boolean;
  signUpForm: FormGroup;
  signInForm: FormGroup;
  showLogin() {
    this.showingLogin = !this.showingLogin;
  }
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snack: MatSnackBar,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      name: [],
      password: [],
      confirmPassword: []
    });
    this.signInForm = this.fb.group({
      name: [],
      password: []
    });
  }

  signUp() {
    this.userService
      .signUp(this.signUpForm.value)
      .subscribe(res => console.log(res));
  }

  login() {
    this.userService.signin(this.signInForm.value).subscribe(
      (res: any) => {
        console.log(res);
        if (res.result.length == 1) {
          this.snack.open("Logged in successfully", "", {
            duration: 2000
          });
          this.router.navigate(["/dashboard"]);
        }
      },
      err => {
        console.log("Login", err);
      }
    );
  }

  ngOnInit() {}
}
