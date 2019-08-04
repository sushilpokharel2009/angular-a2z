import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  personForm_;
  constructor(private formB: FormBuilder) {
    this.personForm_ = this.formB.group({
      first: new FormControl(),
      last: new FormControl(),
      email: new FormControl(),
      num: new FormControl(),
      address: new FormControl()
    });
  }
  submit() {}
  reset() {}

  ngOnInit() {}
}
