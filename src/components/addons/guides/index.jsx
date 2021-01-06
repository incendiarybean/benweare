import React from 'react';
import { Link } from 'react-router-dom';
import Gist from 'react-gist';

function Component(props){

    const Arrows = (props) => {
        if(!props.up){
            return (
                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke-current text-default" d="m8.5.5-4 4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 8)"/>
                </svg>
            );
        } else {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                    <polyline className="stroke-current text-default" fill="none" stroke="#2A2E3B" strokeLinecap="round" strokeLinejoin="round" points="7.328 1.672 7.328 7.328 1.672 7.328" transform="rotate(-135 9.157 7.258)"/>
                </svg>
            );
        }
    }

    const capScroll = (e) => {
        e.preventDefault();
        let item = document.getElementById('rescroll');
        item.classList.remove('hidden');
    }

    const scroll = (e) => {
        let item = document.getElementById('rescroll');
        e.target.parentElement.parentElement.scrollTo(0, -10);
        item.classList.add('hidden');
    }

    const dropdown = (e) => {
        let dropdowns = e.target;
        dropdowns = dropdowns.nodeName !== "DIV" ? dropdowns.parentElement : dropdowns;
        let item = dropdowns.parentElement.children[1];
        let isHidden = item.classList.contains('hidden');
        item.classList.remove('animate__fadeIn', 'animate__fadeOut');
        switch(isHidden){
            case true:
                item.classList.add('animate__fadeIn');
                return item.classList.remove('hidden');
            default:
                item.classList.add('animate__fadeOut');
                return item.addEventListener("animationend", () => {
                    item.classList.add('hidden');
                }, {
                    capture: false,
                    once: true
                });
        }

    }

    return (
        <div className="animate__animated animate__fadeIn w-full overflow-visible grid grid-cols-3">
            <div className="bg-secondary"></div>
            <div className="bg-secondary animate__animated animate__fadeIn flex flex-col w-full h-full items-center pt-10 overflow-visible md:overflow-hidden">
                <div onScroll={capScroll} className="fixed max-h-3/4 overflow-y-auto bg-primary md:w-xl xs:h-auto sm:h-auto flex flex-col items-center rounded shadow sm:hadow-md">
                    <div className="rounded-t py-4 bg-other flex justify-around w-full">
                        <div className="mt-2">
                            <h1 className="text-2xl text-title font-bold">Setting up MicroK8s</h1>
                        </div>
                    </div>
                    <div id="rescroll" className="bg-other animate__animated animate__fadeIn hidden w-full sticky top-0 flex flex-col items-center">
                        <button onClick={scroll} className="text-center my-3 w-11/12 py-2 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light">
                            Return to Top
                        </button>
                    </div>
                    <div className=" rounded-b max-h-3/4 px-3 md:p-5">
                        <p className="text-xl text-title font-bold">What is MicroK8s?</p>
                        <hr className="my-1"/>
                        <div className="text-paragraph">
                            <p className="py-1">MicroK8s, according to the home page found <a className="text-blue-400 hover:text-blue-600" href="https://microk8s.io/docs">here</a>, is the lightest and most effective Kubernetes installation.</p>
                            <p className="py-1">The size alone makes it perfect for installing on smaller, cheaper systems - further making a Raspberry Pi a viable subject for developement.</p>
                            <p className="py-1">MicroK8s can be clustered using multiple Raspberry Pis (called a bramble) and enabling HA (high availabilty).</p>
                            <p className="py-1">This guide will walk you through making it work.</p>
                        </div>
                        <hr className="my-4"/>
                        <div className="flex flex-col">
                            <iframe className="bg-other self-center rounded-md shadow" width="400" height="250" src="https://www.youtube.com/embed/v9KI2BAF5QU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <hr className="my-4"/>
                        <p className="text-xl text-title font-bold">Requirements</p>
                        <hr className="my-1"/>
                        <div className="text-title text-base py-3">
                            <li>Raspberry Pi(s), or any system(s) running Ubuntu (Latest).</li>
                            <li>Access to the above via SSH or direct access via GUI.</li>
                            <li>Text editor (Preferably VS Code).</li>
                        </div>
                        <hr className="my-4"/>
                        <p className="text-xl text-title font-bold">Where to Start?</p>
                        <hr className="my-1"/>
                        <div className="text-title text-base py-4 sm:py-2 border-b">
                            <p className="text-md text-title font-bold">Step 1: Install via Snap</p>
                            <div className="m-4">
                                <p>SSH into the device or access the device's CLI.</p>
                                <p>Make sure system is up-to-date and Snap is installed, then install MicroK8s:</p>
                                <Gist id='06ad7f21137fbbf3fb8c31970fd11d36' file="InstallSnap.sh" />
                            </div>
                            <p className="text-md text-title font-bold">Step 2: Add user to Microk8s group</p>
                            <div className="m-4">
                                <p>Once installed, enter the following to allow your user to conduct commands to MicroK8s.</p>
                                <Gist id='4cc6c77a8252940c887bd1d1f3134ca3' file="Usermod.sh" />
                                <p className="bg-other rounded text-xs px-4 py-2">Don't forget to logout and back in.</p>
                            </div>
                            <p className="text-md text-title font-bold">Step 3: Enable MicroK8s features</p>
                            <div className="m-4">
                                <p>To ensure you have all required plugins enabled, run this:</p>
                                <Gist id='f4f53f74da9d5d615370da35115317e5' file="EnableFeatures.sh" />
                                <p className="bg-other rounded text-xs px-4 py-2">MetalLB will ask you to provide an IP range, do this on your own subnet e.g 192.168.1. Use a range like 192.168.1.0-192.168.1.50</p>
                            </div>
                            <p className="text-md text-title font-bold">Step 4: Create a Dashboard proxy</p>
                            <div className="m-4">
                                <p>Create the a start_proxy.sh file, paste the code and enable running of the script:</p>
                                <Gist id='7178f2ffdea813d0203a5d51f9dc75f9' file="RunProxy.sh" />
                                <p className="m-2 px-4 py-3 bg-field rounded-md shadow-inner px-4">$ microk8s dashboard-proxy &</p>
                                <p className="bg-other rounded text-xs px-4 py-2">Copy the login token!</p>
                                <p>Use CTRL + C to exit that log. Start the port forward so you can access the board:</p>
                                <p className="m-2 px-4 py-3 bg-field rounded-md shadow-inner px-4">$ iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 10443</p>
                            </div>
                            <p className="text-md text-title font-bold">Step 5: Accessing the dashboard</p>
                            <div className="m-4">
                                <p>Open your Web Browser and type in the URL in the form:</p>
                                <p className="m-2 px-4 py-3 bg-field rounded-md shadow-inner px-4">https://(Device IP Address):10443/</p>
                                <p className="bg-other rounded text-xs px-4 py-2">HTTPS is vital as your login won't succeed otherwise - skip the SSL error.</p>

                                <p>Paste your token into the form and click Sign In.</p>
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-4 sm:py-2 border-b">
                            <Link className="text-center w-full text-sm sm:text-base p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Documentation and How to Guides" to={'/guides'}> Check out my collection of Guides/Documentation!</Link>
                        </div>
                        <div className="flex justify-between w-full py-4 sm:py-2">
                            <a className="text-center w-full text-sm sm:text-base sm:w-32 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's App" href="https://www.collab-it.app">Collab-IT <i className="fas fa-code"></i></a>
                            <a className="text-center mx-1 w-full text-sm sm:text-base sm:w-32 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's Github" href="https://github.com/incendiarybean">GitHub <i className="fab fa-github"></i></a>
                            <a className="text-center w-full text-sm sm:text-base sm:w-32 p-1 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light" alt="Link to Ben Weare, Benjamin Weare's NPM profile" href="https://www.npmjs.com/~incendiarybean">NPM <i className="fab fa-npm"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary col-span-1 pt-10 p-1 text-defualt">
                <div className="p-3 rounded-md min-w-56 w-4/12 bg-primary bg-opacity-75  shadow-md">
                    <p className="text-title font-bold">Guides</p>
                    <hr className="mb-4"/>
                    <div>
                        <div>
                            <div onClick={dropdown} className="cursor-pointer text-title flex justify-between">
                                <p>Raspberry Pi Guides</p>
                                <Arrows up={true} />
                            </div>
                            <div className="animate__animated text-paragraph pl-3">
                                <div className="text-title flex justify-between">
                                    <p>Setting up MicroK8s</p>
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke-current" d="m8.5.5-4 4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 8)"/>
                                    </svg>
                                </div>
                                <div className="text-title flex justify-between">
                                    <p>Setting up DNS</p>
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke-current" d="m8.5.5-4 4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 8)"/>
                                    </svg>
                                </div>
                                <div className="text-title flex justify-between">
                                    <p>Setting up MicroK8s</p>
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke-current" d="m8.5.5-4 4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 8)"/>
                                    </svg>
                                </div>
                                <div className="text-title flex justify-between">
                                    <p>Setting up MicroK8s</p>
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke-current" d="m8.5.5-4 4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 8)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-4 mb-2"/>
                    <div className="sticky top-0 flex w-full">
                        <Link to={'/'} className="text-center mt-3 w-full py-2 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light">
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;