import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {

}
