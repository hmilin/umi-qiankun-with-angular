import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { skipWhile } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

export type User = {
  id: string;
  username: string;
  ninckname: string;
  avatarUrl: string;
  email?: string;
  mobile?: string;
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private _httpService: HttpClient, private _router: Router) {
    if (!(window as any).__POWERED_BY_QIANKUN__) {
      // 单独运行时调接口获取
      this.onProfile();
    }
  }

  // 获取用户信息
  async onProfile(): Promise<void> {
    const user = await this._httpService
      .get<{ data: User }>("/api/user/profile")
      .toPromise();
    if (user) {
      const currentUser = user.data;
      this.user.next(currentUser);
    } else {
      this._router.navigateByUrl("/user/login");
    }
  }

  isLogin() {
    return this.user.pipe(skipWhile((user) => !user));
  }
}
