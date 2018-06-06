import { push } from 'react-router-redux';
import RestClient from '../../utilities/rest';
import {
  AppLoad,
  getActionType,
  getActionTypes,
  getActionCreator,
  getReducer,
  on
} from '../../utilities/redux';
import Notifications from 'react-notification-system-redux';

// Types
export const SlipTypes = getActionTypes('SLIP');

export const genrate = data => {
  return {
    types: SlipTypes,
    callAPI: () => RestClient.post('payslip/genrate', data),
    handleAction: ({ type, payload, store }) => {
      switch (type) {
        case SlipTypes.SUCCESS:
          store.dispatch(
            Notifications.success({
              title: 'Success',
              message: JSON.stringify(payload.data, null, 4)
            })
          );
          return;
        default:
          return;
      }
    }
  };
};

on(SlipTypes.ERROR, ({ payload, store }) => {
  store.dispatch(Notifications.warning({ title: 'Warning', ...payload }));
});

const initialState = {
  isLoading: false
};

// Reducer
export default getReducer(initialState, {
  [AppLoad]: (state, { payload }) => ({
    ...state,
    isLoading: payload
  })
});
