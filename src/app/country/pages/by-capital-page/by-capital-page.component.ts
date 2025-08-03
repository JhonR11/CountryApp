import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountrySearchInputComponent } from "../../components/country-search-input/country-search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import {rxResource} from '@angular/core/rxjs-interop'
import { firstValueFrom, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService)

  activatedRoute= inject(ActivatedRoute)
  router= inject(Router)

  queryParam= this.activatedRoute.snapshot.queryParamMap.get('query') ?? ''

  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    request: ( ) =>({query: this.query()}),
    loader: ({request}) =>{
        console.log({query: request.query})
        if (!request.query) return of([]);
        this.router.navigate(['/country/by-capital'],{
          queryParams:{
            query: request.query,
          }
        })


        return this.countryService.searchByCapital(request.query)
    }
  })

  // isLoading = signal(false)
  // isError = signal<string|null>(null)
  // countries = signal<Country[]>([])

  // onSearch(query:string){

  //  if (this.isLoading()) return
   
   
  //  this.isLoading.set(true)
  //  this.isError.set(null)

  //  this.countryService.searchByCapital(query)
  //  .subscribe({
  //   next:(countries) =>{
  //     this.isLoading.set(false)
  //     this.countries.set(countries)
  //   },
  //   error:(err)  =>{
  //     console.log(err)
  //     this.isLoading.set(false)
  //     this.countries.set([])
  //     this,this.isError.set(err)
  //   },
  //  })
  // }
}
