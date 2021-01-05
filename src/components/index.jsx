import React from 'react';
import { Link } from 'react-router-dom';

function Component(props){

    return (
        <div className="max-h-full min-h-full w-full overflow-visible h-full flex flex-col lg:flex-row xl:flex-row overflow-auto">
			<div id="main-cont" className="overflow-none flex flex-col h-full w-full">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col min-w-xl h-full md:h-auto w-11/12 md:w-xl bg-primary rounded overflow-hidden shadow-lg justify-center">
                        <img className="mt-4 self-center w-1/3 rounded-full border-4 border-accent" src={props.profile_image} alt="Ben Weare, Benjamin Weare's mugshot"/>
                        <div className="px-10 md:px-6 py-4">
                            <div className="font-bold text-title text-xl mb-2 border-b">About Ben...</div>
                            <div className="text-title text-base py-3 border-b">
                                <p>My name's Ben Weare. I'm an aspiring developer working with Raspberry Pi deployments running: </p>
                                <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://ubuntu.com/download/raspberry-pi"> UBUNTU <i className="text-accent fab fa-ubuntu"></i></a></li>
                                <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://nodejs.org/en/">NodeJS <i className="text-accent fab fa-node-js"></i></a></li>
                                <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://www.docker.com/">Docker <i className="text-accent fab fa-docker"></i></a></li>
                                <li><a className="text-paragraph hover:text-blue-400 underline p-2" href="https://kubernetes.io/">Kubernetes</a>/<a className="text-paragraph hover:text-blue-400 underline p-2" href="https://microk8s.io/">MicroK8s</a></li>
                            </div>
                            <div className="text-title text-base py-2">
                                <p>Currently working with these packages:</p>
                                <li><a href="https://www.npmjs.com/package/express" className="text-paragraph hover:text-blue-400 underline p-2">Express.js</a></li>
                                <li><a href="https://www.npmjs.com/package/passport" className="text-paragraph hover:text-blue-400 underline p-2">Passport.js</a></li>
                                <li><a href="https://www.npmjs.com/package/mongodb" className="text-paragraph hover:text-blue-400 underline p-2">MongoDB</a></li>
                                <li><a href="https://www.npmjs.com/package/tailwindcss" className="text-paragraph hover:text-blue-400 underline p-2">TailwindCSS</a></li>
                          	</div>
                            <div className="w-full text-center mt-3 flex justify-around border-t py-3">
                                <Link className="mt-3 w-full py-2 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Documentation and How to Guides" to={'/guides'}> Check out my collection of Guides/Documentation!</Link>
                            </div>
                            <div className="w-full text-center mt-3 flex justify-around border-t py-3">
                                <a className="w-32 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's App" href="https://www.collab-it.app">Collab-IT <i className="fas fa-code"></i></a>
                                <a className="w-32 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's Github" href="https://github.com/incendiarybean">GitHub <i className="fab fa-github"></i></a>
                                <a className="w-32 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's NPM profile" href="https://www.npmjs.com/~incendiarybean">NPM <i className="fab fa-npm"></i></a>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;