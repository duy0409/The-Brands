
import fakeJson from "../config/login.json"

export async function GET() {

  return Response.json({ data: { isLogged: true } })
}

export async function POST(req: Request) {
  const { email, password } = await req.json()
  try {
    const user = fakeJson.find((user: { email: any; password: any; }) => user.email === email && user.password === password);
    if (user) {
      return Response.json({ isLogged: true });
    } else {
      return Response.json({ isLogged: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal server error' });
  }
}