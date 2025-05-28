import {BugButton} from 'app/providers/ErrorBoundary'
import React from 'react'
import {useTranslation} from 'react-i18next'

const AboutPage = () => {
    const {t} = useTranslation('about')

    return (
        <div>
            <BugButton />
            {t('О сайте')}
        </div>
    )
}
export default AboutPage
