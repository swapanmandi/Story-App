import React from "react";
import './article.css';
import {Routes, Route} from "react-router-dom";
import Stories from '../Components/stories';
import Navbar from "./Navbar";
import Latest from '../pages/latest';
import Categories from '../pages/categories';
import About from '../pages/about';
import Contact from '../pages/contact';

function Article(){
    return(
        <article className="article">
            <Navbar />
            
             <Routes>
                        <Route exact path='/' element={<Stories />} />
                        <Route exact path='/latest' element={<Latest />} />
                        <Route exact path='/categories' element={<Categories />} />
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/contact' element={<Contact />} />
                    </Routes>
                 
        </article>

    )
}

export default Article;