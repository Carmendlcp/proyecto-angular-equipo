import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  contactForm!: FormGroup
  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group(
      {
        name: ['',[Validators.required, Validators.minLength(3)]],
        mail:['',[Validators.required]],
        age:[''],
        gender:['']
      }
    )

  }
  onSubmit(){
    this.contactForm.value
  }
  }
