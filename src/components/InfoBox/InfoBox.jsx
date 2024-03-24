import style from '/src/components/InfoBox/InfoBox.module.css';

export default function InfoBox({ infoTitle, infoData }) {
    return (
        <div className={style.wrapperInfoBox}>
            <p>{infoTitle}</p>
            <p className={style.numberInfoBox}>{infoData}</p>
        </div>
    )
}