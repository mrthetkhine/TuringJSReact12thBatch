import Profile from "@/app/components/Profile";

export default function Avatar(props) {
    return(<div>
        {props.name}
        <Profile {...props}/>
    </div>);
}