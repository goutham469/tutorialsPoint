import React, { useState } from 'react';
import './HTMLLecture.css';

// import video1 from './as2.mp4'

function HTMLLecture() {


    const [videoURL, updateVideoURL] = useState(1);

    return (
        <div>
            <h3 style={{ color: "white" }}>Learn HTML</h3>
            {
                videoURL == 1 ?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/dD2EISBDjWM?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 00 - Introduction to HTML" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                videoURL == 2?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/-USAeFpVf_A?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 01 - Creating the first web page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                videoURL == 3?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/i3GE-toQg-o?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 02 - Line breaks, spacing, and comments" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                videoURL == 4?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/09oErCBjVns?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 03 - Ordered and Unordered lists" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                videoURL == 5?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/wvR40su_XBM?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 04 - Creating a table" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                videoURL == 6?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/U4UHoiK6Oo4?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 05 - Creating a web link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                videoURL == 7?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/bCt2FnyY7AE?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 06 - Creating links within same web page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                videoURL == 8?
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/Zy4KJeVN7Gk?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 07 - Adding a image to a web page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                :
                <iframe className="videoElementPlay" src="https://www.youtube.com/embed/dM12ctixdT4?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB" title="HTML Tutorial for Beginners - 08 - Resizing and sizing images" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            }
            <br/>
            <div className='ButtonsScrollingOption'>
                <button className='videoChangeButton' onClick={() => updateVideoURL(1)}>00 - Introduction to HTML</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(2)}> 01 - Creating the first web page</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(3)}>02 - Line breaks, spacing, and comments</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(4)}> 03 - Ordered and Unordered lists</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(5)}>04 - Creating a table</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(6)}>05 - Creating a web link</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(7)}>06 - Creating links within same web page</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(8)}>07 - Adding a image to a web page</button>
                <button className='videoChangeButton' onClick={() => updateVideoURL(9)}>08 - Resizing and sizing images</button>
            </div>
        </div>
    );
}

export default HTMLLecture;
