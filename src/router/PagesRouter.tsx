import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Counter } from '../views/pages/counter/Counter';
import { Exam } from '../views/pages/exam/Exam';

export enum ERouterUrl {
  default = '/',
  counter = '/counter',
  exam = '/exam',
  result = '/result',
}

export default class PagesRouter extends React.Component<any, any> {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect
            exact
            from={ERouterUrl.default}
            to={ERouterUrl.exam}
          />
          <Route
            exact
            path={ERouterUrl.exam}
          >
            <Exam />
          </Route>
          <Route
            exact
            path={ERouterUrl.result}
          >
            <Counter/>
          </Route>
          <Route
            exact
            path={ERouterUrl.counter}
          >
            <Counter/>
          </Route>
          <Redirect from="*" to={ERouterUrl.default}/>
        </Switch>
      </BrowserRouter>
    )
  }
};
