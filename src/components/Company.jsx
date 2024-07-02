import React from "react";
import Card from "./Card";
function CompanySection(){
    const cardContent = [
        {
            title: "Enigma's Camp Company Profile",
            content: "Enigma Camp (PT Enigma Cipta Humanika) specializes in the business of IT Bootcamp and IT Talent Management, and it was officially established on August 19, 2019. Enigma Camp is driven by experiences that build software engineers to support our client's businesses",
            gptSrc: "https://chatgpt.com/g/g-lrBqoSTJU-enigma-camp-knowledge-hubinator",
            // this link sends to enigma's canva design
            linkSrc: "https://www.canva.com/design/DAF7P45zHvE/A7CKao-LslL3QofondMstA/view?utm_content=DAF7P45zHvE&utm_campaign=designshare&utm_medium=link&utm_source=editor",
            downloadSrc: "/download/Enigma Camp’s Brand Identity.pdf"
        },{
            title: "Brand Identity",
            content: "Established in 2017 as part of PT. Square Techno Indonesia, evolved into PT. Enigma Cipta Humanika in August 2019. Specialized in IT, offering two key programs: Talent and Training as a Service. Our mission is to empower software engineers and support your business.",
        },{
            title: "Product Knowledge Programs",
            content: "Intensive training programs such as IT, Corporate, and Remote BootCamps designed to take users from beginner to job-ready using Golang and Java. This include practical classes, mentoring sessions, and job placement assistance. The bootcamps are designed for fresh graduates, career switchers, and job seekers.",
        },{
            title: "Design Thinking - Enigma Camp's Workflow",
            content: '"Bridging the gap between education and industry.", Our vision not only emphasizes on providing a positive impact through extensive learning and education, but we also focuses on minimizing the gap between graduates skills and industry requirements.​'
        }
    ]
    return (
        <div id="company-page">
            <h1 id="company-title">Company</h1>
            <div id="card-container">
                <Card 
                title={cardContent[0].title} 
                content ={cardContent[0].content} 
                gptSrc = {cardContent[0].gptSrc}
                linkSrc = {cardContent[0].linkSrc}
                downloadSrc={cardContent[0].downloadSrc}
                />
                <Card 
                title={cardContent[1].title} 
                content ={cardContent[1].content} 
                gptSrc = {cardContent[0].gptSrc}
                linkSrc = {cardContent[0].linkSrc}
                downloadSrc={cardContent[0].downloadSrc}
                />
                <Card 
                title={cardContent[2].title} 
                content ={cardContent[2].content} 
                gptSrc = {cardContent[0].gptSrc}
                linkSrc = {cardContent[0].linkSrc}
                downloadSrc={cardContent[0].downloadSrc}
                />
                <Card 
                title={cardContent[3].title} 
                content ={cardContent[3].content} 
                gptSrc = {cardContent[0].gptSrc}
                linkSrc = {cardContent[0].linkSrc}
                downloadSrc={cardContent[0].downloadSrc}
                />
            </div>
            <hr></hr>
        </div>
    )
}

export default CompanySection;