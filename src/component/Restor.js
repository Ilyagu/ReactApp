import React from "react";
import Star from '../imgs/star.svg';
import './Restor.css';

export default class Restor extends React.Component {
    render(){
        return (
            <div className='restor'>
                <div className='restorContainerImg'>
                    <img src={require('../imgs/restors/nagoya.webp')} alt='NOIMG' />
                </div>
                <div className='restorContainerInfo'>
                    <div className='restorName'>
                    {this.props.restor.title}
                    </div>
                    <div className='restorRating'>
                    <img src={Star} alt='NOIMG' />
                    <p>{this.props.restor.rating}</p>
                    </div>
                    <div className='tag-container'>
                    {this.props.restor.firstTag && 
                        <div className='firstTag'>
                        {this.props.restor.firstTag}
                        </div>
                    }
                    {this.props.restor.secondTag && 
                        <div className='secondTag'>
                        {this.props.restor.secondTag}
                        </div>
                    }
                    </div>
                </div>
            </div>
        );
    }
}