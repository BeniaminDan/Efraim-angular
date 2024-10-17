import {
  ChangeDetectionStrategy,
  Component,
  Inject, Input,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { DOCUMENT } from '@angular/common';

import { EventColor } from 'calendar-utils';
import {EventsService} from "../services/events-service";

@Component({
  selector: 'events-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'events-calendar.component.html',
  styleUrls: ['events-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventsCalendarComponent {
  @Input() events: any[] = [];
  @Input() eventInstances: any[] = [];

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  private readonly darkThemeClass = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: any, private eventsService: EventsService) {}

  ngOnInit(): void {
    this.document.body.classList.add(this.darkThemeClass);
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.darkThemeClass);
  }

  getEventTitleById(eventId: string): string {
    return this.events.find(event => event.id === eventId)?.name;
  }

  protected readonly JSON = JSON;
}
