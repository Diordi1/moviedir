import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';
import { WeatherComponent } from './weather/weather.component';
import { PnrComponent } from './pnr/pnr.component';
import { ChecktrainComponent } from './checktrain/checktrain.component';

export const routes: Routes = [
    {path:'head',component:HeaderComponent},
    {path:'temp',component:TempComponent},
    {path:'',component:WeatherComponent},
    {path:'pnr',component:PnrComponent},
    {path:'check',component:ChecktrainComponent}
    // {path:'**',component:ErrorComponent}
];
