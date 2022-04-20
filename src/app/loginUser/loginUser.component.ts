import { Component, OnInit } from '@angular/core';
declare function cambiar_login(): string ;
declare function cambiar_sign_up(): string ;
declare function ocultar_login_sign_up(): string ;


@Component({
  selector: 'app-loginUser',
  templateUrl: './loginUser.component.html',
  styleUrls: ['./loginUser.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    cambiar_login();
    cambiar_sign_up();
    ocultar_login_sign_up();
  }

}
