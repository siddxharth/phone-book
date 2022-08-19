import React from 'react'
import { Card, CardHeader, CardBody, Box, Text } from 'grommet';
import { Phone, User, Mail } from 'grommet-icons';

export default function ContactCard(props) {
    return (
        <Card width={'medium'} height={'small'} flex pad={'20px'} margin={'20px'}>
            <CardHeader flex justify='center'>
                <Box direction='row'>
                    <User color='brand' size='36px' />
                    <Text color='brand' size='36px'><b>{props.name}</b></Text>
                </Box>
            </CardHeader>
            <CardBody flex align='center' justify='around'>
                <Box direction='row'><Phone size='28px' color='dark-2' /><Text color='dark-2' size='24px'>{props.phone}</Text></Box>
                <Box direction='row'><Mail size='28px' color='dark-2' /><Text color='dark-2' size='24px'>{props.email}</Text></Box>
            </CardBody>
        </Card>
    )
}