/* eslint-disable no-unused-vars */
import "./Imgs.css";
import React from 'react'
import cx from 'classnames'

interface IImgs extends React.HTMLProps<HTMLDivElement> {
    imgsrc: { name: string, src: string }[]
    backward?: boolean
}


export const Img = (props: { name: string, src: string }) => {
    const { name, src } = props
    return (
        <li className="imglistli">
            <img src={src} alt="" />
        </li>
    )
}


const Imgs: React.FC<IImgs> = (_props) => {
    const { imgsrc, backward = false } = _props
    return (
        <div className="imglistconstrain">
            <div className={cx("imglistoffset", backward ? "backward" : "forward")}>
                <ul className={cx("imglistcontainer", "imglistfakep")}>
                    {imgsrc.map((ims, index) => {
                        return <Img key={index} {...ims} />
                    })}
                </ul>
                <ul className={cx("imglistcontainer", "imglistfakem")}>
                    {imgsrc.map((ims, index) => {
                        return <Img key={index} {...ims} />
                    })}
                </ul>
                <ul className={cx("imglistcontainer", "imglistfakel")}>
                    {imgsrc.map((ims, index) => {
                        return <Img key={index} {...ims} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Imgs