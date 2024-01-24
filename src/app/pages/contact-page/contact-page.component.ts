import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorsComponent } from '../../components/form-errors/form-errors.component';
import { CalendarioComponent } from '../../components/detalle/calendario/calendario.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDateSelectionModel } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormErrorsComponent, CalendarioComponent, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  isSubmitted:boolean = false;
  contactForm!: FormGroup
  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group(
      {
        name: ['',[Validators.required, Validators.minLength(3)]],
        mail:['',[Validators.required]],
        password:['',[Validators.required, Validators.maxLength(15)]],
        passwordRepeat:['', [Validators.required, Validators.maxLength(20)]],
        age:['',[Validators.required]],
        gender:['',[Validators.required]]
      });
  }
  onSubmit(){
this.isSubmitted=true;
console.log(this.contactForm)
console.log(this.contactForm.value);
  }
  
  }
