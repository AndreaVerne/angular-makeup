import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Makeup } from './makeup-list/Makeup';

const URL = 'https://638a03194eccb986e8a0fd49.mockapi.io/makeup';

@Injectable({
  providedIn: 'root'
})
export class MakeupDataService {

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Makeup[]>{
    return this.http.get<Makeup[]>(URL).pipe(
      tap((makeups: Makeup[]) => makeups.forEach(makeups => makeups.quantity = 0))
    );
  }
}
