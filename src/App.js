import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// *********************************************************components****************************************
// **************************************************** Landing Page Components**********************************************
import LandingPage from './LandingComponents/LandingPage/LandingPage';
import LandingPageContent from './LandingComponents/LandingPage/LandingPageContent/LandingPageContent';
import Login from './LandingComponents/Login/Login';
import SignUp from './LandingComponents/SignUp/SignUp';


// **************************************************** user Page Components**********************************************
import UserLandingPage from './UserComponents/UserLandingPage/UserLandingPage';
import UserPageContent from './UserComponents/UserPageContent/UserPageContent';
import VideoTutorial from './UserComponents/VideoTutorial/VideoTutorial';
import TextTutorial from './UserComponents/TextTutorial/TextTutorial';
import ProfileDashBoard from './UserComponents/ProfileDashBoard/ProfileDashBoard';
//  *****************************************************    Video Lecture Components  **********************************************
import HTMLLecture from './VideoLectures/HTMLLecture/HTMLLecture';
import CSSLecture from './VideoLectures/CSSLecture/CSSLecture';
import JsLecture from './VideoLectures/JsLecture/JsLecture';


function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<LandingPage/>,
      children:[
        {
          path:'Content',
          element:<LandingPageContent/>
        },
        {
          path:'',
          element:<LandingPageContent/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<SignUp/>
        }
      ]
    },
    {
      path:'user',
      element:<UserLandingPage/>,
      children:[
        {
          path:'',
          element:<UserPageContent/>
        },
        {
          path:'videoLecture',
          element:<VideoTutorial/>,
          children:[
            {
              path:'HTML',
              element:<HTMLLecture/>
            },
            {
              path:'CSS',
              element:<CSSLecture/>
            },
            {
              path:'js',
              element:<JsLecture/>
            }
          ]
        },
        {
          path:'textLecture',
          element:<TextTutorial/>
        },
        {
          path:'profile',
          element:<ProfileDashBoard/>
        }
      ]
    }
  ])

  // console.log(process.env)
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
