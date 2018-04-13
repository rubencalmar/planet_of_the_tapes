import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PublicComponent } from './component/public/public.component';
import { AboutComponent } from './component/public/about/about.component';
import { FooterComponent } from './component/public/footer/footer.component';
import { HomeComponent } from './component/public/home/home.component';
import { LoginComponent } from './component/public/login/login.component';
import { RegisterComponent } from './component/public/register/register.component';
import { ProductComponent } from './component/public/product/product.component';
import { VideoGamesComponent } from './component/public/videogames/videogames.component';
import { SeriesComponent } from './component/public/series/series.component';
import { MoviesComponent } from './component/public/movies/movies.component';

const appRoutes = [

 	{ path: '', component: PublicComponent, useAsDefault: true,
		children: [
			{path: 'contact', component: AboutComponent},
			{path: 'home', component: HomeComponent},
			{path: 'videogames', component: VideoGamesComponent},
			{path: 'product', component: ProductComponent},
			{path: 'product/:id', component: ProductComponent},
			{path: 'login', component: LoginComponent},
		    {path: 'register', component: RegisterComponent},
		    {path: 'series', component: SeriesComponent},
		    {path: 'movies', component: MoviesComponent},
		    {path: '', redirectTo: 'home', pathMatch: 'full' }
		]
	}
];

export const routing = RouterModule.forRoot(appRoutes);
