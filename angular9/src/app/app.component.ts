import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular9";

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.location.subscribe((change) => {
      // Angular应用卸载后路由会响应并使应用重新挂载，跳出子应用前先把router销毁
      if (change.type === "popstate" && !change.url.includes("/v1")) {
        this.router.dispose();
      }
    });
  }
}
