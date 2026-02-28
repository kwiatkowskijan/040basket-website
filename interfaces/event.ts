export interface IEvent {
  title: string;
  slug: string;
  startDate: string;
  endDate: string;
  type: EventType;
  details: TournamentDetails | TrainingDetails | OtherDetails;
}

export interface TournamentDetails {
  registrationLink: string;
}

export interface TrainingDetails {
  location: string;
  coach: string;
}

export interface OtherDetails {
  description: string;
}

export enum EventType {
  Tournament = "tournament",
  Training = "training",
  Other = "other",
}
