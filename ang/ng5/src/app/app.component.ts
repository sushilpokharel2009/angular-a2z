import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  FormControl,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { ProductService } from "./product.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ng5";
  // showingLogin: boolean;
  // signupForm;
  // loginForm;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private pService: ProductService,
  //   private snackbar: MatSnackBar,
  //   private route: Router
  // ) {
  //   this.signupForm = this.formBuilder.group({
  //     _name: [],
  //     _email: [],
  //     _password: []
  //   });
  //   this.loginForm = this.formBuilder.group({
  //     _name: [],
  //     _email: [],
  //     _password: []
  //   });
  // }

  // showLogin() {
  //   this.showingLogin = !this.showingLogin;
  // }

  // signUp() {
  //   this.pService.signup(this.signupForm.value).subscribe(res => {
  //     console.log(res);
  //   });
  // }

  // login() {
  //   this.pService.login(this.loginForm.value).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       if (res.result.length == 1) {
  //         this.snackbar.open("Logged in successfully", "", {
  //           duration: 2000
  //         });
  //         this.route.navigate(["/dashboard"]);
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     },
  //     () => {
  //       console.log("DATA COMPLETED");
  //     }
  //   );
  // }
}
