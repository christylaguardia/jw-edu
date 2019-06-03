import React from "react"
import "bulma/css/bulma.css";
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Totals from '../components/Totals';
import Tags from '../components/Tags';

export default () => (
  <div>
    <Navigation />
    <Header />
    <Totals />
    <Tags />
  </div>
);
