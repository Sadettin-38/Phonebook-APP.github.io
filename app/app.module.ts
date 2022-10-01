import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileSettingsComponent } from './navbar/profile-settings/profile-settings.component';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { SigninComponent } from './login-components/signin/signin.component';
import { SignupComponent } from './login-components/signup/signup.component';
import { ContentComponent } from './content/content.component';
import { EditComponent } from './content/edit/edit.component';
import { AddComponent } from './content/add/add.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule
({
	declarations:
	[
		AppComponent,
		NavbarComponent,
		ContentComponent,
		EditComponent,
		AddComponent,
		ProfileSettingsComponent,
		SigninComponent,
		SignupComponent
	],
	imports:
	[
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		TranslateModule.forRoot
		(
			{
				loader:
				{
					provide: TranslateLoader,
					useFactory: httpTranslateLoader,
					deps: [HttpClient]
				}
			}
		)
	],
	providers:
	[
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})

export class AppModule { }

export function httpTranslateLoader(http: HttpClient)
{
	return (new TranslateHttpLoader(http));
}
