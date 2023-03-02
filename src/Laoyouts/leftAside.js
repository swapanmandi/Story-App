import React from "react";
import './leftAside.css';

function LeftAside(){
    return(
        <div className="laside">
            <h4>contents</h4>
            <div className="table-div">
                <table>
                    <ol>
                        <li className="list">The Night Train at Deoli” by Ruskin Bond</li>
                        <li className="list">There Will Come Soft Rains” by Ray Bradbury</li>
                        <li className="list">Orientation” by Daniel Orozco</li>
                    </ol>
                </table>
            </div>
        </div>
    )

}

export default LeftAside;