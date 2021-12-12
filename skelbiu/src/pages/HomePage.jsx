import React from "react";
import css from './HomePage.module.css'


function HomePage(){
    return(
        <div className={css.container}>
            <h1 className={css.h1}>Browse Categories</h1>
            <hr/>
            <div className={css.cards}>
                <div className={css.card} >
                    <a>Clothes</a>
                </div>
                <div className={css.card} >
                    <a>Animals</a>
                </div>
                <div className={css.card} >
                    <a>Furniture</a>
                </div>
                <div className={css.card} >
                    <a>Clothes</a>
                </div>
                <div className={css.card} >
                    <a>Real estate</a>
                </div>
                <div className={css.card} >
                    <a>Tools</a>
                </div>
                <div className={css.card} >
                    <a>Cars</a>
                </div>
                <div className={css.card} >
                    <a>Technology</a>
                </div>




            </div>

        </div>

    )
}
export default HomePage
