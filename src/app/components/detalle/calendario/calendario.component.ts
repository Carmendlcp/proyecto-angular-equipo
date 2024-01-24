import { Component, } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';




@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {
  selectedDate: Date | null = null;

  handleDateChange(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    console.log(this.selectedDate);
    
  }
}
