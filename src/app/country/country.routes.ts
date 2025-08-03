
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCountryPageComponent } from './pages/by-Country-Page/by-Country-Page.component';
import { ByRegionPageComponent } from './pages/by-Region-Page/by-Region-Page.component';
import { CountryPageComponent } from './pages/Country-Page/Country-Page.component';


export const CountryRoutes: Routes = [

    {
        path: '',
        component: CountryLayoutComponent,
        children: [

            {
                path: 'by-capital',
                component: ByCapitalPageComponent,
            },
            {
                path: 'by-country',
                component: ByCountryPageComponent
            },
            {
                path:'by-region',
                component: ByRegionPageComponent
            },
            {
                path: 'by/:code',
                component: CountryPageComponent


            },

            {
                path: '**',
                redirectTo: 'by-capital',

            }

        ]
    }
];

export default CountryRoutes;