import { Grid, Container } from '@material-ui/core';
import styles from './repo.module.scss';
const Repo = (props) => {
    return (
        <div className={styles.repoContainer}>
        <Container>
            <Grid container alignItems="center">
                <Grid item md={1}>
                    <img alt="avatar" src={props.imgUrl?props.imgUrl:""} />
                </Grid>
                <Grid item md={10} className={styles.descriptionRepo}>
                    <h2 className={styles.title}>{props.name}</h2>
                    <p className={styles.desc}>{props.desc}</p>
                    <p className={styles.details}><span>Stars: {props.stars}</span> <span>Issues: {props.issues}</span> Submitted {props.pushedAt} by {props.login}</p>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}
export { Repo };