import { Inject, Injectable, OnDestroy } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { Platform } from "@angular/cdk/platform";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class AppOverlayContainer extends OverlayContainer implements OnDestroy {
  constructor(@Inject(DOCUMENT) document: Document, _platform: Platform) {
    super(document, _platform);
  }

  protected _createContainer(): void {
    super._createContainer();
    if (!this._containerElement) {
      return;
    }
    const parent = document.querySelector("app-root") || document.body;
    parent.appendChild(this._containerElement);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this._containerElement = null;
  }
}
