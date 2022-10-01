import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginModel } from 'src/app/model/phonebook.model';
import { AuthService } from 'src/app/shared/auth.service';
import { JwtHelper } from 'src/app/shared/jwthelper.service';
import { Service } from 'src/app/shared/phonebook.service';

@Component
({
	selector: 'cf-profile-settings',
	templateUrl: './profile-settings.component.html',
	styleUrls: ['./profile-settings.component.css']
})

export class ProfileSettingsComponent
{
	public user: any;
	public UserInfoForm: FormGroup;

	constructor
	(
		private jwtHelp: JwtHelper,
		private fb: FormBuilder, 
		private authService: AuthService,
		private service: Service
	)
	{
		this.user = this.jwtHelp.getUserInfo();
		this.UserInfoForm = this.fb.group
		({
			id:				this.user[0],
			firstName:		this.user[1],
			lastName:		this.user[2],
			phoneNumber:	this.user[3],
			password:		this.user[4],
			isRegistered:	true
		});
	}

	UpdateUser()
	{
		this.service.updateUser(this.UserInfoForm.value);
		this.authService.doLogout();
		let loginModel = new LoginModel(this.UserInfoForm.value.phoneNumber, this.UserInfoForm.value.password);
		this.authService.signIn(loginModel);
	}
}