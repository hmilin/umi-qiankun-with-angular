import { enableProdMode, NgZone } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from "single-spa-angular";
import {
  SingleSpaProps,
  singleSpaPropsSubject,
} from "./single-spa/single-spa-props";

if (environment.production) {
  enableProdMode();
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

const { bootstrap, mount, unmount, update } = singleSpaAngular({
  bootstrapFunction: (singleSpaProps: SingleSpaProps) => {
    console.log("singleSpaProps", singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
      AppModule
    );
  },
  updateFunction: (singleSpaProps: SingleSpaProps) => {
    console.log("update singleSpaProps", singleSpaProps);
    singleSpaPropsSubject.next(singleSpaProps);
    return Promise.resolve();
  },
  template: "<app-root />",
  Router,
  NgZone: NgZone,
});

export { bootstrap, mount, unmount, update };
