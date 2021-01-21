import React from 'react';
import { Link } from 'react-router-dom';

function Component(props){

    return (
        <div className="bg-secondary animate__animated animate__fadeIn flex flex-col w-full h-full items-center pt-10 overflow-visible md:overflow-hidden">
            <div className="bg-primary md:w-xl xs:h-auto sm:h-auto flex flex-col items-center rounded shadow sm:hadow-md">
                <div className="rounded-t py-4 bg-other flex justify-around w-full">
                    <div className="mt-2">
                        <h1 className="text-2xl text-title font-bold">Rust Rules</h1>
                        <h1 className="text-lg text-title font-bold">[EU] Beantown - RP | NO DECAY | FRIENDLY | LOW POP</h1>
                    </div>
                </div>
                <div className="h-full rounded-b sm:h-auto px-3 md:p-5">
                    <p className="py-4 sm:py-0 font-bold text-title text-xl mb-2 border-b">About the Server</p>
                    <div className="text-title text-base py-3">
                        <p className="pb-4 sm:pb-2 font-semibold underline text-red-400">Tired of being brutalised during a good Rust Run?</p>
                        <li>We offer a <i>no KOS</i> policy!</li>
                        <li>We offer a "ger off my land" policy!</li>
                        <li>Retaliation is fully authorised.</li>
                        <li>Raiding is authorised, as long as it's fair.</li>
                        <li>We offer a no beating up children policy.</li>
                    </div>
                    <hr className="my-1"/>
                    <div className="text-title text-base py-4 sm:py-2">
                        <p className="pb-4 sm:pb-2 font-semibold underline text-red-400">No KOS Policy:</p>
                        <li><i>No random killing.</i></li>
                        <li>Kills are only authorised during a raid, or within reason of the "ger off my land" policy.</li>
                        <li>You are fully authorised to deal big damage to someone who has purposely (or 'accidentally') hurt you or your base.</li>
                        <li>Crates and loot are allowed to be defended, verbal warning to other users before you defend your honour.</li>
                    </div>
                    <hr className="my-1"/>
                    <div className="text-title text-base py-4 sm:py-2">
                        <p className="pb-4 sm:pb-2 font-semibold underline text-red-400">"Ger off my land" Policy:</p>
                        <li>Someone on <i>your land?</i> Do what you please.</li>
                        <li>You must verbally warn the user at least once before opening fire, or have a clear sign indicating Trespass/KOS.</li>
                        <li>It's <i>your land</i>, make sure you let them know.</li>
                        <li>Mines are fair game, sniping is fair game, RPGing yourself - fair game.</li>
                    </div>
                    <hr className="my-1"/>
                    <div className="bg-other rounded text-xs px-4 py-2 flex items-center">
                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <circle className="stroke-current text-default" cx="10.5" cy="10.5" r="8" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                            <path className="stroke-current text-default" d="m10.5 11.5v-5" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle className="stroke-current text-default" cx="10.5" cy="14.5" fill="#2a2e3b" r="1"/></g>
                        </svg>
                        <p className="text-default ml-4 font-semi-bold">Any questions - ask IncendiaryBean or (9th Armoured)Lutzow.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;