import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import queryString from 'query-string';
import Login from '../Login';
import { setAccessToken } from "../../data/redux/accessTokenSlice";

const Home = () => {
  // const [accessToken, setAccessToken] = useState()
  const accessToken = useSelector((state) => state.accessToken.value) // get access token from redux store
  const dispatch = useDispatch(); 
  const history = useHistory(); 

  useEffect(() => {
    const parsed = queryString.parse(window.location.hash); // get access token from url
    dispatch(setAccessToken(parsed.access_token)); // set access token in redux store
  }, [accessToken, dispatch])

  useEffect(() => {
    accessToken !== undefined && ( // if access token is not undefined
      history.push("create-playlist") // redirect to create playlist page
    )
  }, [accessToken, history])

  return (
    <div className="Home">
      <h1>Welcome to my Homework!</h1>
      <Login />
    </div>
  )
}

export default Home;