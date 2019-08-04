import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ProductService } from "../product.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  showingLogin: boolean;
  signupForm;
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private pService: ProductService,
    private snackbar: MatSnackBar,
    private route: Router
  ) {
    this.signupForm = this.formBuilder.group({
      _name: [],
      _email: [],
      _password: []
    });
    this.loginForm = this.formBuilder.group({
      _name: [],
      _email: [],
      _password: []
    });
  }

  showLogin() {
    this.showingLogin = !this.showingLogin;
  }

  signUp() {
    this.pService
      .signUp(this.signupForm.value)
      .subscribe(data => console.log(data));
  }

  login() {
    this.pService.sigIn(this.loginForm.value).subscribe(
      res => {
        if (res == 1) {
          this.route.navigate(["/contact"]);
        }
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("DATA COMPLETED");
      }
    );
  }

  ngOnInit() {}
}
