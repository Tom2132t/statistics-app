import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { Observable } from 'rxjs';
import { ApiUrlsConfig } from '../api-urls.config';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getLeads(): Observable<ClientModel[]> {
    const url = ApiUrlsConfig.leads.leads();

    return this.http.get<ClientModel[]>(url);
  }

  getLead(id: number): Observable<ClientModel> {
    const url = ApiUrlsConfig.leads.leadById(id);

    return this.http.get<ClientModel>(url);
  }

  createLead(lead: ClientModel): Observable<ClientModel> {
    const url = ApiUrlsConfig.leads.leads();

    return this.http.post<ClientModel>(url, lead);
  }

  updateLead(id: number, lead: ClientModel): Observable<ClientModel> {
    const url = ApiUrlsConfig.leads.leadById(id);

    return this.http.put<ClientModel>(url, { ...lead });
  }

  deleteLead(id: number): Observable<ClientModel> {
    const url = ApiUrlsConfig.leads.leadById(id);

    return this.http.delete<ClientModel>(url);
  }
}
