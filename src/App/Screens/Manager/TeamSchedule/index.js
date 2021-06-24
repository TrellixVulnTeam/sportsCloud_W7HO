import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    HashRouter,
} from "react-router-dom";
import "./style.css"
import '../../../Utils/css/style.css';
import '../../../Utils/css/responsive.css';
import "../../../Utils/css/bootstrap.min.css"
import "../../../Utils/css/bootstrap-datepicker.css"
import UserProfile from "../../../images/user-profile.png"
import flag from "../../../images/flag.png"
import add from "../../../images/add.png"
import Delect from "../../../images/delect.png"
import pencil from "../../../images/pencil.png"
import SideMenuComponents from "../../../Components/SideMenu"
import Footer from "../../../Components/Footer"


function TeamSchdule(props) {
    const history = useHistory();

    const [userMe, setUser] = useState(null);
    const [user, setUserData] = useState({});

    useEffect(() => {
        // let user = userdata && userdata._id ? true : false;
        // console.log("userMe===>", user);
        setUser(user);
        // console.log("USerData", userdata);
        const userLocal = JSON.parse(localStorage.getItem("user"));
        console.log("userData after login--->", userLocal)
        let userD = userLocal && userLocal._id ? true : false;
        setUser(userD);
        setUserData(userLocal);
    }, []);

    const handleLogout = () => {
        console.log("pruyuuuuuu", props);
        // dispatch(logoutUser(null));
        localStorage.removeItem("user");
        setUserData(null);
        props.history.push("/")
    };


    return (
        <div>
            <div class="dashboard-container">
                <div class="dashboard-main">
                    <SideMenuComponents />
                    <div class="dashboard-main-content">
                        <div class="dashboard-head">
                            <div class="teams-select">
                                <button class="create-new-team">Create New Teams</button>
                                <select>
                                    <option>My Teams</option>
                                    <option>My Teams 2</option>
                                    <option>My Teams 3</option>
                                </select>
                                <select>
                                    <option>Account</option>
                                    <option>Account 2</option>
                                    <option>Account 3</option>
                                </select>
                            </div>

                            <div class="profile-head">
                                <div class="profile-head-name">{user ? user.fname : null}</div>
                                <div class="profile-head-img">
                                    {
                                        user ?
                                            <img src={user.profile_image} alt="" /> :
                                            <img src={UserProfile} alt="" />
                                    }

                                </div>
                            </div>
                            <div class="login-account">
                                <ul>
                                    <li><a href="#" data-toggle="modal" data-target="#myModallogin" onClick={handleLogout}>Logout</a></li>
                                    {/* <li><a href="#" data-toggle="modal" data-target="#myModalregister" onClick={handleLogout}>Logout</a></li> */}
                                </ul>
                            </div>
                        </div>

                        <div class="prefarance-page">
                            <div class="page-header">
                                <h2 class="page-title">Schedule</h2>
                                <div class="streming-head-right">
                                    <div class="stream-tab">
                                        <ul>
                                            <li><a class="active" href="#">List View</a></li>
                                            <li><a href="#">Calendar View</a></li>

                                        </ul>
                                    </div>

                                    <button class="start-stream-btn">Select Availability</button>
                                    <button class="start-stream-btn">View Preferences</button>
                                    <button class="start-stream-btn">Subscribe/ Export</button>
                                </div>
                            </div>
                            <div class="manager-player-section">
                                <h3>Manager:</h3>
                                <ul>
                                    <li><a href="#">New</a></li>
                                    <li><a href="#">Edit</a></li>
                                    <li><a href="#">Import</a></li>
                                </ul>
                            </div>
                            <div class="prefarance-box">
                                <div class="team-payment team-assesment">
                                    <table>
                                        <tr>
                                            <th>Game/ Event</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Location</th>
                                            <th>Assignments</th>
                                            <th>Volunteer</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flag-prac">
                                                    <img src={flag} alt="" />
                                                    <button class="practice">Practice</button>
                                                </div>
                                                <div class="game-name">
                                                    Dubcity Basketball
Practice</div>
                                            </td>
                                            <td><span>Oct 16, 2021</span></td>
                                            <td>
                                                <span>TBD</span>
                                            </td>
                                            <td>
                                                <span>Eleanor Murray

Fallon Middle Schoo</span>
                                            </td>
                                            <td>Scorekeeper
                                    <div class="add-btn">
                                                    <button><img src={add} alt="" /></button>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="last-row">
                                                    <p>Avaneesh Shetti</p> <button data-toggle="modal" data-target="#assignmentdelect"><img src={Delect} /></button> <button><img src={pencil} /></button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag-prac">
                                                    <img src={flag} alt="" />
                                                    <button class="practice">Practice</button>
                                                </div>
                                                <div class="game-name">
                                                    Dubcity Basketball
Practice</div>
                                            </td>
                                            <td><span>Oct 16, 2021</span></td>
                                            <td>
                                                <span>TBD</span>
                                            </td>
                                            <td>
                                                <span>Eleanor Murray

Fallon Middle Schoo</span>
                                            </td>
                                            <td>Scorekeeper
                                    <div class="add-btn">
                                                    <button><img src={add} alt="" /></button>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="last-row">
                                                    <p>Avaneesh Shetti</p> <button><img src={Delect} /></button> <button><img src={pencil} /></button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag-prac">
                                                    <img src={flag} alt="" />
                                                    <button class="practice">Practice</button>
                                                </div>
                                                <div class="game-name">
                                                    Dubcity Basketball
Practice</div>
                                            </td>
                                            <td><span>Oct 16, 2021</span></td>
                                            <td>
                                                <span>TBD</span>
                                            </td>
                                            <td>
                                                <span>Eleanor Murray

Fallon Middle Schoo</span>
                                            </td>
                                            <td>Scorekeeper
                                    <div class="add-btn">
                                                    <button><img src={add} alt="" /></button>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="last-row">
                                                    <p>Avaneesh Shetti</p> <button><img src={Delect} /></button> <button><img src={pencil} /></button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div class="flag-prac">
                                                    <img src={flag} alt="" />
                                                    <button class="practice">Practice</button>
                                                </div>
                                                <div class="game-name">
                                                    Dubcity Basketball
Practice</div>
                                            </td>
                                            <td><span>Oct 16, 2021</span></td>
                                            <td>
                                                <span>TBD</span>
                                            </td>
                                            <td>
                                                <span>Eleanor Murray

Fallon Middle Schoo</span>
                                            </td>
                                            <td>Scorekeeper
                                    <div class="add-btn">
                                                    <button><img src={add} alt="" /></button>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="last-row">
                                                    <p>Avaneesh Shetti</p> <button><img src={Delect} /></button> <button><img src={pencil} /></button>
                                                </div>
                                            </td>
                                        </tr>


                                    </table>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamSchdule;
