import React from "react";
function ProfileCard({name,img,content,gptSrc,profileSrc}){
    return (
        <div id="card">
            <div id="profile-header-card">
                <img src={img} id="img-display"/>
                <p id="profile-card-title">{name}</p>
            </div>
            <p id="card-content">{content}</p>
            <ul id="card-lists">
                <li><a href={gptSrc}><i class="fa-solid fa-arrow-up-right-from-square icon"></i>Ask GPT</a></li>
                <li><a href={profileSrc}><i class="fa-brands fa-linkedin icon"></i>Profile</a></li>
            </ul>
        </div>
    )
}

export default ProfileCard;