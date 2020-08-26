import {
  TotalInfectedActions,
  TotalInfectedActionEnum,
} from './total-infected.actions';
import {
  initialTotalInfectedState,
  ITotalInfectedState,
} from './total-infected-state';
export function totalInfectedReducer(
  state = initialTotalInfectedState,
  action: TotalInfectedActions
) {
  switch (action.type) {
    case TotalInfectedActionEnum.GetTotalInfectedSuccess: {
      console.log(action.payload);
      return {
        ...state,
        totalInfected: action.payload,
      };
    }
    case TotalInfectedActionEnum.GetTotalInfectedError: {
      return {
        ...state,
        totalInfected: action.payload,
      };
    }
    default:
      return state;
  }
}
