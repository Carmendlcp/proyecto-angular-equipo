import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './core/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './core/footer/footer.component';
import { CalendarioComponent } from './components/detalle/calendario/calendario.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent,CalendarioComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-team1';
}
