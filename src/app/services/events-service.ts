import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { HttpService } from "./http-service";

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsSubject = new BehaviorSubject<any>([]);
  private eventInstancesSubject = new BehaviorSubject<any>([]);
  events$ = this.eventsSubject.asObservable();
  eventsDetails$ = this.eventInstancesSubject.asObservable();

  constructor(protected httpService: HttpService){}

  updateEvents(newValue: string) {
    this.eventsSubject.next(newValue);
  }

  updateEventInstances(newValue: string) {
    this.eventInstancesSubject.next(newValue);
  }

  public getEvents() {
    return this.httpService.request({
      method: 'GET',
      url: 'https://workflow.bibleworks.studio/webhook/calendar/events',
      // body: JSON.stringify(),
      loader: true
    })
  }

  public getEventInstances() {
    return this.httpService.request({
      method: 'GET',
      url: 'https://workflow.bibleworks.studio/webhook/calendar/event-instances',
      // body: JSON.stringify(),
      loader: true
    })
  }
}
