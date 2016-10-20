import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
            <div><router-outlet></router-outlet></div>
            footer`
})
export class AppComponent { }

