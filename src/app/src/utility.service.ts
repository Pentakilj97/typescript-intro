import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { ITodo } from '../model/i-todo';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  sortArrayAlphabetically(array: ITodo[]): ITodo[]{
    const newArray=[...array]

    newArray.sort((a,b) => a.title.localeCompare(b.title))

    return newArray
  }
}
