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

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button data-testid="sidebar-toggle-btn" onClick={onToggle}>
                toggle
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}></LangSwitcher>
            </div>
        </div>
    )
}
