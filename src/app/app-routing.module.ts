import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
