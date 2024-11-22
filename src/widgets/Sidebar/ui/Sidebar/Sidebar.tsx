import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {useState} from 'react'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher'

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({className}: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    let a: any = 1
    a = 'a'
    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}></LangSwitcher>
            </div>
        </div>
    )
}
