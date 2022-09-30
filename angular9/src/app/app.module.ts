import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { OverlayContainer, OverlayModule } from "@angular/cdk/overlay";
import { AppOverlayContainer } from "./app-overlay-container";
import {
  NzButtonModule,
  NzDrawerModule,
  NzIconModule,
  NzOverlayModule,
} from "ng-zorro-antd";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzButtonModule,
    NzDrawerModule,
    NzOverlayModule,
    NzIconModule,
    OverlayModule,
  ],
  providers: [
    {
      provide: OverlayContainer,
      useClass: AppOverlayContainer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
