import { Injectable } from '@angular/core';

@Injectable ({ providedIn: 'root' })

export class JwtHelper 
{
	getUserInfo(): any
	{
		let token = localStorage.getItem("access_token") ?? "";
		let user = this.decodeToken(token)['unique_name'];
		return (user);
	}

	private urlBase64Decode(str: string)
	{
		let output = str.replace(/-/g, '+').replace(/_/g, '/');
		switch (output.length % 4)
		{
			case 0:
				break;
			case 2:
				output += '==';
				break;
			case 3:
				output += '=';
				break;
			default:
				// tslint:disable-next-line:no-string-throw
				throw 'Illegal base64url string!';
		}
		return decodeURIComponent((<any>window).escape(window.atob(output)));
	}

	private decodeToken(token: string = '')
	{
		if (token === null || token === '')
			return { 'upn': '' };
		const parts = token.split('.');
		if (parts.length !== 3)
			throw new Error('JWT must have 3 parts');
		const decoded = this.urlBase64Decode(parts[1]);
		if (!decoded)
			throw new Error('Cannot decode the token');
		return JSON.parse(decoded);
	}
}
