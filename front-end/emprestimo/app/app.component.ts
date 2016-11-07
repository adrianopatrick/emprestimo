import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Emprestimos</h1>
            <div><router-outlet></router-outlet></div>
            <footer><div id="footer-text">@Copyright Adriano Patrick Cunha - 2016</div></footer>`
})
export class AppComponent { }

