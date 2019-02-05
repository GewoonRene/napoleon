import './Chapter.scss';
import React from 'react';

const Chapterlist = (props) => {

    return (
        <section className="chapterlist">
            {props.children}
        </section>
    )

} 

export default Chapterlist;