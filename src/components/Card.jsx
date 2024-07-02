import React from "react";

function Card({title, content,gptSrc,linkSrc,downloadSrc}){
    return (
        <div id="card">
            <p id="card-title">{title}</p>
            <p id="card-content">{content}</p>
            <ul id="card-lists">
                <li><a href={gptSrc}><i class="fa-solid fa-arrow-up-right-from-square icon"></i>Ask GPT</a></li>
                <li><a href={linkSrc}><i class="fa-solid fa-link icon"></i>Link</a></li>
                <li><a href={downloadSrc}><i class="fa-regular fa-circle-down icon"></i>Download</a></li>
            </ul>
        </div>
    )
}

export default Card;