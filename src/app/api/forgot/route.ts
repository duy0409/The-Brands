const fs = require('fs');

const filePath = "D:/Ayden_Brand/src/app/api/config/login.json";

const updateDataInJson = async (data: any) => {
    try {
        const existingData = await fs.promises.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(existingData);
        const existingUserIndex = jsonData.findIndex((user: any) => user.email === data.email);
        if (existingUserIndex !== -1) {
            jsonData[existingUserIndex] = data;
            await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error updating JSON file');
    }
};

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const existingData = await fs.promises.readFile(filePath, 'utf-8');
        const users = JSON.parse(existingData);
        const user = users.find((user: any) => user.email === email);

        if (user) {
            await updateDataInJson({ email, password });
            return Response.json({ isLogged: true });
        } else {

            return Response.json({ isLogged: false, message: "Email not found" });
        }
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Internal server error' });
    }
}
