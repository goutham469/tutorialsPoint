import React, { useState } from 'react';
import './JsLecture.css';

// import video1 from './as2.mp4'

function JsLecture() {


    const [videoURL, updateVideoURL] = useState(1);

    return (
        <div>
            <h3 style={{ color: "white" }}>Learn HTML</h3>
            {
                videoURL == 1 ?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/Ihy0QziLDf0?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="JavaScript tutorial for beginners 🌐" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  :
                videoURL == 2?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/nbX0MIV7-Ek?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="JavaScript VARIABLES are easy! 📦" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   :
                videoURL == 3?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/FyGIKD2fxIo?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="JavaScript ARITHMETIC OPERATORS in 8 minutes! ➕" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  :
                videoURL == 4?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/JeXqaKeJSRI?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="How to accept JavaScript USER INPUT in 5 minutes 💬" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  :
                videoURL == 5?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/jLRnuVHwHKk?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Learn JavaScript TYPE CONVERSION in 5 minutes! 💱" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  :
                videoURL == 6?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/3M53uhj0D4k?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="JavaScript CONSTANTS are easy 🚫" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 :
                videoURL == 7?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/uSJXZ3LkABE?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="JavaScript COUNTER PROGRAM 🔢" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   :
                videoURL == 8?
                <iframe width="866" height="487" src="https://www.youtube.com/embed/uy-1WNqecnI?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Why the Math object in JavaScript is useful 🧮" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  :
                  videoURL == 9 ?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/K2upGO5Bb48?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Random number generator in JavaScript ⁉" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      :
                  videoURL == 10?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/PgUXiprlg1k?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="If statements in JavaScript are easy 🤔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        :
                  videoURL == 11?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/SgxzJdqhyfw?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="The JavaScript checked property is easy ✅" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     :
                  videoURL == 12?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/atS_A9HHAVo?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="JavaScript TERNARY OPERATOR in 6 minutes!  ❓" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       :
                  videoURL == 13?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/z2fcWdoph4U?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Learn JavaScript SWITCHES in 6 minutes! 💡" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                       :
                  videoURL == 14?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/wssvLtVSFeI?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Useful JavaScript STRING METHODS 🧵" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    :
                  videoURL == 15?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/sPPGd4Lfh3s?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Learn JavaScript STRING SLICING in 8 minutes! ✂️" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  :
                  videoURL == 16?
                  <iframe width="866" height="487" src="https://www.youtube.com/embed/J4YhlDsNqeE?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Learn JS METHOD CHAINING in 5 minutes! ⛓" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                     :
                  
                     <iframe width="866" height="487" src="https://www.youtube.com/embed/ovWYhDVQiR8?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" title="Learn JavaScript LOGICAL OPERATORS in 5 minutes ❗" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              }
            <br/>
            <div className='ButtonsScrollingOption'>
                <button className='videoChangeButton' onClick={() => updateVideoURL(1)}>00 - JavaScript tutorial for beginners 🌐</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(2)}> 01 - JavaScript VARIABLES are easy! 📦</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(3)}>02 - JavaScript ARITHMETIC OPERATORS in 8 minutes! ➕</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(4)}> 03 - How to accept JavaScript USER INPUT in 5 minutes 💬</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(5)}>04 - Learn JavaScript TYPE CONVERSION in 5 minutes! 💱</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(6)}>05 - JavaScript CONSTANTS are easy 🚫</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(7)}>06 - JavaScript COUNTER PROGRAM 🔢</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(8)}>07 - Why the Math object in JavaScript is useful 🧮</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(9)}>08 - Random number generator in JavaScript ⁉s</button>

                <button className='videoChangeButton' onClick={() => updateVideoURL(10)}>9 - If statements in JavaScript are easy 🤔</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(11)}> 10 - The JavaScript checked property is easy ✅</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(12)}>11 - JavaScript TERNARY OPERATOR in 6 minutes!  ❓s</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(13)}>12 - Learn JavaScript SWITCHES in 6 minutes! 💡</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(14)}>13 - Creating a table</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(15)}>14 - Useful JavaScript STRING METHODS 🧵</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(16)}>15 - Learn JavaScript STRING SLICING in 8 minutes! ✂️</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(17)}>16 - Learn JS METHOD CHAINING in 5 minutes! ⛓</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(18)}>17 - Learn JavaScript LOGICAL OPERATORS in 5 minutes ❗</button>
            </div>
        </div>
    );
}

export default JsLecture;
