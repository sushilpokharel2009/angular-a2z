import { Injectable } from "@angular/core";
//import { HttpClient } from "selenium-webdriver/http";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  newUser(data) {
    return this.http.post("http://localhost:9090/user/new", data);
  }
  getImages() {
    return this.http.get("https://dog.ceo/api/breeds/image/random/30");
  }
  getUser() {
    return this.http.get("http://localhost:9090/user/getall");
  }
  updateUser(id, data) {
    return this.http.put(`http://localhost:9090/user/${id}`, data);
  }
  deleteUser(id) {
    return this.http.delete(`http://localhost:9090/user/${id}`);
  }
}
