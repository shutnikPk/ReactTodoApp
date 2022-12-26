import { createPortal } from 'react-dom';

const portal = document.getElementById('portal');

function Portal({ children }) {

    return (
        createPortal(children, portal)
    );
}

export default Portal;
