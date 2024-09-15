import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  msg: string = "";

  onSubmit(form: NgForm) {
    console.log(form.value.firstName);
    console.log(form.value.lastName);
    console.log(form.value.comment);
    this.msg = "Contact Form Submitted for " + form.value.firstName;
  }
}
