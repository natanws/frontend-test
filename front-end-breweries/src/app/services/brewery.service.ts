import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { Brewery } from "./brewery.model";

@Injectable({
  providedIn: "root",
})
export class BreweryService {
  baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) {}

  read(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(this.baseUrl).pipe(map((obj) => obj));
  }

  random(): Observable<Brewery[]> {
    const url = this.baseUrl + "random/1";
    return this.http.get<Brewery[]>(url).pipe(map((obj) => obj));
  }
}
