import styles from './SuggestList.module.css';

export const SuggestList = (props) => {

    return(
        
        <div className={styles.suggestWrapper}>

            <h2>Suggested List:</h2>

            {props.suggests.map((suggest) => (
                <div key={suggest.id} className={styles.suggest}>
                    <p className={styles.suggestTitle}>Suggest Title : {suggest.title}</p>
                    <p className={styles.suggestDescription}>Suggest description : {suggest.description}</p>
                </div>
            ))}
        </div>
    )
}