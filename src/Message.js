import React from 'react'

function Message(prop) {
    return (
        <div>
            <div>
                {prop.user}: {prop.message}
            </div>
        </div>
    )
}

export default Message
