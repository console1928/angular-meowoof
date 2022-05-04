import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-main-popup',
  templateUrl: './main-popup.component.html',
  styleUrls: ['./main-popup.component.css']
})
export class MainPopupComponent implements OnInit {
  activeTabHost: string = '';

  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      const activeTabUrl = tabs[0]?.url;

      if (activeTabUrl) {
        this._ngZone.run(() => {
          this.activeTabHost = new URL(activeTabUrl)?.host;
        });
      }
    });
  }

}
