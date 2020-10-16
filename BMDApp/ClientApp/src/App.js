import React, { Component } from 'react';
import ApexCharts from 'apexcharts'

import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Floor1Room1 } from './components/Floor1Room1';
import { Floor1Room2 } from './components/Floor1Room2';
import { Floor2Room1 } from './components/Floor2Room1';
import { Floor2Room2 } from './components/Floor2Room2';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/floor1room1' component={Floor1Room1} />
            <Route path='/floor1room2' component={Floor1Room2} />
            <Route path='/floor2room1' component={Floor2Room1} />
            <Route path='/floor2room2' component={Floor2Room2} />
      </Layout>
    );
  }
}
