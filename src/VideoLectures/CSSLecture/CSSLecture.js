import React, { useState } from 'react';
import './CSSLecture.css';

// import video1 from './as2.mp4'

function CSSLecture() {


    const [videoURL, updateVideoURL] = useState(1);

    return (
        <div>
            <h3 style={{ color: "red" ,fontSize:"40px",marginRight:"500px"}}>Learn CSS</h3>
            {
                videoURL == 1 ?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/xv-bBxaa7WU?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="CSS tutorial for beginners 🎨" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>:
                videoURL == 2?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/UzURcO1MnEU?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS fonts in 3 minutes 🆒" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>:
                videoURL == 3?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/6RuzhtsbSIg?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS borders in 2 minutes 🔲" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  :
                videoURL == 4?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/YA8ZciJa64k?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS background in 3 minutes 🌆" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> :
                videoURL == 5?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/2ZlVV0MM1a0?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS margins in 4 minutes 📏" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  :
                videoURL == 6?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/xIJvkm-CgFQ?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS float in 3 minutes 🎈" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   :
                videoURL == 7?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/Pp7UXS3P6jY?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS position in 5 minutes 🎯" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> :
                videoURL == 8?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/fWnXVwULqrE?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS pseudo classes in 5 minutes 👨‍👧‍👦" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 :
                 videoURL == 9?
                 <iframe className="videoElementPlay" src="https://www.youtube.com/embed/tb1ou6W5M5s?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS pseudo elements in 4 minutes 🔎" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 : videoURL == 10?
                 <iframe className="videoElementPlay" src="https://www.youtube.com/embed/qTEDcXJ-dzw?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS shadows in 2 minutes 👥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>:
                  videoURL == 11?
                  <iframe className="videoElementPlay" src="https://www.youtube.com/embed/dHpMIy517E4?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS icons in 3 minutes 🏠" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   :
                 videoURL == 12?
                 <iframe className="videoElementPlay" src="https://www.youtube.com/embed/aii2itPgRVs?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS transform in 4 minutes 🔄" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  :
                  <iframe className="videoElementPlay" src="https://www.youtube.com/embed/O7mTUtHDP5E?list=PLZPZq0r_RZOONc3kkuRmBOlj67YAG6jqo" title="Learn CSS animation in 8 minutes 🎞️" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          }
            <br/>
            <div className='ButtonsScrollingOption'>
                <button className='videoChangeButton' onClick={() => updateVideoURL(1)}>1 - CSS tutorial for beginners 🎨</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(2)}>2 - Learn CSS fonts in 3 minutes 🆒</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(3)}>3 - Learn CSS borders in 2 minutes 🔲</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(4)}>4 - Learn CSS background in 3 minutes 🌆</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(5)}>5 - Learn CSS margins in 4 minutes 📏</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(6)}>6 - Learn CSS float in 3 minutes 🎈</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(7)}>7 - Learn CSS position in 5 minutes 🎯</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(8)}>8 - Learn CSS pseudo classes in 5 minutes 👨‍👧‍👦</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(9)}>9 - Learn CSS pseudo elements in 4 minutes 🔎</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(10)}>10 - Learn CSS shadows in 2 minutes 👥</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(11)}>11 - Learn CSS icons in 3 minutes 🏠</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(12)}>12 - Learn CSS transform in 4 minutes 🔄</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(13)}>13 - Learn CSS animation in 8 minutes 🎞️</button>
            </div>
        </div>
    );
}

export default CSSLecture;
