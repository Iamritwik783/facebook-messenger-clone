import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'

function Message(prop) {
    return (
        <div>
            <div>

            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {prop.user}: {prop.message}
                    </Typography>
                </CardContent>
            </Card>

            </div>
        </div>
    )
}

export default Message
