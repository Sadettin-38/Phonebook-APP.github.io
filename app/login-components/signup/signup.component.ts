import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';

@Component
({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})

export class SignupComponent
{
	signupForm: FormGroup;

	constructor
	(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		public translate: TranslateService,
		public app: AppComponent
	)
	{
		this.signupForm = this.fb.group
		({
			firstName: [''],
			lastName: [''],
			phoneNumber: [''],
			password: [''],
			isRegistered: true
		});
	}

	registerUser() { this.authService.signUp(this.signupForm.value); }

	redirect2LogInPage() { this.router.navigate(['log-in']); }
}