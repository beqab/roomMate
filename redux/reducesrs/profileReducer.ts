import { EActionTypes } from "../action-types";
import { TActions } from "../actions";

interface ISearchReducer {
  user: null | any;
}

const InitState: ISearchReducer = {
  user: null,
};

export const searchReducer = (
  state: ISearchReducer = InitState,
  action: TActions
): ISearchReducer => {
  switch (action.type) {
    case EActionTypes.SET_USER_ACTION:
      return { user: action.payload };

    default:
      return state;
  }
};
