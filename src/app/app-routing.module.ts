import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './content/add/add.component';
import { ContentComponent } from './content/content.component';
import { EditComponent } from './content/edit/edit.component';
import { SigninComponent } from './login-components/signin/signin.component';
import { SignupComponent } from './login-components/signup/signup.component';
import { ProfileSettingsComponent } from './navbar/profile-settings/profile-settings.component';

const routes: Routes =
[
	{ path: ''					, redirectTo: '/log-in', pathMatch: 'full'	},
	{ path: 'log-in'			, component: SigninComponent	 			},
	{ path: 'sign-up'			, component: SignupComponent 				},
	{ path: 'home'				, component: ContentComponent				},
	{ path: 'profile-settings'	, component: ProfileSettingsComponent		},
	{ path: 'add-contact'		, component: AddComponent					},
	{ path: 'edit-contact'		, component: EditComponent					}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }