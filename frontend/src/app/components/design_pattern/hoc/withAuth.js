import useAuth from "@/app/components/design_pattern/hoc/useAuth";

export default function withAuth(Component)
{
    return function(props)
    {
        const auth = useAuth();
        if (auth)
        {
            return (<Component {...props} />);
        }
        else {
            return (<div>
                <h1>Access denied</h1>
            </div>);
        }
    }
}