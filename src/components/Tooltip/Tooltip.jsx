import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

function Tooltip({ x, y, msg = '', waitBeforeShow = 500 }) {

    const tooltip = document.getElementById('tooltip');
    const styleTooltip = {
        left: `${x + 55}px`,
        top: `${y + 5}px`
    };

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);


    return createPortal(
        <div style={styleTooltip} className={`tooltip ${isShown ? '' : 'tooltip-hiden'}`} >
            <span className="tooltiptext">{msg}</span>
        </div >, tooltip
    );
}

export default Tooltip;
