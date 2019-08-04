import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from "../product.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  personForm;

  constructor(private formB: FormBuilder, private prod: ProductService) {
    this.personForm = this.formB.group({
      fname: new FormControl("", [
        Validators.required,
        Validators.maxLength(6)
      ]),
      last: new FormControl(),
      email: new FormControl(),
      num: new FormControl(),
      address: new FormControl()
    });
  }

  //submit() {}

  submit() {
    return this.prod.getUser().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log("DONE");
      }
    );
  }
  reset() {}
  ngOnInit() {}
}
