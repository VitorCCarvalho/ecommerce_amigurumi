import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    { path: 'cart', component: ShoppingCartComponent},
    { path: 'account', component: LoginComponent},
    { path: 'item', component: ItemPageComponent}
];
