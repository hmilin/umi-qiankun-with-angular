import { Component, OnInit } from "@angular/core";

const logo = require("src/assets/dashboard-users.svg").default as string;

declare var require: any;

@Component({
  selector: "angular9-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  imgUrl = logo;

  constructor() {}

  ngOnInit(): void {}
}
