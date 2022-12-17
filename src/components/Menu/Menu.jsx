import React, {
    useState,
    useRef,
    useEffect
} from 'react';

import MenuItem from '../MenuItem/MenuItem';

import './Menu.css';

function Menu({ onClickDeleteButton, id }) {

    const [isOpen, setIsOpen] = useState(false);

    function useOutside(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutside(wrapperRef);

    const onDeleteHandler = () => {
        setIsOpen(false);
        onClickDeleteButton(id);
    };

    return (
        <div
            ref={wrapperRef}
            className='sub-menu' >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='sub-menu--dots-container'>
                <span className='sub-menu--dot'></span>
                <span className='sub-menu--dot'></span>
                <span className='sub-menu--dot'></span>
            </div>
            {
                isOpen &&
                <div className='sub-menu--buttons-container'>
                    <MenuItem
                        onClick={null}
                        name={'done'}
                    />


                    <MenuItem
                        onClick={null}
                        name={'edit'}
                    />


                    <MenuItem
                        onClick={onDeleteHandler}
                        name={'delete'}
                    />

                </div>
            }

        </div >
    );
}

export default Menu;
