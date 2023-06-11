import { useState } from 'react'
import NavMenu from "../NavMenu";
import Socials from '../Socials';

const qa = [
    { question: 'Release Date?',
        answer: 'Our target release date is sometime in October 2023!'
    },
    {
        question: 'Platforms?',
        answer: 'We intend to release for IOS and Android.'
    },
    {
        question: 'q1',
        answer: 'wdskdedwqas'
    },
    {
        question: 'q1',
        answer: 'wdskdedwqas'
    },
]

const FAQ = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div>
            <NavMenu />
            <div className="faqSection">
                <h1> FAQ </h1>
                <div className="qWrapper" >
                    <div className="accordion">
                        {qa.map((item, i) => (
                            <div className="qaitem">
                                <div className="question" onClick={() => toggle(i)}>
                                    <p>{item.question}</p>
                                    <span className="amButton"> {selected === i ? '-' : '+'} </span>
                                </div>
                                <div className={selected === i ? 'answer show' : 'answer'}> {item.answer} </div>
                            </div>

                        ))}

                    </div>
                </div>
                <Socials />
            </div>
        </div>
        
        
     );
}
 
export default FAQ;