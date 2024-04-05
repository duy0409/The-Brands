const fs = require('fs');

const filePath = "D:/Ayden_Brand/src/app/api/config/login.json";

const addDataToJson = async (data: any) => {
    try {
        const existingData = await fs.promises.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(existingData);
        const existingUser = jsonData.find((user: any) => user.email === data.email);
        if (existingUser) {
            throw new Error('Email already exists');
        }
        jsonData.push(data);
        await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    } catch (error) {
        console.error(error);
        throw new Error('Error writing to JSON file');
    }
};

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const existingData = await fs.promises.readFile(filePath, 'utf-8');
        const users = JSON.parse(existingData);
        const user = users.find((user: any) => user.email === email && user.password === password);

        if (user) {
            return Response.json({ isLogged: true, message: "Email was registered" });
        } else {
            await addDataToJson({ email, password });
            return Response.json({ isLogged: false });
        }
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Internal server error' });
    }
}
