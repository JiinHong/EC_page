import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Recruit.module.css";


function Main() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Apply');
    }
    return (
        <div className={styles.container}>
            <div className={styles.firstContainer}>
                <h1>EC와 함께하고 싶다면?</h1>
                <button className={styles.button} onClick={handleClick}>지원하러 가기</button>
            </div>
            <FAQ></FAQ>
        </div>
    )
}

function FAQ() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleAccordion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.containerfaq}>
            <h1>FAQ</h1>
            <div className={styles.accordion}>
                {faqData.map((item, index) => (
                    <div className={styles.accordionitem} key={index}>
                        <button
                            id={`accordion-button-${index + 1}`}
                            aria-expanded={expandedIndex === index}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className={styles.accordiontitle}>{item.question}</span>
                            <span className={styles.icon} aria-hidden="true"></span>
                        </button>
                        <div className={styles.accordioncontent}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const faqData = [
    {
        question: '자주하는 질문1',
        answer: '설명',
    },
    {
        question: '자주하는 질문2',
        answer: '설명',
    },
    {
        question: '자주하는 질문3',
        answer: '설명',
    },
    {
        question: '자주하는 질문4',
        answer: '설명',
    },
    {
        question: '자주하는 질문5',
        answer: '설명',
    },
];

export default Main;