import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  BASE_URL: string;
  constructor(private http: HttpClient) {
    this.BASE_URL = `http://localhost:9090/nperson`;
  }

  signUp(data) {
    return this.http.post(`${this.BASE_URL}/neww`, data);
  }

  sigIn(data) {
    return this.http.post(`${this.BASE_URL}/loginn`, data);
  }
}
