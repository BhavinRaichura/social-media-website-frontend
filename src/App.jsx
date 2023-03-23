import React from 'react'
import Home from './container/Home';
import Googlelog from './container/Googlelog';
import { Route,Routes } from 'react-router-dom';
import Userprofile from './container/profile/Userprofile';
import PrivateRoutes from './utils/PrivateRoutes';
import Post from './components/Post';
import Logout from './components/Logout';
import PostEditor from './container/PostEditor';
import Main from './container/Main'
import Sidebar from './components/Sidebar';
import ShowFollowRequests from './components/ShowFollowRequests';
import ShowSuggetions from './components/ShowSuggetions';
import SuggetionsList from './container/SuggetionsList';
import Searchbar from './components/Searchbar';




function App() {
    return ( 
        <div className='bg-white '>
            <Routes>
                <Route exact path='/login' element={<Googlelog/>} />
                <Route element={<PrivateRoutes/>}>
                    <Route path='' element={<Main/>} >
                        <Route  path='/user/:userid'  element={<Userprofile />} />
                        <Route exact path='/post' element={<Post />}/>
                        <Route exact path="/logout" element={<Logout />} />
                        <Route exact path='/create-post' element={<PostEditor />} />
                        <Route exact path='/setting' element={<Sidebar/>}/>
                        <Route exact path='/friend-requests' element={<ShowFollowRequests/>}/>
                        <Route exact path='/friend-suggetions' element={<SuggetionsList />} />
                        <Route exact path='/search' element={<Searchbar />} />
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="*" element={<Home />} />
                    </Route>
                </Route>

            </Routes>
            
        </div>
    );
}

export default App;

