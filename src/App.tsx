import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import { JSX } from 'react/jsx-runtime';
import MovieInfo from './MovieInfo';

function App(): JSX.Element {
 return (
 <div>
 <h1>Kerala Theatre Portal</h1>
 <Welcome name="CDIPD Team" />
 <MovieInfo title="meesha madhavan" language='mal' rating={2}/>
 </div>
 );
}
export default App;