type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_className, value]) => Boolean(value))
            .map(([className, _value]) => className),
    ].join(' ')
}
