import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteComponentProps,
  Switch
} from 'react-router-dom';
import { Counter } from '../views/pages/counter/Counter';
import { Result } from '../views/pages/result/Result';
import { Exam } from '../views/pages/exam/Exam';
// import ExamWithoutHook from '../views/pages/exam/ExamWithoutHook';

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
            component={this.renderExam}
          >
          
          </Route>
          <Route
            exact
            path={ERouterUrl.result}
          >
            <Result/>
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
  
  private renderExam = (
    routeComponentProps: RouteComponentProps
  ): JSX.Element => {
    // To showcase React Class component vs Functional component:
    // return (<ExamWithoutHook routerHistory={routeComponentProps.history}/>);
    
    return (<Exam />);
  }
};
