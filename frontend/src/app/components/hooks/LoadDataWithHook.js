'use client';
import useFetchData from "@/app/components/hooks/useFetchData";

export default function LoadDataWithHook()
{
    const [error, loading,users] = useFetchData('https://jsonplaceholder.typicode.com/users');
    return(<div>
        {
            loading && !error && <div>Loading...</div>
        }
        {
            error && <div>Something went wrong</div>
        }
        {
            users.map(user=><div key={user.id}>{user.name}</div>)
        }
    </div>);
}