import React from 'react';


class Logo extends React.Component {
    render() {
        return (
            <svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path d="M100.699301,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100.699301,0 C155.228475,0 200,44.771525 200,100 C200,155.228475 155.228475,200 100.699301,200 Z M100.699301,185.915493 C147.504213,185.915493 186.013986,147.449817 186.013986,100 C186.013986,52.5501835 147.504213,14.084507 100.699301,14.084507 C52.4957873,14.084507 13.986014,52.5501835 13.986014,100 C13.986014,147.449817 52.4957873,185.915493 100.699301,185.915493 Z" id="path-1"></path>
                    <path d="M100.699301,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,0 100.699301,0 C155.228475,0 200,44.771525 200,100 C200,155.228475 155.228475,200 100.699301,200 Z M100.699301,185.915493 C147.504213,185.915493 186.013986,147.449817 186.013986,100 C186.013986,52.5501835 147.504213,14.084507 100.699301,14.084507 C52.4957873,14.084507 13.986014,52.5501835 13.986014,100 C13.986014,147.449817 52.4957873,185.915493 100.699301,185.915493 Z" id="path-3"></path>
                </defs>
                <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Logo">
                        <path d="M48,157.460076 L48,159.193916 C61.772973,172.197719 79.9027027,180 100,180 C120.097297,180 138.227027,172.053232 152,159.193916 L152,157.460076 C152,127.984791 128.67027,104 100,104 C71.3297298,104 48,127.984791 48,157.460076 Z" id="Shape" fill="#F0BD1D" fillRule="nonzero"></path>
                        <circle id="Oval" fill="#F0BD1D" fillRule="nonzero" cx="100" cy="68" r="28"></circle>
                        <g id="Rectangle-2">
                            <mask id="mask-2" fill="white">
                                <use xlinkHref="#path-1"></use>
                            </mask>
                            <g id="Mask"></g>
                            <rect mask="url(#mask-2)" x="102.097902" y="0" width="97.9020979" height="98.5915493"></rect>
                        </g>
                        <g id="Rectangle-3">
                            <mask id="mask-4" fill="white">
                                <use xlinkHref="#path-3"></use>
                            </mask>
                            <use id="Mask" fill="#F0BD1D" xlinkHref="#path-3"></use>
                            <polygon fill="currentColor" mask="url(#mask-4)" points="0 0 99.3006993 0 99.3006993 101.408451 200.611888 101.408451 200.611888 200 0 200"></polygon>
                        </g>
                    </g>
                </g>
            </svg>

        )
    }
}

export default Logo;
