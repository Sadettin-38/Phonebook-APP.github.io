import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Contacts, Users } from 'src/app/model/phonebook.model';


@Injectable({
	providedIn: 'root'
})
export class Service 
{
	searchText!: string;
	Want2sortAbc!: boolean;

	constructor
	(
		private http: HttpClient,
		private router: Router
	) { }

	readonly baseURL = "https://localhost:5001/api"

	updateUser(user: Users): void { this.http.put<Users>(`${this.baseURL}/Users`, user).subscribe(); }

	deleteUser(id: number) { this.http.delete(`${this.baseURL}/Users` + id).subscribe(); }

	getContactsList(id: number): Observable<Contacts[]> { return (this.http.get<Contacts[]>(`${this.baseURL}/Contacts/${id}`)); }

	updateContact(contact: Contacts) { this.http.put(`${this.baseURL}/Contacts`, contact).subscribe(() => this.router.navigate(['home'])); }

	insertContact(contact: Contacts): void { this.http.post(`${this.baseURL}/Contacts`, contact).subscribe(() => this.router.navigate(['home'])); }

	deleteContact(id: number) { this.http.delete(`${this.baseURL}/Contacts/${id}`).subscribe(() => this.router.navigate(['home'])); }
}
