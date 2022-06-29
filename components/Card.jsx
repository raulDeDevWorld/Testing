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
            {props.children}
            <div className={style.buttonsBoxCard}>
                <Button style={'buttonPrimary'} click={props.acquire}>{props.textButtonOne}</Button>
                <Button style={'buttonSecondary'} click={props.prove}>{props.textButtonTwo}</Button>
            </div>
        </div>

    )
}