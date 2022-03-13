import { Component, Input, OnInit } from "@angular/core";
import { Brewery } from "src/app/services/brewery.model";

@Component({
  selector: "app-card",
  templateUrl: "card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() brewery: Brewery = {
    abv: 0,
    address: "",
    category: "",
    city: "",
    coordinates: [],
    country: "",
    description: "",
    ibu: 0,
    name: "",
    state: "",
    website: "",
  };

  coordinates: boolean = this.brewery.coordinates ? true : false;

  constructor() {}

  ngOnInit(): void {}
}
