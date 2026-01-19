function Admin()
{
    return (<h3>
        Admin
    </h3>);
}
function User()
{
    return (<h3>
        User
    </h3>);
}
export default function Dashboard({role}) {
    /*if(role==='admin'){
        return <Admin />;
    }
    else
    {
        return <User/>
    }*/
   /* return(<div>
        {
            role === "admin" ? <Admin/> : <User/>
        }
    </div>);*/
    let Component;
    if (role === 'admin') {
        Component = Admin;
    }
    else
    {
        Component = User;
    }
    return(<Component/>);
}