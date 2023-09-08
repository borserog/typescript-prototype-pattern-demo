import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tryCatch } from 'rxjs/internal/util/tryCatch';
import { Cloneable } from '../shared/cloneable.model';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
  @Input() contact: Contact;
  // TODO don't do this in real life, please!
  @Input() index: number;

  @Output() itemDuplicated = new EventEmitter<Contact>();
  @Output() itemDeleted = new EventEmitter<number>();

  errorMsg: string;

  cloneJSON() {
    try {
      this.itemDuplicated.emit(this.contact.cloneJSON());
    } catch (e) {
      this.errorMsg = e;
    }
  }

  naiveClone() {
    try {
      this.itemDuplicated.emit(this.contact.cloneNaive());
    } catch (e) {
      this.errorMsg = e;
    }
  }

  spreadClone() {
    try {
      this.itemDuplicated.emit(this.contact.cloneSpread());
    } catch (e) {
      this.errorMsg = e;
    }
  }

  trueClone() {
    try {
      this.itemDuplicated.emit(this.contact.cloneTrue());
    } catch (e) {
      this.errorMsg = e;
    }
  }

  remove() {
    this.itemDeleted.emit(this.index);
  }
}
