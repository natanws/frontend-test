import { Component, OnInit } from "@angular/core";
import { Brewery } from "src/app/services/brewery.model";
import { BreweryService } from "src/app/services/brewery.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  breweries: Brewery[] = [];
  totalBreweries: number = 0;
  page: number = 1;
  randomBrewery: Brewery[] = [];
  Random: boolean = false;

  constructor(private breweryService: BreweryService) {}

  ngOnInit(): void {
    this.breweryService.read().subscribe((breweries) => {
      this.breweries = breweries;
      this.totalBreweries = breweries.length;
    });
  }

  random(): void {
    this.breweryService.random().subscribe((brewery) => {
      this.randomBrewery = brewery;
      this.Random = true;
    });
  }
}
