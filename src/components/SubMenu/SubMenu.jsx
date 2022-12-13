import React, {
    useState
} from 'react';

import './SubMenu.css';

function SubMenu({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sub-menu'>
            <div onClick={() => setIsOpen(!isOpen)} className='sub-menu--dots-container'>
                <span className='sub-menu--dot'></span>
                <span className='sub-menu--dot'></span>
                <span className='sub-menu--dot'></span>
            </div>
            {isOpen &&
                <div className='sub-menu--buttons-container'>
                    {children}
                </div>
            }

        </div>
    );
}

export default SubMenu;