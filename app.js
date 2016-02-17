import styles from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import gallery from './components/gallery/gallery.jsx';


var imgs = [
    {src: 'http://placehold.it/50x50', alt: 'alt text', title:'random title 1'},
    {src: 'http://placehold.it/50x50', alt: 'alt text', title:'random title 2'},
    {src: 'http://placehold.it/50x50', alt: 'alt text', title:'random title 3'},
    {src: 'http://placehold.it/50x50', alt: 'alt text', title:'random title 4'},
    {src: 'http://placehold.it/50x50', alt: 'alt text', title:'random title 5'}
];
console.log(gallery);

ReactDOM.render(
    <gallery images={imgs} />,
    document.getElementById('app')
);
