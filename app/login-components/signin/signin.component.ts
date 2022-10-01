import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component
({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css'],
})

export class SigninComponent
{
	signinForm: FormGroup;

	constructor(public fb: FormBuilder, public authService: AuthService, public router: Router)
	{
		this.signinForm = this.fb.group
		({
			PhoneNumber: [''],
			Password: [''],
		});
	}
	
	loginUser() { this.authService.signIn(this.signinForm.value); }

	redirect2RegisterPage() { this.router.navigate(['sign-up']); }
}