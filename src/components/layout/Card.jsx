import styles from './Card.module.css'

function Card(props) {
    return(
        <div className={styles.card}>
            <div className={styles.card_body}>
                <img src={props.img}/>
                <h2 className={styles.card_title}>{props.title}</h2>
                <p className={styles.card_description}>{props.description}</p>
            </div>
        </div>
        
    )

}

export default Card