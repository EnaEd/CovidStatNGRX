export class BaseInfectedModel {
  recovered: number;
  deaths: number;
  confirmed: number;
  location: string;
  lastChecked: Date;
  lastReported: Date;

  error: string[];

  constructor(
    recovered: number,
    deaths: number,
    confirmed: number,
    location: string,
    lastChecked: string,
    lastReport: string
  ) {
    this.confirmed = confirmed;
    this.deaths = deaths;
    this.lastChecked = new Date(lastChecked);
    this.lastReported = new Date(lastReport);
    this.recovered = recovered;
    this.location = location;
  }
}
