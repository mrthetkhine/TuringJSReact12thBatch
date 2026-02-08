'use client';

import {createPortal} from "react-dom";

function ModalDialog()
{
    return (<div>
        Modal
    </div>);
}
export default function PortalDemo()
{
    return (<div>
        Portal
        {
            createPortal(<ModalDialog/>,document.body)
        }

    </div>);
}