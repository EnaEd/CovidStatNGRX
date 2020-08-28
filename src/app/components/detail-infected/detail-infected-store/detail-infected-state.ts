import { DetailInfectedModel } from './../../../models/detail-infected.model';

export interface IDetailInfectadState {
  detailInfected: DetailInfectedModel[];
}

export const initialDetailState: IDetailInfectadState = {
  detailInfected: null,
};
