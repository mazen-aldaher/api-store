import express, {Application, Request, Response } from 'express';

const app:Application =express();
const PORT = 4000;

// add routing of path

app.get('/', (req:Request, res:Response) => {
    res.json({
        message:'Hello World'
    })
})

//start server listening
app.listen(PORT, ()=>{
    console.log(`Server is Listening at http://localhost:${PORT}`);
    
});

export default app;



