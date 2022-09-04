import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Event {
  readonly id: string;
  readonly name: string;
  readonly location?: string | null;
  readonly admission_general?: number | null;
  readonly admission_vip?: number | null;
  readonly about_general?: string | null;
  readonly about_vip?: string | null;
  readonly event_time?: string | null;
  readonly event_image?: string | null;
  readonly ticket_image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}