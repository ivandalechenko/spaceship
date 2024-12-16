import './scss/RunText.scss';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useRef } from 'react';
import { useEffect } from 'react';
gsap.registerPlugin(TextPlugin);
export default () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.to(textRef.current, {
            duration: 20, // Время анимации
            text: "Wen Binance / HODL / Wen Lambo / ATH broken again / Wen moon / Higher / Wen 1 billion market cap", // Текст для вывода
            ease: "none", // Линейная анимация
            // repeat: -1, // Бесконечное повторение
            // repeatDelay: 1, // Пауза перед повторением
        });
    }, []);
    return (
        <div className='Faq_header' ref={textRef}>
            {/* What is Patchy? */}
        </div>
    )
}