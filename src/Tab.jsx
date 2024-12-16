import { useEffect, useRef, useState } from 'react';
import './scss/Tab.scss';
export default ({ text, selected = false, onClick }) => {
    // const [rowsCount, setrowsCount] = useState(Math.ceil(text.length / 'What is Patchy?'.length));
    const tab = useRef(null);


    return (
        <div className={`Tab ${selected && 'Tab_selected'}`} onClick={onClick}>
            {/* <div className='Tab_left free_img'>
                <div className="Tab_left_inner" style={{
                    height: tab.current.getBoundingClientRect().height || 60
                }}></div>
            </div> */}
            <div ref={tab} className={`Tab_inner ${selected && 'Tab_inner_selected'}`}>
                {text}
            </div>
            {/* <div className='Tab_right free_img'>
                <div className="Tab_right_inner" style={{
                    // height: 36 + rowsCount * 17
                }}></div>
            </div> */}
        </div>
    )
}