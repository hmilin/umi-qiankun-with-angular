import { Component, OnDestroy, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { singleSpaPropsSubject } from "src/single-spa/single-spa-props";
import { takeUntil } from "rxjs/operators";
import { AuthService } from "./core/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "angular9";

  private destroy = new Subject<void>();

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.location.subscribe((change) => {
      // Angular应用卸载后路由会响应并使应用重新挂载，跳出子应用前先把router销毁
      if (change.type === "popstate" && !change.url.includes("/v1")) {
        this.router.dispose();
      }
    });

    // 监听主应用共享数据更新
    singleSpaPropsSubject.pipe(takeUntil(this.destroy)).subscribe((props) => {
      const { user } = props.masterState ?? {};
      if (user) {
        this.authService.user.next(user);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
