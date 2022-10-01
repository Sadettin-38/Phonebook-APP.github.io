import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacts } from 'src/app/model/phonebook.model';
import { Service } from 'src/app/shared/phonebook.service';

@Component
({
	selector: 'cf-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})

export class EditComponent
{
	public ContactInfoForm: FormGroup;
	contact!: Contacts;

	constructor
	(
		public fb: FormBuilder, 
		public router: Router,
		private service: Service
	)
	{
		this.contact = JSON.parse(localStorage.getItem("contact2Edit") ?? "");
		this.ContactInfoForm = this.fb.group
		({
			contactsId: this.contact.contactsId,
			firstName: this.contact.firstName,
			lastName: this.contact.lastName,
			phoneNumber: this.contact.phoneNumber,
			usersId: this.contact.usersId
		});
	}

	ApproveEditing() { this.service.updateContact(this.ContactInfoForm.value); }
	
	ngOnDestroy() { localStorage.removeItem('contact2Edit'); }
}
