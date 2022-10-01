import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelper } from 'src/app/shared/jwthelper.service';
import { Service } from 'src/app/shared/phonebook.service';

@Component
({
	selector: 'cf-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})

export class AddComponent
{
	NewContactForm: FormGroup;
	private user: any;

	constructor
	(
		private service: Service,
		private fb: FormBuilder,
		private jwtHelp: JwtHelper
	)
	{
		this.user = this.jwtHelp.getUserInfo();
		this.NewContactForm = this.fb.group
		({
			firstName: [''],
			lastName: [''],
			phoneNumber: [''],
			usersId: this.user[0],
			isDeleted: false
		});
	}

	addContact() { this.service.insertContact(this.NewContactForm.value); }
}