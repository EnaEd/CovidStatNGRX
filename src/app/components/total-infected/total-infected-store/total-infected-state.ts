import { TotalInfectedModel } from './../../../models/total-infected.model';

export interface ITotalInfectedState {
  totalInfected: TotalInfectedModel;
}
export const initialTotalInfectedState: ITotalInfectedState = {
  totalInfected: null,
};
