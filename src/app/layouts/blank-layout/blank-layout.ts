import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-blank-layout',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './blank-layout.html',
  styleUrl: './blank-layout.css',
})
export class BlankLayout {

}
