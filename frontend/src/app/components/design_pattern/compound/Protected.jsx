import useAuth from "@/app/components/design_pattern/hoc/useAuth";

export default function Protected({children,render})
{
    const auth = useAuth();
    if(auth)
    {
        return (<>
            {children}
            </>);
    }
    else
    {
        return (<>
            {render()}
        </>);
    }
}