import style from '/src/components/InfoItem/infoitem.module.css';

export default function InfoItem({ info, data }) {
    return (
        <div className={style.itemInfo}>
            {info} {data}
        </div>
    )
}