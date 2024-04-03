export async function GET() {

  return Response.json({ data: { isLogged: true } })
}

export async function POST(req: Request) {
  const { messages } = await req.json()

  return Response.json({ data: { isLogged: messages === "1111" } })
}