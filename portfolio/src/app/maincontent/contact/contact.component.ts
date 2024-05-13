import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(200)),
    ]),
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void => *', animate(200)),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let hoverLink = document.getElementById('privatPolicyLink');
    let checkboxBackground = document.getElementById('checkboxBackground');

    hoverLink?.addEventListener('mouseover', () => {
      checkboxBackground?.classList.add('checkBoxHovered');
    });

    hoverLink?.addEventListener('mouseout', () => {
      checkboxBackground?.classList.remove('checkBoxHovered');
    });
  }

  http = inject(HttpClient);
  privatPolicy: boolean = false;
  sendButton: boolean = false;
  alreadyChecked: boolean = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = true;

  post = {
    endPoint: 'https://Tim-Widl.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.privatPolicy
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log(this.contactData);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (
      ngForm.submitted &&
      ngForm.form.valid &&
      this.mailTest &&
      this.privatPolicy
    ) {
      console.log(this.contactData);
      ngForm.resetForm();
    }
  }

  isFormValid(ngForm: NgForm): boolean {
    return ngForm.form.valid && this.privatPolicy;
  }

  markFieldsIfInvalid(ngForm: NgForm) {
    if (!this.isFormValid(ngForm)) {
      Object.values(ngForm.controls).forEach((control) => {
        control.markAsDirty();
      });
    }
  }

  setAlreadyChecked(){
    if(!this.alreadyChecked && this.privatPolicy){
        this.alreadyChecked = true;
    }
  }
}
