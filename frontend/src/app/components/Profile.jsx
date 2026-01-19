
import  './profile.css';
export default function Profile({image,name,size=150}) {
    console.log('Profile props ',image, ' name ',name);
    /*let profile ={
        image: "https://i.imgur.com/MK3eW3Am.jpg",
        name : "Johnson",
    }*/
    return (
        <img
            src={image}
            alt={name}
            width={size}
            height={size}
            className ="profile"
        />
    )
}