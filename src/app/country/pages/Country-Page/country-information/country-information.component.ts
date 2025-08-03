import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { CountryStatComponent } from "../../../components/Country-stat/Country-stat.component";

@Component({
  selector: 'country-information',
  imports: [DecimalPipe, CountryStatComponent],
  templateUrl: './country-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInformationComponent {
  country = input.required<Country>()
  currentYear =computed(()=>{
    return new Date().getFullYear()
  })
}
