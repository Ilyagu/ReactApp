import React from "react";
import HomeEnable from '../imgs/tapbar/homeDisable.svg';
import LikedDisable from '../imgs/tapbar/likedDisable.svg';
import CartDisable from '../imgs/tapbar/cartDisable.svg';
import ProfileDisable from '../imgs/tapbar/profileDisable.svg';
import './TapBar.css';

export default class TapBar extends React.Component {
    render() {
        return (
            <div className="tapBar">
                <button className="tapBar-icons">
                    <img src={HomeEnable} alt="test" />
                </button>
                <button className="tapBar-icons">
                    <img src={LikedDisable} alt="test" />
                </button>
                <button className="tapBar-icons">
                    <img src={CartDisable} alt="test" />
                </button>
                <button className="tapBar-icons">
                    <img src={ProfileDisable} alt="test" />
                </button>
            </div>
        )
    }
}