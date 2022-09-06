import { Component, OnInit } from "@angular/core";
import { setMasterState } from "src/single-spa/single-spa-props";

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

  updateUser() {
    setMasterState({
      user: {
        id: "C21121309514446500000002181843",
        username: "hhh",
        ninckname: "pipipipi",
        avatarUrl:
          "/api/filestorage/group1/M00/00/18/CgoLFGMFmn6AWaQbAAHslIekblg599.png",
        mobile: "123456",
      },
    });
  }
}
