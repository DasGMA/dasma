import React, {useState, useEffect} from 'react';
import '../Styles/navigation.scss';
import { useHistory } from 'react-router-dom';
import burger from '../Media/menu.png';

export default function Navigation() {
    const history = useHistory();
    const [visible, setVisible] = useState(false);

    const animateMenu = {
        transform: visible ? 'rotate(90deg)' : 'none', transitionDuration: '0.5s'
    }

    const animatedButtons = {
        display: visible ? 'flex' : 'none', animation: 'fadeMe 1s'
    }

    const projects = () => {
        history.push('/projects');
        setVisible(false);
    }

    const resume = () => {
        history.push('/resume');
        setVisible(false);
    }

    const home = () => {
        history.push('/');
        setVisible(false);
    }

    const onPress = () => {
        setVisible(!visible);
    }

    useEffect(() => {
        let timeout;
        if (visible === true) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onPress();
                clearTimeout(timeout);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    })

    return(
        <div>
            <nav className = 'navigation'>
                <button className = 'button-name' onClick = {home}>DAS MA</button>
                <button 
                    className='menu'
                    onClick={onPress}
                >
                    <img 
                        src={burger}
                        alt='Menu'
                        style={animateMenu}
                    />
                </button>
            </nav>
            <div className='buttons' style={animatedButtons}>
                <button className = 'button' onClick = {projects} >PROJECTS</button>
                <button className = 'button' onClick = {resume}>RESUME</button>
            </div>
        </div>
    )
}