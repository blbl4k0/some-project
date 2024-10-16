
import { classNames} from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();
  const toggle = () => {
  i18n.changeLanguage(i18n.language === 'ru'? 'en' : 'ru')
}
  return (


      <Button
        className={classNames(cls.LangSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t('Язык')}
      </Button>
)
}