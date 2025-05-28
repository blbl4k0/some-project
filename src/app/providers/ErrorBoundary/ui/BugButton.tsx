import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'

export const BugButton = () => {
    const {t} = useTranslation()

    const [shouldThrow, setShouldThrow] = useState(false)

    const onThrow = () => {
        setShouldThrow(true)
    }

    if (shouldThrow) {
        throw new Error('Ошибка рендера!')
    }

    return (
        <div>
            <Button onClick={onThrow}>{t('throw error')}</Button>
        </div>
    )
}
