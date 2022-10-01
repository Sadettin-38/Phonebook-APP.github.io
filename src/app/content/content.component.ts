import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { Contacts } from '../model/phonebook.model';
import { AuthService } from '../shared/auth.service';
import { JwtHelper } from '../shared/jwthelper.service';
import { Service } from '../shared/phonebook.service';

@Component
({
	selector: 'cf-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit
{
	user: any;
	ContactsList!: Contacts[];

	constructor
	(
		private service: Service,
		private router: Router,
		public authService: AuthService,
		private jwtHelp: JwtHelper
	)
	{ this.router.routeReuseStrategy.shouldReuseRoute = () => false; }

	ngOnInit()
	{
		this.user = this.jwtHelp.getUserInfo();
		this.service.getContactsList(this.user[0]).subscribe
		(
			(list: Contacts[]) =>
			{
				this.ContactsList = list;
				if (this.service.Want2sortAbc)
					this.ContactsList = this.ContactsList.sort((a: Contacts, b: Contacts) => (a.firstName < b.firstName) ? 1 : -1);
				if (this.service.searchText)
					this.ContactsList = this.ContactsList.filter
					(
						(contact: Contacts) =>
						{
							return (contact.firstName.toLowerCase().includes(this.service.searchText.toLowerCase())
							||		contact.lastName.toLowerCase().includes(this.service.searchText.toLowerCase())
							||		contact.phoneNumber.toLowerCase().includes(this.service.searchText.toLowerCase()));
						}
					);
			}
		);
	}
	
	editContact(contact: Contacts)
	{
		localStorage.setItem("contact2Edit", JSON.stringify(contact)); 
		this.router.navigate(['/edit-contact']);
	}

	delContact(id: number) { this.service.deleteContact(id); }
}