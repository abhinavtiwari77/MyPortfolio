import { Component } from '@angular/core';
import { ContactMeComponent } from '../cards/contact-me/contact-me.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactMeComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
