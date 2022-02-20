import { Paper, Stack, Button } from '@mui/material';
import { stylingCompleted, stylingNotCompleted } from "./style-utils"
import DeleteIcon from '@mui/icons-material/Delete';

export function dataDisplay(data, completedTodo, deleteTodo) {

    const todoData = data.map(todo => (
        <div key={todo._id}>

            <Stack sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Paper
                    sx={{
                        width: '70%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        textAlign: 'center',
                        border: '1px solid black',
                        margin: '1em'
                    }}>
                    {
                        todo.completed === false ?
                            <h4 style={stylingNotCompleted} onClick={() => completedTodo(todo.note)}>{todo.note}</h4>
                            :
                            <h4 style={stylingCompleted} onClick={() => completedTodo(todo.note)}>{todo.note}</h4>

                    }


                    <Button
                        variant='contained'
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteTodo(todo.note)}
                    ></Button>

                </Paper>
            </Stack>
        </div>

    ))

    return todoData
}