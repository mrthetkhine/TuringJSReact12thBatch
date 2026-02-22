async function delay(ms:number)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default async function ActorList()
{
    await delay(4000);
    return (<div>
        Actor List
    </div>)
}