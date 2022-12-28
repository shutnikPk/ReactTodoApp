import React from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

function Tooltip({ x, y, msg = 'Tooltip text' }) {

    const tooltip = document.getElementById('tooltip');
    const styleTooltip = {
        left: `${x + 55}px`,
        top: `${y + 5}px`
    };

    return createPortal(
        <div style={styleTooltip} className="tooltip" >
            <span className="tooltiptext">{msg}</span>
        </div >, tooltip
    );

}

export default Tooltip;
