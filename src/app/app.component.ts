import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'ZColoc still in tests';

    ngOnInit(): void {
      console.log("ngOnInit");
    }

    ngAfterViewInit(): void {
      $("#sideMenu").sideNav();
    }  
}
