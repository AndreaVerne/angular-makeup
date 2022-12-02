import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MysticMakeupsComponent } from './mystic-makeups/mystic-makeups.component';
import { MysticAboutComponent } from './mystic-about/mystic-about.component';
import { MysticContactComponent } from './mystic-contact/mystic-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'makeups',
    pathMatch: 'full'
  },
{
  path: 'makeups',
  component: MysticMakeupsComponent
},
{
  path: 'about',
  component: MysticAboutComponent
},
{
  path: 'contact',
  component: MysticContactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
