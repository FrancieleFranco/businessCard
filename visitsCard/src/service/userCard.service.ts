import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userResponse } from 'src/model/userResponse.interface';
import { userResquest } from 'src/model/userRequest.interface';

@Injectable({
  providedIn: 'root',
})
export class UserCardService {
  private apiUrl = 'http://localhost:5000/usuarios';

  constructor(private http: HttpClient) {}

  getUser(): Observable<userResponse[]> {
    return this.http.get<userResponse[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<userResponse> {
    return this.http.get<userResponse>(`${this.apiUrl}/${id}`);
  }

  createUser(usuario: userResquest): Observable<userResponse> {
    return this.http.post<userResponse>(this.apiUrl, usuario);
  }

  updateUser(id: number, usuario: userResquest): Observable<userResponse> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, usuario);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
