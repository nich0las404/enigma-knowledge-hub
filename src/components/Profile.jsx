import React from "react";
import ProfileCard from "./ProfileCard";
function ProfilePage(){
    const profileContent = [
        {
            name: "Arya Saca",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdkpKtD_HCnCj3q-nWgu7whuCgMJ8BtzlvA&s",
            content: '"Enigma membantu saya memulai karir sebagai seorang programmer. Sebelumnya, saya memang sudah berkuliah di jurusan Informatika namun masih merasa skill codingnyadi bawah rata-rata. Di Enigma Camp, saya belajar from Zero to Hero. Kini saya sudah bekerja sebagai Fullstack Developer"',
            gptSrc: "https://chatgpt.com/g/g-lrBqoSTJU-enigma-camp-knowledge-hubinator",
            profileSrc: "https://www.linkedin.com/in/arya-saca-881409209/"
        },{
            name: "Saraska Lango",
            img: "https://cdn.openart.ai/uploads/image_GWbj5PkO_1694128695299_512.webp",
            content: '"Mengikuti IT bootcamp di Enigma Camp merupakan salah satu pilihan terbaik yang pernah saya buat. Ilmu yang didapatkan membuat saya berkesempatan untuk bekerja di Indivara dan bertemu orang-orang hebat sebagai langkah awal karir saya di dunia IT.”',
            profileSrc: "https://www.linkedin.com/in/saraska-lango-165708211/"
        }
    ]
    return (
        <div id="profile-page">
            <h1 id="company-title">Profile</h1>
            <div id="card-container">
                <ProfileCard
                name={profileContent[0].name}
                img={profileContent[0].img}
                content={profileContent[0].content}
                gptSrc={profileContent[0].gptSrc}
                profileSrc={profileContent[0].profileSrc}/>
                <ProfileCard
                name={profileContent[1].name}
                img={profileContent[1].img}
                content={profileContent[1].content}
                gptSrc={profileContent[0].gptSrc}
                profileSrc={profileContent[0].profileSrc}/>
            </div>
            <hr></hr>
        </div>
    )
}

export default ProfilePage;