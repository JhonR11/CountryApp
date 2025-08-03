import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
})
export class CountrySearchInputComponent { 

  
  placeholder = input<string>('Buscar')
  debounceTime= input(500)
  initialValue = input<string>('')

  value = output<string>()

  inputValue = linkedSignal<string>(()=>this.initialValue()?? '')

  debounceEffect = effect((onCleanup)=>{
    const value = this.inputValue()
    const timeout = setTimeout(()=>{
      this.value.emit(value)
    },this.debounceTime())

    onCleanup(()=>{
    clearTimeout(timeout)
    })


  })

  

}
