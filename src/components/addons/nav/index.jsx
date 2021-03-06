import React, { useEffect } from 'react';

function Component(){

    useEffect(() => {
        const initTheme = () => {
            if(!window.localStorage.getItem('theme') || !window.localStorage.getItem('colour')){
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    window.localStorage.setItem('theme', 'dark');
                    window.localStorage.setItem('theme', 'blue');
                    document.getElementById('root').classList.add(`theme-dark`, `accent-blue`);
                    document.getElementById('toggle').checked = true;
                } else {
                    window.localStorage.setItem('theme', 'light');
                    window.localStorage.setItem('colour', 'purple');
                    document.getElementById('root').classList.add(`theme-light`, `accent-purple`);
                    document.getElementById('toggle').checked = false;
                }
            } else {
                let theme = window.localStorage;
                document.getElementById('root').classList.add(`theme-${theme.theme}`);
                if(theme.colour === 'null' && theme.theme === 'light') theme.colour = 'purple';
                if(theme.colour === 'null' && theme.theme === 'dark') theme.colour = 'blue';
                document.getElementById('root').classList.add(`accent-${theme.colour}`);
                if (theme.theme === 'dark') document.getElementById('toggle').checked = true;
                if(!document.getElementById(`set-${theme.colour}`)) return;
                document.getElementById(`set-${theme.colour}`).classList.add('border-2');
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                const newColorScheme = e.matches ? 'dark' : 'light';
                document.getElementById('root').classList.remove('theme-light', 'theme-dark');
                window.localStorage.setItem('theme', `${newColorScheme}`);
                document.getElementById('root').classList.add(`theme-${newColorScheme}`);
            });

            let dropdowns = document.querySelectorAll('.started-container');
            for(let drop in dropdowns){
                drop = dropdowns[drop];
                if(typeof(drop)!== 'object') return;
                drop.addEventListener('mouseover', () => {
                    drop.children[1].style.display = 'block';
                });
                drop.addEventListener('mouseleave', () => {
                    drop.children[1].style.display = 'none';
                });
            }
            return true;
        };
        initTheme();
    }, [])

    const setTheme = () => {
        let prev = window.localStorage.getItem('theme');
        switch(prev){
            case 'light':
                window.localStorage.setItem('theme', 'dark');
                document.getElementById('root').classList.remove('theme-light', 'theme-dark');
                return document.getElementById('root').classList.add('theme-dark');
            case 'dark':
                window.localStorage.setItem('theme', 'light');
                document.getElementById('root').classList.remove('theme-light', 'theme-dark');
                return document.getElementById('root').classList.add('theme-light');
            default:
                window.localStorage.setItem('theme', 'light');
                document.getElementById('root').classList.remove(`theme-dark`, `theme-light`);
                return document.getElementById('root').classList.add(`theme-light`);
        }
    }

    return(
        <nav className='hidden md:flex sticky max-h-full top-0 z-30 items-center justify-between flex-wrap bg-primary border-accent border-b-4 shadow-lg'>
            <div className='text-default w-full lg:h-full block flex flex-col flex-grow lg:flex-row lg:items-center justify-end text-left lg:w-auto'>
                <div className='w-full md:w-36 flex justify-around p-4 items-center rounded-b items-center'>
                    <p className="w-4">🌞</p>
                    <div className='relative inline-block w-10 align-middle select-none transition duration-200 ease-in'>
                        <input type='checkbox' onClick={setTheme} name='toggle' id='toggle' className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'/>
                        <label htmlFor='toggle' className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'></label>
                    </div>
                    <p className="w-4">🌑</p>
                </div>
            </div>
        </nav>
    );

}

export default Component;