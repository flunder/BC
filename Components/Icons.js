import * as React from "react"
import Svg, { Path, Image, G, Defs, ClipPath } from "react-native-svg"

function Cog(props) {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <Path
                clipRule="evenodd"
                d="M16 20a4 4 0 100-8 4 4 0 000 8z"
                stroke="#fff"
                strokeWidth={2.667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                clipRule="evenodd"
                d="M25.867 20a2.2 2.2 0 00.44 2.427l.08.08a2.666 2.666 0 010 3.773 2.667 2.667 0 01-3.774 0l-.08-.08a2.2 2.2 0 00-2.426-.44 2.2 2.2 0 00-1.334 2.013V28a2.667 2.667 0 11-5.333 0v-.12A2.2 2.2 0 0012 25.867a2.2 2.2 0 00-2.427.44l-.08.08A2.667 2.667 0 014.938 24.5c0-.708.281-1.387.782-1.887l.08-.08a2.2 2.2 0 00.44-2.426 2.2 2.2 0 00-2.013-1.334H4a2.667 2.667 0 110-5.333h.12A2.2 2.2 0 006.133 12a2.2 2.2 0 00-.44-2.427l-.08-.08A2.667 2.667 0 017.5 4.938c.708 0 1.386.281 1.887.782l.08.08a2.2 2.2 0 002.426.44H12a2.2 2.2 0 001.333-2.013V4a2.667 2.667 0 015.334 0v.12A2.2 2.2 0 0020 6.133a2.2 2.2 0 002.427-.44l.08-.08A2.667 2.667 0 0127.062 7.5c0 .708-.281 1.386-.782 1.887l-.08.08a2.2 2.2 0 00-.44 2.426V12a2.2 2.2 0 002.013 1.333H28a2.667 2.667 0 010 5.334h-.12A2.2 2.2 0 0025.867 20z"
                stroke="#fff"
                strokeWidth={2.667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function Heart({ stroke, fill, ...props }) {
    return (
        <Svg width={30} height={26} viewBox="0 0 30 26" fill="none" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.05 3.762a6.875 6.875 0 00-9.725 0L15 5.087l-1.325-1.325a6.877 6.877 0 10-9.725 9.726l1.325 1.325L15 24.538l9.725-9.726 1.325-1.324a6.875 6.875 0 000-9.726z"
                fill={fill || "#47B2FF"}
                stroke={stroke || "#47B2FF"}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function List(props) {
    return (
        <Svg width={31} height={35} viewBox="0 0 31 35" fill="none" {...props}>
            <Path
                d="M3 17.5h18M3 8.75h18M3 26.25h18"
                stroke="#019DF5"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                opacity={0.6}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.21 7.152a1.375 1.375 0 00-1.945 0L28 7.417l-.265-.265a1.375 1.375 0 10-1.945 1.945l.265.265L28 11.307l1.945-1.945.265-.265a1.375 1.375 0 000-1.945zM30.21 15.152a1.375 1.375 0 00-1.945 0l-.265.266-.265-.265a1.375 1.375 0 10-1.945 1.944l.265.265L28 19.309l1.945-1.945.265-.265a1.375 1.375 0 000-1.945zM30.21 24.152a1.375 1.375 0 00-1.945 0l-.265.265-.265-.265a1.375 1.375 0 10-1.945 1.945l.265.265L28 28.309l1.945-1.945.265-.265a1.375 1.375 0 000-1.945z"
                fill="#47B2FF"
                stroke="#47B2FF"
                strokeWidth={0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function CloseButton(props) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M18 6L6 18M6 6l12 12"
                stroke="#242020"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function BabyMale(props) {
    return (
        <Svg width={157} height={186} viewBox="0 0 157 186" fill="none" {...props}>
            <Path
                d="M147.5 127a9.5 9.5 0 009.5-9.5 9.5 9.5 0 00-9.5-9.5 9.5 9.5 0 00-9.5 9.5 9.5 9.5 0 009.5 9.5z"
                fill="#F6CBAB"
            />
            <Path
                d="M79 184.818c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67z"
                fill="#FEDBBD"
            />
            <Path
                d="M9.5 128a9.5 9.5 0 009.5-9.5 9.5 9.5 0 00-9.5-9.5 9.5 9.5 0 00-9.5 9.5 9.5 9.5 0 009.5 9.5z"
                fill="#FEDBBD"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M92.615 52.667c21.561 4.492 40.464 19.512 48.943 41.601 13.261 34.546-3.994 73.3-38.539 86.561-15.052 5.778-30.902 5.762-45.095 1.048 12.157 2.529 25.156 1.714 37.609-3.066 34.545-13.261 51.8-52.015 38.539-86.56-7.426-19.346-22.847-33.269-41.046-39.447l-.411-.137z"
                fill="#F6CBAB"
            />
            <Path
                d="M56.5 110c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5-3.5 2.239-3.5 5 1.567 5 3.5 5zM98.5 110c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5-3.5 2.239-3.5 5 1.567 5 3.5 5z"
                fill="#2C2C2C"
            />
            <Path
                d="M98 124.5c0 3.866 5.82 7 13 7s13-3.134 13-7-5.82-7-13-7-13 3.134-13 7zM33 124.5c0 3.866 5.82 7 13 7s13-3.134 13-7-5.82-7-13-7-13 3.134-13 7z"
                fill="#FCB6A4"
            />
            <Path
                d="M68.102 133.533c.887 7.857 4.61 11.786 11.17 11.786s10.284-3.929 11.171-11.786"
                stroke="#FEB7AB"
                strokeWidth={3}
                strokeLinejoin="round"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.114 86.258c3.114-1.133 6.224-1.158 5.846-2.196-.377-1.038-3.208-.96-6.322.173s-5.332 2.893-4.954 3.931c.378 1.038 2.316-.775 5.43-1.908zM109.501 86.075c-3.114-1.133-6.224-1.158-5.846-2.196.378-1.038 3.208-.96 6.322.173s5.332 2.894 4.954 3.932c-.378 1.038-2.316-.775-5.43-1.909z"
                fill="#EEA54A"
            />
            <Path
                d="M70 7.687C82.026.144 91.027 1.706 97.003 12.373c4.981 8.827 1.543 20.415-12.66 26.712-2.368 2.402-4.28 6.501-5.733 12.297"
                stroke="#F09427"
                strokeWidth={6}
            />
        </Svg>
    )
}

function BabyFemale(props) {
    return (
        <Svg width={157} height={186} viewBox="0 0 157 186" fill="none" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M147.5 127a9.5 9.5 0 009.5-9.5 9.5 9.5 0 00-9.5-9.5 9.5 9.5 0 00-9.5 9.5 9.5 9.5 0 009.5 9.5z"
                    fill="#EFBE9D"
                />
                <Path
                    d="M79 184.818c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67z"
                    fill="#FEDBBD"
                />
                <Path
                    d="M9.5 128a9.5 9.5 0 009.5-9.5 9.5 9.5 0 00-9.5-9.5 9.5 9.5 0 00-9.5 9.5 9.5 9.5 0 009.5 9.5z"
                    fill="#FEDBBD"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M92.615 52.667c21.561 4.492 40.464 19.512 48.943 41.601 13.261 34.546-3.994 73.3-38.539 86.561-15.052 5.778-30.902 5.762-45.095 1.048 12.157 2.529 25.156 1.714 37.609-3.066 34.545-13.261 51.8-52.015 38.539-86.56-7.426-19.346-22.847-33.269-41.046-39.447l-.411-.137z"
                    fill="#EFBE9D"
                />
                <Path
                    d="M56.5 110c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5-3.5 2.239-3.5 5 1.567 5 3.5 5zM98.5 110c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5-3.5 2.239-3.5 5 1.567 5 3.5 5z"
                    fill="#2C2C2C"
                />
                <Path
                    d="M98 124.5c0 3.866 5.82 7 13 7s13-3.134 13-7-5.82-7-13-7-13 3.134-13 7zM33 124.5c0 3.866 5.82 7 13 7s13-3.134 13-7-5.82-7-13-7-13 3.134-13 7z"
                    fill="#FCB6A4"
                />
                <Path
                    d="M68.101 133.533c.888 7.857 4.611 11.786 11.171 11.786s10.284-3.929 11.171-11.786"
                    stroke="#FEB7AB"
                    strokeWidth={3}
                    strokeLinejoin="round"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.114 86.258c3.114-1.133 6.224-1.158 5.846-2.196-.377-1.038-3.208-.96-6.322.173s-5.332 2.893-4.954 3.931c.378 1.038 2.316-.775 5.43-1.908zM109.501 86.075c-3.114-1.133-6.224-1.158-5.846-2.196.378-1.038 3.208-.96 6.322.173s5.332 2.894 4.954 3.932c-.378 1.038-2.316-.775-5.43-1.909z"
                    fill="#EEA54A"
                />
                <Path
                    d="M70 7.687C82.026.144 91.027 1.706 97.003 12.373c4.981 8.827 1.543 20.415-12.66 26.712-2.368 2.402-4.28 6.501-5.733 12.297"
                    stroke="#F09427"
                    strokeWidth={6}
                />
                <G clipPath="url(#prefix__clip1)">
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.453 53.717c-9.289-2.273-11.8-5.534-7.533-9.783 4.09-3.743 6.601-.482 7.533 9.783z"
                        fill="#FEBAA5"
                    />
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M54.18 53.747c-1.372-9.464.711-13.014 6.249-10.649 5.002 2.39 2.92 5.94-6.249 10.649z"
                        fill="#FEBAA5"
                    />
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M53.748 53.652c7.079-6.43 11.186-6.688 12.322-.774.816 5.484-3.291 5.742-12.322.774z"
                        fill="#FEBAA5"
                    />
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M54.554 54.086c-7.08-6.43-11.187-6.688-12.322-.774-.816 5.484 3.29 5.742 12.322.774z"
                        fill="#FEBAA5"
                    />
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M54.837 53.249c-9 3.232-11.156 6.737-6.469 10.516 4.46 3.295 6.615-.21 6.469-10.516z"
                        fill="#FEBAA5"
                    />
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M53.515 53.649c-.374 9.555 2.068 12.868 7.328 9.937 4.725-2.9 2.283-6.212-7.328-9.937z"
                        fill="#FEBAA5"
                    />
                    <Path
                        d="M54.368 56.32a2.82 2.82 0 100-5.64 2.82 2.82 0 000 5.64z"
                        fill="#fff"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h157v186H0z" />
                </ClipPath>
                <ClipPath id="prefix__clip1">
                    <Path fill="#fff" d="M42 42h24.302v23H42z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}


export {
    Cog,
    Heart,
    List,
    CloseButton,
    BabyMale,
    BabyFemale
}
