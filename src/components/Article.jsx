import React from "react";
import ArticleCard from "./ArticleCard";

function ArticlePage(){
    const articleContent = [
        {
            title: "Hambatan yang Akan Dialami Sebagai Lulusan Bootcamp Programmer",
            content: "Kelulusan adalah awal dari segalanya. Sebagai lulusan bootcamp online maupun offline, tentunya akan ada berbagai tantangan dan hambatan yang dialami. Dalam artikel kali ini, akan dibahas mengenai apa saja hambatan yang dialami oleh lulusan Bootcamp Programmer beserta bagaimana cara menghadapinya.",
            link: "https://enigmacamp.com/blog/hambatan-yang-mungkin-akan-kamu-alami-sebagai-lulusan-bootcamp-programmer"
        },{
            title: "Enigma Camp Hadir di Medan Investment Business Forum & Expo 2023",
            content: "Pada Jumat, 27 Oktober 2023, Enigma Camp turut Hadir dalam acara pelaksanaan Medan Investment Business Forum & Expo. Sejalan dengan cita-cita Indonesia Emas tahun 2045, Enigma bisa berkontribusi secara aktif dalam mendukung kemajuan ekonomi negara melalui aspek pendidikan dan teknologi informasi.",
            link: "https://enigmacamp.com/blog/enigma-camp-hadir-di-medan-investment-business-forum-and-expo-2023"
        }
    ]
    return (
        <div id="article-page">
            <h1 id="company-title">Article</h1>
            <div id="card-container">
                <ArticleCard
                title={articleContent[0].title}
                content={articleContent[0].content}
                linkSrc={articleContent[0].link}/>
                <ArticleCard
                title={articleContent[1].title}
                content={articleContent[1].content}
                linkSrc={articleContent[1].link}/>
            </div>
        </div>
    )
}

export default ArticlePage;
