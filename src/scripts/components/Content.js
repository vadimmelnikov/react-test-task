import React from 'react';
import styles from './Content.scss';
import {Link} from 'react-router-dom';


class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className="main">
                    <div className="large-container">
                        <div className={styles.top}>
                            <h1 className="large-title">WunderX exchange</h1>
                            <p className={styles.textcont}>We’ve combined the best technologies and financial solutions
                                that are used across the top classic and crypto exchanges to create a superior
                                product.</p>
                        </div>
                        <ul className={styles.column}>
                            <li className={styles.columnItem}>
                                <ul className={styles.flex}>
                                    <li className={styles.flexItem}>
                                        <div className={styles.pic}>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" width="52" height="52"
                                                 viewBox="0 0 52 52">
                                                <defs>
                                                    <path id="a" d="M0 .242h52v47.073H0z"/>
                                                    <path id="c" d="M0 52.759h52V.999H0z"/>
                                                </defs>
                                                <g fill="none" fillRule="evenodd" transform="translate(0 -1)">
                                                    <g transform="translate(0 .759)">
                                                        <mask id="b" fill="#fff">
                                                            <use xlinkHref="#a"/>
                                                        </mask>
                                                        <path fill="#2D6AE4"
                                                              d="M3.487 26.167V.242H1.743v1.743H0v1.744h1.743v8.717H0v1.743h1.743v8.718H0v1.743h1.743v8.717H0v1.744h1.743V44.7c0 .48.39.872.872.872h9.59v1.743h1.742v-1.743h8.718v1.743h1.743v-1.743h8.718v1.743h1.743v-1.743h8.717v1.743h1.744v-1.743H52v-1.743H3.487V26.167z"
                                                              mask="url(#b)"/>
                                                    </g>
                                                    <path fill="#2D6AE4"
                                                          d="M5.227 11.69l-1.16-1.243L5.303 9.28l1.167 1.25-1.243 1.16zm2.39 2.432l-1.201-1.203L7.61 11.71l1.209 1.208-1.202 1.203zm2.309 2.43l-1.16-1.243 1.236-1.167 1.167 1.25-1.243 1.16zm4.66 5.362l-1.02-1.36 1.355-1.028 1.026 1.368-1.36 1.02zm2.124 2.673l-1.072-1.32 1.313-1.08 1.079 1.328-1.32 1.072zm2.078 2.668l-1.073-1.32 1.313-1.08 1.079 1.328-1.32 1.072zm2.03 2.662l-1.02-1.36 1.354-1.028 1.026 1.368-1.36 1.02zM30.724 28.508l-.655-1.568 1.58-.65.646 1.571-1.572.647zm-2.797 1.214l-.657-1.568 1.58-.65.647 1.571-1.57.647zm-2.799 1.214l-.654-1.569 1.58-.65.647 1.572-1.573.647zM36.698 29.127l-1.401-.963.956-1.407 1.408.969-.963 1.4zm2.59 1.894L37.929 30l1.013-1.366 1.368 1.026-1.02 1.36zm2.689 1.877l-1.401-.963.956-1.407 1.409.969-.964 1.4z"/>
                                                    <path fill="#2D6AE4"
                                                          d="M13.106 17.926a.672.672 0 1 0 0 1.344.672.672 0 0 0 0-1.344m0 3.044a2.375 2.375 0 0 1-2.372-2.372 2.375 2.375 0 0 1 2.372-2.372 2.375 2.375 0 0 1 2.372 2.372 2.375 2.375 0 0 1-2.372 2.372M22.794 30.369a.672.672 0 1 0 0 1.344.672.672 0 0 0 0-1.344m0 3.044a2.375 2.375 0 0 1-2.372-2.372 2.375 2.375 0 0 1 2.372-2.372 2.375 2.375 0 0 1 2.372 2.372 2.375 2.375 0 0 1-2.372 2.372M33.984 25.513a.672.672 0 1 0 .002 1.344.672.672 0 0 0-.002-1.344m0 3.043a2.374 2.374 0 0 1-2.372-2.37 2.375 2.375 0 0 1 2.372-2.373 2.375 2.375 0 0 1 2.372 2.372 2.374 2.374 0 0 1-2.372 2.371M44.544 33.055a.672.672 0 1 0 0 1.344.672.672 0 0 0 0-1.344m0 3.044a2.375 2.375 0 0 1-2.372-2.372 2.375 2.375 0 0 1 2.372-2.372 2.375 2.375 0 0 1 2.372 2.372 2.375 2.375 0 0 1-2.372 2.372"/>
                                                    <mask id="d" fill="#fff">
                                                        <use xlinkHref="#c"/>
                                                    </mask>
                                                    <path fill="#2D6AE4"
                                                          d="M16.578 52.759h1.741v-1.741h-1.741zM20.059 52.759H21.8v-1.741h-1.741zM23.541 52.759h1.74v-1.741h-1.74zM27.022 52.759h1.741v-1.741h-1.741zM30.503 52.759h1.741v-1.741h-1.741zM33.985 52.759h1.741v-1.741h-1.741zM44.544 12.188a.672.672 0 1 1 0-1.344.672.672 0 0 1 0 1.344m-10.56 7.542a.673.673 0 1 1 .003-1.345.673.673 0 0 1-.003 1.345m-11.19-4.856a.672.672 0 1 1 0-1.344.672.672 0 0 1 0 1.344M21.02 15.762a.065.065 0 0 0 .008.009l-.008-.009m-7.914 11.555a.672.672 0 1 1 0-1.344.672.672 0 0 1 0 1.344M44.544 9.145a2.374 2.374 0 0 0-2.372 2.371c0 .205.035.401.083.59l-6.964 4.975a2.363 2.363 0 0 0-2.996.317l-7.14-3.097c.003-.034.01-.065.01-.099a2.374 2.374 0 0 0-2.371-2.371 2.374 2.374 0 0 0-2.372 2.371c0 .447.132.861.348 1.218l-6.977 8.967a2.331 2.331 0 0 0-.686-.114 2.375 2.375 0 0 0-2.373 2.372c0 .357.085.692.227.996l-9.244 9.565 1.223 1.181 9.235-9.561a2.37 2.37 0 0 0 3.304-2.181c0-.447-.132-.86-.347-1.217l6.98-8.966c.218.066.443.112.682.112.663 0 1.262-.275 1.692-.714l-.002.002 7.139 3.098c-.001.033-.01.064-.01.098a2.374 2.374 0 0 0 2.37 2.372 2.374 2.374 0 0 0 2.373-2.372c0-.205-.034-.4-.083-.59l6.965-4.975c.375.249.824.395 1.306.395a2.375 2.375 0 0 0 2.372-2.372 2.374 2.374 0 0 0-2.372-2.371"
                                                          mask="url(#d)"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className={styles.flexItem}>
                                        <h2 className={styles.title}>Derivatives</h2>
                                        <p className={styles.txt}>
                                            Futures provide natural summetry between longs and shorts. This allows
                                            traders to gain profits both on bullish and bearish runs without any
                                            additional fees.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.columnItem}>
                                <ul className={styles.flex}>
                                    <li className={styles.flexItem}>
                                        <div className={styles.pic}>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" width="54" height="54"
                                                 viewBox="0 0 54 54">
                                                <defs>
                                                    <path id="a" d="M.294.6h7.471v7.472H.295z"/>
                                                    <path id="c" d="M.204.413h9.824v9.824H.204z"/>
                                                </defs>
                                                <g fill="none" fillRule="evenodd">
                                                    <path fill="#2D6AE4"
                                                          d="M30.578 51.7h-9.05v-3.05h3.743v-1.7h-2.776l3.558-4.262 4.525 5.42V51.7zm18.94-16.35L2.224 45.713l.364 1.66 21.22-4.65-3.528 4.226h-.385v.53a.83.83 0 0 0-.068.32v4.75c0 .469.381.85.85.85h10.75a.85.85 0 0 0 .85-.85V47.8a.85.85 0 0 0-.198-.545l-4.477-5.363 22.278-4.882-.364-1.66zM10.146 23.934c4.657 0 8.446 3.79 8.446 8.446 0 4.657-3.789 8.446-8.445 8.446-4.653-.005-8.442-3.794-8.447-8.446 0-4.657 3.789-8.446 8.446-8.446m0 18.592c5.595 0 10.146-4.55 10.146-10.146 0-5.594-4.551-10.146-10.146-10.146C4.552 22.234 0 26.786 0 32.381c.006 5.588 4.557 10.14 10.146 10.145"/>
                                                    <path fill="#2D6AE4"
                                                          d="M9.28 36.666v.913h1.733v-.911a2.74 2.74 0 0 0 2.599-2.512 2.763 2.763 0 0 0-2.577-2.517l-1.524-.225c-.687-.102-1.098-.49-1.098-.804 0-.39.607-.826 1.42-.826h.627c.813 0 1.419.433 1.419.826v.233h1.733v-.233a2.74 2.74 0 0 0-2.6-2.512v-.916H9.28v.91a2.742 2.742 0 0 0-2.6 2.513 2.766 2.766 0 0 0 2.578 2.517l1.523.226c.687.1 1.098.488 1.098.802 0 .39-.606.827-1.42.827h-.626c-.813.003-1.42-.431-1.42-.824v-.233H6.68v.233a2.741 2.741 0 0 0 2.6 2.513M40.17 33.77c-4.653-.004-8.442-3.793-8.447-8.445 0-4.657 3.79-8.446 8.446-8.446 4.657 0 8.446 3.789 8.446 8.446s-3.789 8.446-8.445 8.446m0-18.592c-5.595 0-10.147 4.552-10.147 10.147.006 5.588 4.557 10.139 10.146 10.145 5.595 0 10.147-4.552 10.147-10.146 0-5.594-4.552-10.146-10.147-10.146"/>
                                                    <path fill="#2D6AE4"
                                                          d="M41.469 24.459h-2.6v-1.733h2.6a.867.867 0 1 1 0 1.733m0 3.465h-2.6V26.19h2.6a.867.867 0 0 1 0 1.733m1.764-6.237a2.593 2.593 0 0 0-.897-.535v-1.026h-1.733v.867H38.87v-.867h-1.733v.867h-.867v1.733h.867v5.199h-.867v1.732h.867v.867h1.733v-.867h1.733v.867h1.733v-1.026a2.575 2.575 0 0 0 1.057-4.173 2.575 2.575 0 0 0-.16-3.638"/>
                                                    <g transform="translate(34 -.6)">
                                                        <mask id="b" fill="#fff">
                                                            <use xlinkHref="#a"/>
                                                        </mask>
                                                        <path fill="#2D6AE4"
                                                              d="M4.03 2.26a2.076 2.076 0 1 1 0 4.152 2.076 2.076 0 0 1 0-4.151m0 5.81a3.743 3.743 0 0 0 3.735-3.735A3.736 3.736 0 1 0 4.03 8.072"
                                                              mask="url(#b)"/>
                                                    </g>
                                                    <g transform="translate(43 4.4)">
                                                        <mask id="d" fill="#fff">
                                                            <use xlinkHref="#c"/>
                                                        </mask>
                                                        <path fill="#2D6AE4"
                                                              d="M5.116 8.6a3.275 3.275 0 1 1 0-6.55 3.275 3.275 0 0 1 0 6.55m0-8.187a4.912 4.912 0 1 0 0 9.824 4.912 4.912 0 0 0 0-9.824"
                                                              mask="url(#d)"/>
                                                    </g>
                                                    <path fill="#2D6AE4" d="M47.294 11.37h1.645V8.08h-1.645z"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className={styles.flexItem}>
                                        <h2 className={styles.title}>Leverage up to 100×</h2>
                                        <p className={styles.txt}>
                                            Futures trading volume on classic exchangesis 18 times larger thant he spot
                                            volumes. Crypto is still immature. </p>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.columnItem}>
                                <ul className={styles.flex}>
                                    <li className={styles.flexItem}>
                                        <div className={styles.pic}>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" width="45" height="51"
                                                 viewBox="0 0 45 51">
                                                <defs>
                                                    <path id="a" d="M0 .117h33.604V34H0z"/>
                                                    <path id="c" d="M.216.433h35.467v40.891H.216z"/>
                                                    <path id="e" d="M0 51.567h44.683V1H0z"/>
                                                </defs>
                                                <g fill="none" fillRule="evenodd" transform="translate(0 -1)">
                                                    <g transform="translate(0 17.567)">
                                                        <mask id="b" fill="#fff">
                                                            <use xlinkHref="#a"/>
                                                        </mask>
                                                        <path fill="#2D6AE4"
                                                              d="M32.077 28.879a19.404 19.404 0 0 1-10.62 3.146c-10.741 0-19.482-8.74-19.482-19.483 0-3.901 1.149-7.665 3.322-10.885A.988.988 0 0 0 3.66.552 21.349 21.349 0 0 0 0 12.542c0 5.732 2.232 11.12 6.285 15.173A21.316 21.316 0 0 0 21.458 34c4.172 0 8.217-1.198 11.698-3.466a.988.988 0 0 0-1.079-1.655"
                                                              mask="url(#b)"/>
                                                    </g>
                                                    <g transform="translate(9 .567)">
                                                        <mask id="d" fill="#fff">
                                                            <use xlinkHref="#c"/>
                                                        </mask>
                                                        <path fill="#2D6AE4"
                                                              d="M27.943 10.006l-.467-.467.946-.947a1.032 1.032 0 0 1 1.46 0l3.525 3.526a1.033 1.033 0 0 1 0 1.46l-.946.946-.466-.466-4.052-4.052zm.957 5.748c-.4-.477-.823-.94-1.269-1.386a22.068 22.068 0 0 0-1.385-1.269l.998-.998 2.654 2.654-.998 1zM9.594 4.778H7.421v-2.37h10.074v2.37H9.594zm2.864 3.306c-.629 0-1.255.027-1.876.081v-1.41h3.753v1.411a21.645 21.645 0 0 0-1.877-.082zm19.304 8.535a.985.985 0 0 0 1.397 0l1.645-1.645a3.012 3.012 0 0 0 0-4.253l-3.526-3.526a2.99 2.99 0 0 0-2.126-.88 2.99 2.99 0 0 0-2.126.88L25.38 8.84a.991.991 0 0 0 0 1.397l.468.467-1.184 1.184a21.207 21.207 0 0 0-8.354-3.46V6.753h2.173a.988.988 0 0 0 .988-.988V1.421a.988.988 0 0 0-.988-.988H6.433a.987.987 0 0 0-.987.988v4.345c0 .546.442.988.987.988h2.173V8.43A21.334 21.334 0 0 0 .66 11.615a.988.988 0 0 0 1.087 1.65 19.402 19.402 0 0 1 10.711-3.206c10.743 0 19.483 8.74 19.483 19.483a19.44 19.44 0 0 1-2.925 10.273.988.988 0 0 0 1.677 1.043 21.404 21.404 0 0 0 3.224-11.316c0-4.426-1.332-8.647-3.805-12.206l1.184-1.184.466.467z"
                                                              mask="url(#d)"/>
                                                    </g>
                                                    <path fill="#2D6AE4"
                                                          d="M20.677 28.969l.134-.081a1.385 1.385 0 0 1 2.03 1.221c0 .234-.06.453-.162.646l-.08.135c-.25.363-.669.602-1.14.602a1.383 1.383 0 1 1-.781-2.523zm4.868-2.947l-1.323 2.184a3.376 3.376 0 0 0-.86-.862l2.183-1.322zm-4.087 7.445a3.354 3.354 0 0 0 2.726-1.402c.074-.09.141-.21.197-.306l4.935-8.151a.99.99 0 0 0-1.357-1.357l-8.153 4.936a3.358 3.358 0 0 0-1.706 2.922 3.361 3.361 0 0 0 3.358 3.358z"/>
                                                    <path fill="#2D6AE4"
                                                          d="M21.458 14.975c8.345 0 15.134 6.79 15.134 15.134 0 8.345-6.789 15.134-15.134 15.134S6.324 38.453 6.324 30.109c0-8.344 6.79-15.134 15.134-15.134m0 32.244c9.434 0 17.11-7.676 17.11-17.11s-7.676-17.11-17.11-17.11S4.35 20.676 4.35 30.11s7.675 17.11 17.11 17.11"/>
                                                    <mask id="f" fill="#fff">
                                                        <use xlinkHref="#e"/>
                                                    </mask>
                                                    <path fill="#2D6AE4"
                                                          d="M20.47 20.329h1.976v-4.148H20.47zM20.47 44.037h1.976v-4.148H20.47zM31.238 31.097h4.148v-1.976h-4.148zM7.53 31.097h4.148v-1.976H7.53zM32.005 20.96l-1.397-1.398-1.396 1.397 1.396 1.396zM10.911 39.259l1.397 1.397 1.396-1.397-1.396-1.396zM13.705 20.96l-1.396-1.398-1.397 1.397 1.397 1.396zM29.212 39.259l1.396 1.397 1.397-1.397-1.397-1.396zM8.392 15.647L6.996 14.25 5.6 15.647l1.397 1.396zM34.526 44.574l1.397 1.396 1.396-1.396-1.396-1.397z"
                                                          mask="url(#f)"/>
                                                </g>
                                            </svg>

                                        </div>
                                    </li>
                                    <li className={styles.flexItem}>
                                        <h2 className={styles.title}>Low latencies</h2>
                                        <p className={styles.txt}>
                                            Futures trading volume on classic exchangesis 18 times larger thant he spot
                                            volumes. Crypto is still immature
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.columnItem}>
                                <ul className={styles.flex}>
                                    <li className={styles.flexItem}>
                                        <div className={styles.pic}>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="56"
                                                 viewBox="0 0 46 56">
                                                <defs>
                                                    <path id="a" d="M0 57h45.478V.891H0z"/>
                                                </defs>
                                                <g fill="none" fillRule="evenodd">
                                                    <path fill="#2D6AE4"
                                                          d="M12.916 42.365l1.298 1.298 18.348-18.349-1.297-1.298z"/>
                                                    <g transform="translate(0 -.89)">
                                                        <path fill="#2D6AE4"
                                                              d="M17.694 27.388a2.294 2.294 0 1 1 0 4.588 2.294 2.294 0 0 1 0-4.588m0 6.423a4.13 4.13 0 1 0 0-8.259 4.13 4.13 0 0 0 0 8.26M27.788 42.07a2.294 2.294 0 1 1 0-4.589 2.294 2.294 0 0 1 0 4.588m0-6.423a4.13 4.13 0 0 0 0 8.258 4.13 4.13 0 0 0 0-8.258"/>
                                                        <mask id="b" fill="#fff">
                                                            <use xlinkHref="#a"/>
                                                        </mask>
                                                        <path fill="#2D6AE4"
                                                              d="M27.256 17.99h1.789V8.835h-1.789zM27.256 7.046h1.789V5.257h-1.789zM38.095 17.991h1.789v-3.578h-1.789zM38.095 10.835h1.789V4.468h-1.789zM38.095 2.68h1.789V.891h-1.789zM32.623 11.729h1.789V9.94h-1.789zM32.623 17.99h1.789v-4.472h-1.789zM5.783 9.881h1.789V5.514H5.783zM5.783 13.458h1.789v-1.789H5.783zM5.783 17.931h1.789v-1.789H5.783zM22.574 55.072L3.307 39.93h3.067a.85.85 0 0 0 .85-.85v-17.4h31.03v17.4c0 .47.382.85.85.85h3.037L22.574 55.072zm22.859-16.267a.85.85 0 0 0-.804-.575h-4.674v-17.4a.85.85 0 0 0-.85-.85H6.374a.85.85 0 0 0-.85.85v17.4H.85a.85.85 0 0 0-.525 1.52l21.72 17.068a.85.85 0 0 0 1.045.004l22.059-17.069a.851.851 0 0 0 .284-.948z"
                                                              mask="url(#b)"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className={styles.flexItem}>
                                        <h2 className={styles.title}>Low fees and rebates</h2>
                                        <p className={styles.txt}>
                                            20% of each quarter profit DERx will be spent on buying DCoin back at the
                                            market price.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Content;