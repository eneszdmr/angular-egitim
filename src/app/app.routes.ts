import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonelKayitComponent } from './components/personel-kayit/personel-kayit.component';
import { AnaSayfaComponent } from './components/ana-sayfa/ana-sayfa.component';
import { HataComponent } from './components/hata/hata.component';
import { authGuard } from './guard/auth.guard.spec';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'personelKayit', component: PersonelKayitComponent },
    { path: 'hata', component: HataComponent },
    {
        path: 'anaSayfa', component: AnaSayfaComponent, canActivate: [authGuard],
        children: [
            { path: 'personelKayit', component: PersonelKayitComponent },
        ]
    },
    { path: '**', redirectTo: 'hata' }
];
