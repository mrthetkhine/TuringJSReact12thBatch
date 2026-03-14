export async function GET() {
    const data = [
        {
            id:'1',
            title:'Task 1',
        },
        {
            id:'2',
            title:'Task 2',
        },
    ]
    return Response.json({ data })
}