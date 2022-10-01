import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel, Users } from '../model/phonebook.model';


@Injectable({ providedIn: 'root' })

export class AuthService
{
	endpoint: string = "https://localhost:5001/api/Users";
	headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor
	(
		private http: HttpClient,
		public router: Router
	) {}

	signUp(user: Users): void
	{
		this.http.post<boolean>(this.endpoint, user).subscribe
		(
			(res: boolean) =>
			{
				let loginModel = new LoginModel(user.phoneNumber, user.password);
				if (res)
					this.signIn(loginModel);
				else
					alert ("The phone number is already taken!");
			}
		);
		
	}

	signIn(loginModel: LoginModel)
	{
		this.http.post(`${this.endpoint}/signin`, loginModel, {responseType: 'text'}).subscribe
		(
			(token: string) =>
			{
				localStorage.setItem("access_token", token);
				this.router.navigate(['/home']);
			}
		);
	}
	
	get isLoggedIn(): boolean { return !!localStorage.getItem('access_token'); }

	doLogout()
	{
		if (localStorage.removeItem('access_token') == null)
			this.router.navigate(['log-in']);
	}

}