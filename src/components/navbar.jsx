import React from "react"


const Navbar = () => {
    return ( 
        <section className="navigation">
          
            <div className="homeIcon">
            <svg width="149" height="63" viewBox="0 0 149 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M98.5 27.5C98.5 41.3071 87.3071 52.5 73.5 52.5C59.6929 52.5 48.5 41.3071 48.5 27.5C48.5 13.6929 59.6929 2.5 73.5 2.5C87.3071 2.5 98.5 13.6929 98.5 27.5Z" stroke="#FFFF00" stroke-width="5"/>
<path d="M63.5752 18.8155C64.7172 18.8155 65.6429 17.8898 65.6429 16.7478C65.6429 15.6059 64.7172 14.6802 63.5752 14.6802C62.4333 14.6802 61.5076 15.6059 61.5076 16.7478C61.5076 17.8898 62.4333 18.8155 63.5752 18.8155Z" fill="#FFFF00"/>
<path d="M58.1992 28.3276C59.5763 36.1723 66.6684 41.693 74.327 41.1471C81.5143 40.6385 87.5146 34.9069 88.3872 27.5005" stroke="#FFFF00" stroke-width="6" stroke-miterlimit="10"/>
<path d="M58.13 31C59.8034 31 61.16 29.6569 61.16 28C61.16 26.3431 59.8034 25 58.13 25C56.4566 25 55.1 26.3431 55.1 28C55.1 29.6569 56.4566 31 58.13 31Z" fill="#FFFF00"/>
<path d="M88.33 31C90.0035 31 91.36 29.6569 91.36 28C91.36 26.3431 90.0035 25 88.33 25C86.6566 25 85.3 26.3431 85.3 28C85.3 29.6569 86.6566 31 88.33 31Z" fill="#FFFF00"/>
<path d="M83.4248 18.8155C84.5668 18.8155 85.4925 17.8898 85.4925 16.7478C85.4925 15.6059 84.5668 14.6802 83.4248 14.6802C82.2829 14.6802 81.3572 15.6059 81.3572 16.7478C81.3572 17.8898 82.2829 18.8155 83.4248 18.8155Z" fill="#FFFF00"/>
</g>
<g filter="url(#filter1_d)">
<path d="M13.08 31.18V28.99H25.26V23.77H13.08V21.82H28.23V16H4.86V37H28.56V31.18H13.08Z" fill="black"/>
</g>
<g filter="url(#filter2_d)">
<path d="M138.66 27.14C141.87 26.96 143.7 24.86 143.7 22.52C143.7 19.25 140.28 17 134.91 17H118.86V38H136.11C141.48 38 144.9 35.69 144.9 32.27C144.9 29.15 142.02 27.38 138.66 27.14ZM127.14 22.1H133.5C134.52 22.1 135.39 22.58 135.39 23.6C135.39 24.62 134.52 25.1 133.5 25.1H127.14V22.1ZM134.31 32.9H127.14V29.6H134.31C135.51 29.6 136.29 30.23 136.29 31.25C136.29 32.27 135.51 32.9 134.31 32.9Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d" x="42" y="0" width="63" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="0.859985" y="16" width="31.7" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="114.86" y="17" width="34.04" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

            </div>
           <nav>
                <ul>
                    <li className="about">ABOUT</li>
                    <li className="projects">PROJECTS</li>
                    <li className="contact">CONTACT</li>
                </ul>
            </nav> 
        </section>
    )
    }

    export default Navbar