import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Service } from '../shared/phonebook.service';

@Component
({
	selector: 'cf-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit
{
	theValue!: string;

	constructor
	(
		public authService: AuthService,
		private router: Router,
		private service: Service
	) { }

	ngOnInit(): void { }

	routeProfileSettings() { this.router.navigate(['/profile-settings']); }

	routeHome() { this.router.navigate(['home']); }

	logout() { this.authService.doLogout(); }

	addContact() { this.router.navigate(['add-contact']); }

	onSubmit(event:any)
	{
		this.service.searchText = this.theValue;
		this.routeHome();
		if (event.key == "Enter")
			this.theValue = '';
	}

	_123()
	{
		this.service.Want2sortAbc = false;
		this.routeHome();
	}

	_Abc()
	{
		this.service.Want2sortAbc = true;
		this.routeHome();
	}
}
