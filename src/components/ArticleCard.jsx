import React from "react";

function ArticleCard({title, content, linkSrc}){
    return (
        <div id="card">
            <p id="article-card-title">{title}</p>
            <p id="card-content">{content}</p>
            <ul id="card-lists">
                <li><a href={linkSrc}><i class="fa-solid fa-link icon"></i>Link</a></li>
            </ul>
        </div>
    )
}

export default ArticleCard;