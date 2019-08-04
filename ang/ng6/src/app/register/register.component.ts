import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ProductService } from "../product.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  personForm_;
  @Output() registerevent: EventEmitter<any>;
  //detailInfo;

  constructor(private formB: FormBuilder, private prodService: ProductService) {
    this.personForm_ = this.formB.group({
      first: [],
      last: [],
      email: [],
      num: [],
      address: []
    });
  }
  submit() {
    return this.prodService.getUser().subscribe(
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
  reset() {
    this.personForm_.reset();
  }
  ngOnInit() {}
}
