import React, { useState } from 'react';

function Component(props){

    const [isFailed, setIsFailed] = useState(false);

    let addClass;
    if(!props.className) addClass='';
    else addClass = props.className;

    const buildUrl = () => {
        let id = props.id;

        return `https://gist.github.com/${id}.js`;
    }

    const getGist = (node) => {
        try {
            const iframe = node;
            let doc = iframe.document;
            doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;
            const link = buildUrl();
            const GistScript = `<script type="text/javascript" src="${link}"></script>`;
            const GistID = props.file ? props.file : props.id;
            const styles = '<style>*{font-size:12px;}</style>';
            const resizeScript = `onload="parent.document.getElementById('${GistID}').style.height=document.body.scrollHeight + 'px'"`;
            const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${GistScript}</body></html>`;
            doc.open();
            doc.writeln(iframeHtml);
            doc.close();
        } catch (e) {
            setIsFailed(true);
        }
    }

    if(!isFailed){
        return (
            <iframe
                className={`w-full ${addClass}`}
                ref={(n) => {
                    if(n !== null){
                        getGist(n);
                    }
                }}
                id={props.file}
                title={props.file}
            />
        );
    } else {
        return (
            <div className='w-56 inline-flex leading-none text-sm'>
                <div className='w-full inline-flex bg-primary leading-none text-black rounded-full p-2 shadow text-sm'>
                    <span className='inline-flex text-white rounded-full h-6 p-1 py-2 justify-center items-center text-'>
                        <svg height='25' viewBox='0 0 21 21' width='25' xmlns='http://www.w3.org/2000/svg'><g className='stroke-current' fill='none' fillRule='evenodd'><circle cx='10.5' cy='10.5' r='8' stroke='white' strokeLinecap='round' strokeLinejoin='round'/><path d='m10.5 11.5v-5' stroke='white' strokeLinecap='round' strokeLinejoin='round'/><circle cx='10.5' cy='14.5' fill='white' r='1'/></g></svg>
                    </span>
                    <p className='name inline-flex mt-1 px-2 text-default'>Failed to Load Github.</p>
                </div>
            </div>
        );
    }


}

export default Component;