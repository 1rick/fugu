import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { randomPodcast } from './Utilities';

// Components
import Container from './Container';
import Headline from './Headline';
import PodcastList from './PodcastList';
import Footer from './Footer';
import Nav from './Nav';

// Data
import make from '../data/make';
import learn from '../data/learn';
import relax from '../data/relax';
import outside from '../data/outside';

import './Tabs.css';

const all = [...make, ...learn, ...relax, ...outside];

randomPodcast(all);

class App extends Component {
  render() {
    return (
      <>
        <Nav />

        <Container>
          <Headline />

          <Tabs>
            <TabList>
              <Tab>All ({all.length})</Tab>
              <Tab>Make</Tab>
              <Tab>Learn</Tab>
              <Tab>Relax</Tab>
              <Tab>Outside</Tab>
            </TabList>

            <TabPanel>
              <PodcastList items={all} />
            </TabPanel>

            <TabPanel>
              <PodcastList items={make} />
            </TabPanel>


            <TabPanel>
              <PodcastList items={learn} />
            </TabPanel>

            <TabPanel>
              <PodcastList items={relax} />
            </TabPanel>

             <TabPanel>
              <PodcastList items={outside} />
            </TabPanel>

          </Tabs>

          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
