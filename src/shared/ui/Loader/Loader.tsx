import {classNames} from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface ILoaderProps {
    className?: string
}

export const Loader = ({className}: ILoaderProps) => {
    return (
        <div className={classNames('lds-ring', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
