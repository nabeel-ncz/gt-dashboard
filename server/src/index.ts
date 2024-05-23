import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(cors());
app.use(express.json());

app.all('/health', (req: Request, res: Response) => {
    res.send("⚡⚡⚡");
});

app.get('/api/dashboard', (req: Request, res: Response) => {
    res.status(200).json({data: [
        {
            title: 'Component 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 3',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 4',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 6',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 7',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 8',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
        {
            title: 'Component 9',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.            '
        },
    ]})
});

app.listen(4000, () => {
    console.log(`Server is listenting at ${4000}`);
});