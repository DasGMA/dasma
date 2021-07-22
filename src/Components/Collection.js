import space from '../Media/spaceShooter.png';
import portfolio from '../Media/portfolio.png';
import lbb from '../Media/lbb.png';
import hiit from '../Media/hiit.png';
import times from '../Media/times.png';
import gol from '../Media/gol.png';
import wr from '../Media/workreactor.svg';

export const collection = [
    {
        projectName: 'Work Reactor Social App',
        projectLink: 'https://www.workreactor.com',
        projectImage: wr,
        projectDescription: `Work Reactor is a social network and workspace for startups that connects people and helps them to create, manage and join startups online.
                            Application created using MERN stack with socket.io, AWS S3, AWS SES, AWS Amplify.`
    },
    {
        projectName: 'HIIT Training App',
        projectLink: 'https://github.com/DasGMA/hiit-training',
        projectImage: hiit,
        projectDescription: `STILL IN PROGRESS. Another project idea born during the pandemic. Gyms are closed! So decided to make my own Circuit Training App. 
                            Using EXPO environment to cater both Android and IOS. App will include Feed Screen, Countdown modal to show current and next exercises with timer, Exercises/Circuit Screen, History Screen with custom made Calendar,
                            and Profile Screen. For the Back End planning to use MongoDB.`
    },
    {
        projectName: 'Long Beach Business',
        projectLink: 'https://github.com/DasGMA/long-beach-business',
        projectImage: lbb,
        projectDescription: `STILL IN PROGRESS. As everyone was creating CONVI-19 tracking applications, 
                            i came up with an idea - help local businesses (Long Beach, CA) to recover quicker 
                            by reaching community members with offers and deals. Utilizing MERN Stack with Material-UI.`
    },
    {
        projectName: 'Portfolio',
        projectLink: 'https://www.dasma.dev',
        projectImage: portfolio,
        projectDescription: `What kind of Developer without a Portfolio Website, right? I believe in saying: 'Simplicity is the soul of efficiency'. Used React JS and SCSS to create simple and responsive design that is easy to navigate and read its contents.`
    },
    {
        projectName: 'Aliens',
        projectLink: 'https://guardians-of-the-galaxy-crazy-ugly-space-game.netlify.app/',
        projectImage: space,
        projectDescription: `Space shooting game to test the posibilities of React JS and Canvas. 
                            Biggest challenge was to implement collision detection. React | ES6 Classes | Canvas | OOP`
    },
    {
        projectName: 'Game Of Life',
        projectLink: 'https://dasmagameoflife.herokuapp.com/',
        projectImage: gol,
        projectDescription: `Cellular Automata and Conways Game of Life App. 
                            It's made up of a grid of cells (usually 2D, but can be any dimension) that follow a simple set of rules from which complex behaviors can emerge.
                            In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.
                            If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
                            If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead. 
                            Created using: React | JavaScript | CSS.`
    },
    {
        projectName: 'Lambda Times',
        projectLink: 'https://heuristic-hawking-d094be.netlify.app',
        projectImage: times,
        projectDescription: `One of the first times working with React JS. Lambda Times website like an online newspaper. 
                            Some simple Authentication: login storing user info to localstorage and logout removes it.
                            For styling using Reactstrap and Styled Components. Also implemented images carousel, which i thought was awesome!!!`
    }
]