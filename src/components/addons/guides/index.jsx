import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { default as Guides } from './guides.jsx';

function Component(props){

    const [ActiveGuides, setActiveGuides] = useState({
        IsGuide: false,
        Guide: '',
        PiGuides: true,
        PiMicroK8s: true,
        DockerGuides: false,
        SSLGuides: false
    });

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

    const dropdown = (e) => {
        let dropdowns = e.target;
        dropdowns = dropdowns.nodeName !== "DIV" ? dropdowns.parentElement : dropdowns;
        let value = dropdowns.id;

        setActiveGuides(ActiveGuides => ({
            ...ActiveGuides,
            [value]: ActiveGuides[value] ? false : true
        }));

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

    const chooseGuide = (e) => {
        let el = e.target;
        let id = el.nodeName !== "DIV" ? el.parentElement.id : el.id;

        setActiveGuides(ActiveGuides => ({
            ...ActiveGuides,
            IsGuide: true,
            Guide: id
        }));
    }

    return (
        <div className="bg-secondary animate__animated animate__fadeIn w-full h-full overflow-auto grid grid-cols-3">
            <div className="bg-secondary"></div>
            <div className="my-4 mb-20 bg-secondary animate__animated animate__fadeIn flex flex-col w-full max-h-full items-center overflow-auto">
                { ActiveGuides.IsGuide ? <Guides guide={ActiveGuides.Guide} chooseGuide={chooseGuide} /> : <Guides chooseGuide={chooseGuide} /> }
            </div>
            <div className="bg-secondary col-span-1 pt-10 p-1 text-defualt">
                <div className="p-3 rounded-md min-w-56 w-4/12 bg-primary bg-opacity-75 shadow-md">
                    <p className="text-title font-bold">Guides</p>
                    <hr className="mb-4"/>
                    <div>
                        <div>
                            <div onClick={chooseGuide} className="cursor-pointer text-title hover:text-accent  flex justify-between">
                                <p>Introduction</p>
                                <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                    <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                                </svg>
                            </div>
                            <div>
                                <div id="PiGuides" onClick={dropdown} className="cursor-pointer text-title hover:text-accent  flex justify-between">
                                    <p>Raspberry Pi Guides</p>
                                    {(!ActiveGuides.PiGuides) ? <Arrows up={false} /> : <Arrows up={true} />}
                                </div>
                                <div className="animate__animated text-paragraph pl-3">
                                    <div className="">
                                        <div id="PiMicroK8s" onClick={dropdown} className="cursor-pointer text-title hover:text-accent  flex justify-between">
                                            <p>Setting up MicroK8s</p>
                                            {(!ActiveGuides.PiMicroK8s) ? <Arrows up={false} /> : <Arrows up={true} />}
                                        </div>
                                        <div className="animate__animated text-paragraph pl-3 mb-3">
                                            <div className="animate__animated text-paragraph pl-1">
                                                <div id="pi-microk8s-intro" onClick={chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                                    <p>What is MicroK8s?</p>
                                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                                        <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                                                    </svg>
                                                </div>
                                                <div id="pi-microk8s-dashboard" onClick={chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                                    <p>Microk8s' Dashboard</p>
                                                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                                        <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="DockerGuides" onClick={dropdown} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                <p>Docker Guides</p>
                                {(!ActiveGuides.DockerGuides) ? <Arrows up={false} /> : <Arrows up={true} />}
                            </div>
                            <div className="hidden animate__animated text-paragraph pl-3 mb-3">
                                <div className="animate__animated text-paragraph pl-1">
                                    <div id="docker-intro" onClick={chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                        <p>What is Docker?</p>
                                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                            <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                                        </svg>
                                    </div>
                                    <div id="docker-start" onClick={chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                        <p>Node/React & Docker</p>
                                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                            <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="SSLGuides" onClick={dropdown} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                <p>SSL Guides</p>
                                {(!ActiveGuides.SSLGuides) ? <Arrows up={false} /> : <Arrows up={true} />}
                            </div>
                            <div className="hidden animate__animated text-paragraph pl-3 mb-3">
                                <div className="animate__animated text-paragraph pl-1">
                                    <div id="docker-intro" onClick={chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                        <p>What is SSL?</p>
                                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                            <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                                        </svg>
                                    </div>
                                    <div id="docker-started" onClick={chooseGuide} className="cursor-pointer text-title hover:text-accent flex justify-between">
                                        <p>Generating Local SSL</p>
                                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                                            <path className="stroke-current text-default" d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
                                        </svg>
                                    </div>
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