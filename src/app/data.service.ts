import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private STACKOVERFLOW_ADVANCE_SEARCH_API_ENDPOINT = "https://api.stackexchange.com/2.2/search/advanced"

  constructor(private httpClient: HttpClient) { 
  }
  public sendGetRequest() {
    return this.httpClient.get(this.STACKOVERFLOW_ADVANCE_SEARCH_API_ENDPOINT)
  }
}
