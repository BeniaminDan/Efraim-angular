import { Component, OnInit } from "@angular/core";
import { EventsService } from "../services/events-service";

@Component({
  selector: 'events-component',
  templateUrl: 'events-component.html',
})

export class EventsComponent implements OnInit {
  events: any[] = [];
  eventInstances: any[] = [];

  eventsSubscription: any;
  eventInstancesSubscription: any;

  constructor(private eventsService: EventsService) {
    this.eventsService.getEvents().subscribe((data: any) => {
      this.eventsService.updateEvents(data.data);
    });

    this.eventsService.getEventInstances().subscribe((data: any) => {
      this.eventsService.updateEventInstances(data.data);
    });

    this.eventsSubscription = this.eventsService.events$.subscribe((data: any) => {
      this.events = data;
    });

    this.eventInstancesSubscription = this.eventsService.eventsDetails$.subscribe((data: any) => {
      this.eventInstances = this.mapEvents(data);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.eventInstancesSubscription.unsubscribe();
  }

  mapEvents(data: any[]) {
    return data.map((event: any) => {
      return {
        start: new Date(event.startDate),
        end: new Date(event.endDate),
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
        data: event
      }
    });
  }
}