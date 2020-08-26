import { BaseInfectedModel } from './base-infected.model';
export class DetailInfectedModel extends BaseInfectedModel {
  city: string;
  province: string;
  country: string;
  lastUpdate: Date;
  keyId: string;
}
