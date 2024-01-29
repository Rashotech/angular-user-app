import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BASE_URL } from '../config/api';
import { IUser } from '../data/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${BASE_URL}/users`).
    pipe(
      catchError(this.handleError)
    );
  }

  public getSingleUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${BASE_URL}/users/${id}`).
    pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(() => new Error(error.message || "Server Error"))
  }
}
