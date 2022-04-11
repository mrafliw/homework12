import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserID, setUserDisplayName, setImgSrc } from "../../data/redux/userSlice";
import axios from "axios";

const Profile = () => {
    const accessToken = useSelector((state) => state.accessToken.value);
    const userDisplayName = useSelector((state) => state.user.value.displayName);
    const imgSrc = useSelector((state) => state.user.value.imgSrc);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async () => {
            const data = await axios // get user data
                .get(
                    `https://api.spotify.com/v1/me?access_token=${accessToken}`
                )
                .catch((error) => error)
            console.log(data);
            console.log("your username is: ", data.data.display_name);
            dispatch(setUserID(data.data.id));
            dispatch(setUserDisplayName(data.data.display_name));
            dispatch(setImgSrc(data.data.images[0].url));
        }
        accessToken !== undefined && (fetchUserData()); // if access token is not undefined, fetch user data
    }, [accessToken, dispatch]);

    return (
        <div className="profile">
            <img className="img profile" src={imgSrc} alt={userDisplayName} />
            <p>{userDisplayName}</p>
        </div>
    )
}

export default Profile;