import Image from 'next/image'
import Button from '../components/Button'
import style from '../styles/Card.module.css'

export default function Card (props) {
    return (

        <div
            className={`${style.card}`}
            onClick={props.click}>
            <span >
                <Image src={props.img} alt="logo" width={456} height={156} />
            </span>
            <p>{props.children}</p>
            <div className={style.buttonsBox}>
                <Button style={'buttonPrimary'}>Adquirir</Button>
                <Button style={'buttonSecondary'}>Probar</Button>
            </div>
        </div>

    )
}