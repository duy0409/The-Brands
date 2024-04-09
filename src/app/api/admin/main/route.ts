const fs = require('fs');

const filePath = "D:/Ayden_Brand/src/app/config/brand.json";

const addDataToJson = async (data: any) => {
    try {
        const existingData = await fs.promises.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(existingData);
        const existingUser = jsonData.find((main: any) => main.id === data.id);
        if (existingUser) {
            throw new Error('ID already exists');
        }

        jsonData.push(data);
        await fs.promises.writeFile(filePath, JSON.stringify(jsonData, null, 2));
    } catch (error) {
        console.error(error);
        throw new Error('Error writing to JSON file');
    }
};
const updateDataInJson = async (data: any) => {
    try {
        const existingData = await fs.promises.readFile(filePath, 'utf-8');
        const jsonData = JSON.parse(existingData);
        const existingUserIndex = jsonData.findIndex((main: any) => main.id === data.id);
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
        const { id, name, description, thumbnail } = await req.json();

        const existingData = await fs.promises.readFile(filePath, 'utf-8');
        const pageMain = JSON.parse(existingData);
        const main = pageMain.find((main: any) => main.id === id && main.name === name && main.description === description && main.thumbnail);

        if (main) {
            await updateDataInJson({ id, name, description, thumbnail });
            return Response.json({ isLogged: true });
        }
        else {
            await addDataToJson({ id, name, description, thumbnail });
            return Response.json({ isLogged: false });
        }
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Internal server error' });
    }
}
