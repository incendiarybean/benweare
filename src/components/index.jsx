import React from 'react';
import { Link } from 'react-router-dom';

function Component(props){

    return (
        <div className="transition duration-300 ease-in-out bg-secondary animate__animated animate__fadeIn flex flex-col w-full h-full items-center pt-10 overflow-visible md:overflow-hidden">
            <div className="transition duration-300 ease-in-out bg-primary md:w-xl xs:h-auto sm:h-auto flex flex-col items-center rounded shadow sm:hadow-md">
                <div className="transition duration-300 ease-in-out rounded-t py-4 bg-other flex justify-around">
                    <img className="self-center w-1/3 rounded-full border-4 border-accent" src={props.profile_image} alt="Ben Weare, Benjamin Weare's mugshot"/>
                </div>
                <div className="h-full rounded-b sm:h-auto px-3 md:p-5">
                    <p className="py-4 sm:py-0 font-bold text-title text-xl mb-2 border-b">About Ben...</p>
                    <div className="text-title text-base py-3 border-b">
                        <p className="pb-4 sm:pb-2 ">My name's Ben Weare. I'm an aspiring developer working with Raspberry Pi deployments running: </p>
                        <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://ubuntu.com/download/raspberry-pi"> UBUNTU <i className="text-accent fab fa-ubuntu"></i></a></li>
                        <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://nodejs.org/en/">NodeJS <i className="text-accent fab fa-node-js"></i></a></li>
                        <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://www.docker.com/">Docker <i className="text-accent fab fa-docker"></i></a></li>
                        <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://kubernetes.io/">Kubernetes</a>/<a className="text-paragraph hover:text-blue-400 underline p-2" href="https://microk8s.io/">MicroK8s</a></li>
                    </div>
                    <div className="text-title text-base py-4 sm:py-2 border-b">
                        <p>Currently working with these packages:</p>
                        <li><a href="https://www.npmjs.com/package/express" className="text-paragraph hover:text-blue-400 underline p-2">Express.js</a></li>
                        <li><a href="https://www.npmjs.com/package/passport" className="text-paragraph hover:text-blue-400 underline p-2">Passport.js</a></li>
                        <li><a href="https://www.npmjs.com/package/mongodb" className="text-paragraph hover:text-blue-400 underline p-2">MongoDB</a></li>
                        <li><a href="https://www.npmjs.com/package/tailwindcss" className="text-paragraph hover:text-blue-400 underline p-2">TailwindCSS</a></li>
                        <li><a href="https://reactjs.org/" className="text-paragraph hover:text-blue-400 underline p-2">React (Functional)</a></li>
                    </div>
                    {/* <div className="flex justify-center w-full py-4 sm:py-2 border-b">
                        <Link className="text-center w-full text-sm sm:text-base p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Documentation and How to Guides" to={'/guides'}> Check out my collection of Guides/Documentation!</Link>
                    </div> */}
                    <div className="flex justify-center w-full py-4 sm:py-2 border-b">
                        <Link className="text-center w-full text-sm sm:text-base p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to play a Sudoku" to={'/sudoku'}> Sudoku Generator! </Link>
                    </div>
                    <div className="flex justify-between w-full py-4 sm:py-2">
                        <a className="text-center mr-1 w-full text-sm sm:text-base sm:w-1/2 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's Github" href="https://github.com/incendiarybean">GitHub <i className="fab fa-github"></i></a>
                        <a className="text-center w-full text-sm sm:text-base sm:w-1/2 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's NPM profile" href="https://www.npmjs.com/~incendiarybean">NPM <i className="fab fa-npm"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;