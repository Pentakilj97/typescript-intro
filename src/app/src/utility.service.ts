import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sortArrayAlphabetically(array: Todo[]): Todo[]{
    const newArray=[...array]

    newArray.sort((a,b) => a.title.localeCompare(b.title))

    return newArray
  }
}
