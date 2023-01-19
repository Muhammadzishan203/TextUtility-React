import React from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
  return (
    <div>
        <div className="accordion container my-5" id="accordionExample" style={{color: props.mode==='light'?'black':'white'}}>
            <h1 className='my-4 text-center'>{props.abouttitle}</h1>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-3 text-center">
                        <strong>Text-Utility</strong> is a tool I’ve developed to help you find and calculate the characters of your written content. It is built to deliver accurate results and tell how long or short your content is. But this free text counter is more than just a tool for showing you the number of words and characters in your content.
                        This means you can trust our tool to help you in your content related projects, whether you are a professional writer, an online entrepreneur, a student, a teacher, or just a social media explorer.
                    </div>
                </div>
            </div>
    </div>
  )
}

About.defaultProps = {
    abouttitle: "About Text-Utility",
}

About.propTypes = {
    abouttitle: PropTypes.string.isRequired,
}
