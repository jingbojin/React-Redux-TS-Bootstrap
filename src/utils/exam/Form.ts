import { Dispatch, FormEvent } from 'react';
import * as H from 'history';
import { finishTimer } from '../../redux/FormSlice';
import { ERouterUrl } from '../../router/PagesRouter';

export const handleFormSubmit = (
  dispatch: Dispatch<any>,
  routerHistory: H.History,
) => {
  return (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(finishTimer());
    routerHistory.push(ERouterUrl.result);
  }
}
