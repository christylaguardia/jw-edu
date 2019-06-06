import React from "react"
import "bulma/css/bulma.css";
import { Header } from '../components/Header';
import { Totals } from '../components/Totals';
import { Tags } from '../components/Tags';
import { Navigation } from '../components/Navigation';;

export default () => (
  <div>
    <Navigation />
    <Header />
    <Totals />
    <Tags />
  </div>
);
