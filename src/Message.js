import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import './Message.css'

function Message(prop) {
    const isUser = (prop.currentUser === prop.user);
    const blankString = '';

    return (
        <div>
                {/* `message ${isUser && 'message_user'}` */}
                {/* (!isUser)?"msg":"msg__user" */}
                {/* `msg ${isUser && 'msg__user'}` */}
            {
                (!prop.message == blankString) ? (
                    <div className = {(!isUser)?"msg":"msg__user"} >
                        <Card variant="outlined" className = {(isUser)?"msg__usercard":"msg__guestcard"} >
                            <CardContent>
                                <Typography className= "typo" variant="h5" component="h2">
                                    {prop.user}: {prop.message}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Message
