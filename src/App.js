import logo from './logo.svg';
import './App.css';
// import FacebookLoginComponent from './FacebookLoginComponent';
import FacebookLogin from 'react-facebook-login';
function App() {
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <div>

            <FacebookLogin
                appId="318221891163640"
                fields="name,email"
                callback={responseFacebook}
              /> 

        </div>

    );
}

export default App;
