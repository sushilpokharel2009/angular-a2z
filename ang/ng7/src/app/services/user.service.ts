import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/User.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  BASE_URL: string;
  constructor(private http: HttpClient) {
    this.BASE_URL = `http://localhost:9090/person`;
  }

  signUp(data: User) {
    return this.http.post(`${this.BASE_URL}/new`, data);
  }

  signin(data: any) {
    return this.http.post(`${this.BASE_URL}/login`, data);
  }
}
