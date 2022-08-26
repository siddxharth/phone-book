import React from 'react'
import { Box, Button } from 'grommet'

export default function NavBar() {
    return (
        <Box flex direction='row' width='medium' align='center' justify='between'>
            <Button primary label='View'></Button>
            <Button primary label='Add New'></Button>
            <Button primary label='Update'></Button>
        </Box >
    )
}
