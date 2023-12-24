

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
// export class FormComponent {
//   form = new FormGroup({
//     alias: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-z]*')]),
//     environment: new FormControl('', Validators.required),
//     hostname: new FormControl('', Validators.required),
//     contactWindow: new FormControl('', Validators.required),
//   });

//   submit() {
//     if (this.form.valid) {
//       console.log(this.form.value);
//     }
//   }
// }

export class FormComponent implements OnInit {
  form: any;
  powers: string[] | undefined;
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
    this.powers = ['Really Smart', 'Turbulent Breeze', 
                'Super Hot', 'Weather Changer'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }
}