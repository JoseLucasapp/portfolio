import React from "react";
import './index.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="images">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/jlgf524150/" target="__blank">
                        <img src={process.env.PUBLIC_URL + 'linkedin_logo.webp'} alt="" />
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/JoseLucasapp" target="__blank">
                        <img src={process.env.PUBLIC_URL + 'github_logo.png'} alt="" />
                    </a>
                </div>
                <div className="spotify">
                    <a href="https://open.spotify.com/user/31b7mr2jxjq6mz2iuet2knw3hmea?si=999cb2b1a6524fae" target="__blank">
                        <img src={process.env.PUBLIC_URL + 'Spotify_logo.webp'} alt="" />
                    </a>
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/jlucasgf/" target="__blank">
                        <img src={process.env.PUBLIC_URL + 'instagram_icon.webp'} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer