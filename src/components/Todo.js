import React, { useContext } from 'react'
import { Context } from "../context/Context"
import { dataDisplay } from '../helper/app-utils';
import { Container, Button, Box, Card, FormControl, CardContent, TextField, Typography } from '@mui/material';


function Todo() {

    const {
        data,
        note,
        updateNote,
        deleteTodo,
        completedTodo,
        createdTodo,
    } = useContext(Context)


    const todoData = dataDisplay(data, completedTodo, deleteTodo)

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '1em'
            }}
        >
            <Card sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <CardContent
                    sx={{
                        width: '70%',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        variant="h3"
                    >Todo List</Typography>
                    <FormControl
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            sx={{
                                margin: '1em'
                            }}
                            placeholder="Add your Tasks Here"
                            onChange={(e) => updateNote(e.target.value)}
                            value={note}
                            inputProps={{
                                maxLength: 40
                            }}
                        />
                        <Button
                            variant='outlined'
                            onClick={createdTodo}

                        >Add</Button>
                    </FormControl>

                    <Box sx={{
                        textAlign: 'center',
                    }}>
                        {todoData}
                    </Box>

                </CardContent>


            </Card>


        </Container>
    )
}

export default Todo
