import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value = 0;

  ngOnInit() {
    setTimeout(() => {
      this.value = 0;
    }, 500);
  }

  handleSubmit(value: any) {
    console.log(value);
  }
}
