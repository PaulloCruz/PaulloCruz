import './Profile.CSS'
 
const Profile = ({image,name,location,role}) =>{
    return(
        <>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{location}</p>
        <q>{role}</q>
        </>
    )
}
export default Profile