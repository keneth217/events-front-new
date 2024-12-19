import {UUID} from "node:crypto";


export interface Event {
  eventId: UUID;
  eventName: string;
  location: string;
  description: string;
  categoryId: UUID;
  startDate: string; // Format: YYYY-MM-DD
  endDate: string;   // Format: YYYY-MM-DD
  startTime: string; // Format: HH:mm
  endTime: string;   // Format: HH:mm
  soldOut: number;
  eventImage: File;
  creatorName: string;
  eventCost: number;
}
