import React, { useEffect, useState } from 'react';
import { default as Gist } from '../github/index.jsx';

function Components(props){

    const [Loaded, setLoaded] = useState(false);
    const [Title, setTitle] = useState('');

    const capScroll = (e) => {
        e.preventDefault();
        let item = document.getElementById('rescroll');
        if(item.parentElement.scrollTop === 0) return item.classList.add('hidden');
        item.classList.remove('hidden');
    }

    const scroll = (e) => {
        let item = document.getElementById('rescroll');
        e.target.parentElement.parentElement.scrollTo(0, -10);
        item.classList.add('hidden');
    }

    const Article = () => {
        console.log(props.guide)
        switch(props.guide){
            case "pi-microk8s-intro":
                setTitle("Getting started with MicroK8s");
                setLoaded(true);
                return (
                    <div className="rounded-b max-h-3/4 px-3 md:p-5">
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
                        <p className="mt-4 text-xl text-title font-bold">Requirements</p>
                        <hr className="my-1"/>
                        <div className="text-title text-base py-3">
                            <li>Raspberry Pi(s), or any system(s) running Ubuntu (Latest).</li>
                            <li>Access to the above via SSH or direct access via GUI.</li>
                            <li>Text editor (Preferably VS Code).</li>
                        </div>
                        <p className="mt-2 text-xl text-title font-bold">Where to Start?</p>
                        <hr className="my-1"/>
                        <div id="pi-microk8s-dashboard" onClick={props.chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between pl-2">
                            <p>Microk8s' Dashboard</p>
                            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                            </svg>
                        </div>
                        <div className="cursor-pointer text-title hover:text-accent  flex justify-between pl-2">
                            <p>Deploying to MicroK8s</p>
                            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                            </svg>
                        </div>
                        <div className="cursor-pointer text-title hover:text-accent  flex justify-between pl-2">
                            <p>Setting up MicroK8s</p>
                            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                            </svg>
                        </div>
                    </div>
                );
            case "pi-microk8s-dashboard":
                setTitle("Running a Microk8s Dashboard");
                return (
                    <div className="rounded-b max-h-3/4 px-3 md:p-5">
                        <div className="text-title text-base py-4 sm:py-2 border-b">
                            <p className="mt-2 text-md text-title font-bold">Step 1: Install via Snap</p>
                            <div className="m-4">
                                <p>SSH into the device or access the device's CLI.</p>
                                <p>Make sure system is up-to-date and Snap is installed, then install MicroK8s:</p>
                                <Gist id='06ad7f21137fbbf3fb8c31970fd11d36' file="InstallSnap.sh" />
                            </div>
                            <p className="mt-2 text-md text-title font-bold">Step 2: Add user to Microk8s group</p>
                            <div className="m-4">
                                <p>Once installed, enter the following to allow your user to conduct commands to MicroK8s.</p>
                                <Gist id='4cc6c77a8252940c887bd1d1f3134ca3' file="Usermod.sh" className="-mb-16" />
                                <div className="bg-other rounded text-xs px-4 py-2 flex items-center">
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                        <circle className="stroke-current text-default" cx="10.5" cy="10.5" r="8" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path className="stroke-current text-default" d="m10.5 11.5v-5" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle className="stroke-current text-default" cx="10.5" cy="14.5" fill="#2a2e3b" r="1"/></g>
                                    </svg>
                                    <p className="ml-4 font-semi-bold">Don't forget to logout and back in.</p>
                                </div>
                            </div>
                            <p className="mt-2 text-md text-title font-bold">Step 3: Enable MicroK8s features</p>
                            <div className="m-4">
                                <p>To ensure you have all required plugins enabled, run this:</p>
                                <Gist id='f4f53f74da9d5d615370da35115317e5' file="EnableFeatures.sh" className="-mb-16" />
                                <div className="bg-other rounded text-xs px-4 py-2 flex items-center">
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                        <circle className="stroke-current text-default" cx="10.5" cy="10.5" r="8" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path className="stroke-current text-default" d="m10.5 11.5v-5" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle className="stroke-current text-default" cx="10.5" cy="14.5" fill="#2a2e3b" r="1"/></g>
                                    </svg>
                                    <p className="ml-4 font-semi-bold">MetalLB will ask you to provide an IP range, do this on your own subnet e.g 192.168.1. Use a range like 192.168.1.0-192.168.1.50</p>
                                </div>
                            </div>
                            <p className="mt-2 text-md text-title font-bold">Step 4: Create a Dashboard proxy</p>
                            <div className="m-4">
                                <p>Create the a start_proxy.sh file, paste the code and enable running of the script:</p>
                                <Gist id='7178f2ffdea813d0203a5d51f9dc75f9' file="RunProxy.sh" />
                                <p>Run the following to start the proxy:</p>
                                <Gist id='ec7c4a80db5726c9af058753c0d196f7' file="StartProxy.sh" className="-mb-16" />
                            </div>
                            <p className="mt-2 text-md text-title font-bold">Step 5: Accessing the dashboard</p>
                            <div className="m-4">
                                <p>Open your Web Browser and type in the URL in the form:</p>
                                <Gist id='36481747b6384f020dbd3d9fb0e10ef4' file='siteIP.txt' className="-mb-10"/>
                                <div className="bg-other rounded text-xs px-4 py-2 flex items-center">
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                        <circle className="stroke-current text-default" cx="10.5" cy="10.5" r="8" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path className="stroke-current text-default" d="m10.5 11.5v-5" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle className="stroke-current text-default" cx="10.5" cy="14.5" fill="#2a2e3b" r="1"/></g>
                                    </svg>
                                    <p className="ml-4 font-semi-bold">HTTPS is vital as your login won't succeed otherwise - skip the SSL error.</p>
                                </div>
                                <p className="mt-2">Paste your token into the form and click Sign In.</p>
                            </div>
                            <p className="mt-2 text-md text-title font-bold">Step 5: Enable global dashboard access</p>
                            <div className="m-4">
                                <li>Change the namespace to <b>`Kube-System`</b> (from <b>`default`</b>), using the dropdown on the left.</li>
                                <li>Click <b>`Services`</b> from the list below.</li>
                                <li>Look for <b>`kubernetes-dashboard`</b>, click the 3 vertical dots to the right and click Edit.</li>
                                <li>Scroll to the bottom and look for the below section.</li>
                                <Gist id="d259bd27f79c0e611908b9499b4f5543" file="spec.yaml" />
                                <li>Look for the <b>`type: ClusterIP`</b> and change this to <b>`type: LoadBalancer`</b> and save.</li>
                                <p className="my-3">As long as you've set up metalLB correctly, this will auto assign it an IP. You can see the IP by reopening the Services page and looking at the External Endpoint column</p>
                                <div className="bg-other rounded text-xs px-4 py-2 flex items-center">
                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                        <circle className="stroke-current text-default" cx="10.5" cy="10.5" r="8" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path className="stroke-current text-default" d="m10.5 11.5v-5" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle className="stroke-current text-default" cx="10.5" cy="14.5" fill="#2a2e3b" r="1"/></g>
                                    </svg>
                                    <p className="ml-4 font-semi-bold">You can now access the Dashboard on this IP.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-4 sm:py-2">
                        </div>
                    </div>
                );
            default:
                setTitle("Introduction");
                setLoaded(true);
                return (
                    <div className="rounded-b max-h-3/4 px-3 md:p-5">
                        <p className="text-xl text-title font-bold">What can I find here?</p>
                        <hr className="my-1"/>
                        <div className="text-paragraph">
                            <p className="py-1">While I was completing all of the work for these guides, I realised a lot of it wasn't very well documented for people with less experience.</p>
                            <p className="py-1">I kept at it until I knew it was done and now I'm sharing this information so either me, or anyone in the same situation can use it for the same thing.</p>
                            <p className="py-1">Hope this helps as much as it helped me.</p>
                        </div>
                        <p className="mt-2 text-xl text-title font-bold">Where to Start?</p>
                        <hr className="my-1"/>
                        <div id="pi-microk8s-dashboard" onClick={props.chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between pl-2">
                            <p>Microk8s' Dashboard</p>
                            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                            </svg>
                        </div>
                    </div>
                );
        }
    }

    useEffect(() => {
        Article();
    }, [])

    if(!Loaded){
        return (
            <div className="my-5 overflow-y-auto bg-accent md:min-w-xl xs:h-auto sm:h-auto flex flex-col items-center rounded shadow sm:shadow-md">
                <div className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p>Loading</p>
                </div>
            </div>
        );
    } else {
        return (
            <div onScroll={capScroll} className="mx-10 overflow-y-auto bg-primary md:min-w-xl xs:h-auto sm:h-auto flex flex-col items-center rounded shadow sm:shadow-md">
                <div className="rounded-t py-4 bg-other flex justify-around w-full">
                    <div className="mt-2">
                        <h1 className="text-2xl text-title font-bold">{Title}</h1>
                    </div>
                </div>
                <div id="rescroll" className="bg-other animate__animated animate__fadeIn hidden w-full sticky top-0 flex flex-col items-center">
                    <button onClick={scroll} className="text-center my-3 w-11/12 py-2 px-2 font-semi-bold text-accent rounded transition duration-300 border border-accent hover:bg-accent hover:text-accent-light">
                        Return to Top
                    </button>
                </div>
                <Article />
            </div>
        );
    }
}

export default Components;