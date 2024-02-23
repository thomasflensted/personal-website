import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

    const links = [
        <Link to='/portfolio' className='link underline-animation'>Here</Link>,
        <a className='link underline-animation' target='_blank' href="https://youtube.com/watch?v=_vQmq4OA2_k">motion design</a>,
        <a className='link underline-animation' target='_blank' href="https://youtube.com/ripening">videos</a>,
        <a className='link underline-animation' target='_blank' href="https://instagram.com/toughlens">Denmark to Mongolia</a>,
        <a className='link underline-animation' target='_blank' href="https://thomasflensted.exposure.co/">photo series</a>
    ]

    return (
        <p className="content-text">
            My name is Thomas. I am a motion designer and filmmaker turned developer. {links[0]} are some of the projects I've made. I used to work in communications, mostly doing {links[1]} and shooting and editing films. On the side, I've made a few YouTube {links[2]} about things I find interesting. In 2023, my girlfriend and I spent 10 months driving from {links[3]} and back. Sometimes, I post longer {links[4]} from my travels. If you want to work with me or just say hi, get in touch on one of the links below.
        </p>
    )
}

export default Main