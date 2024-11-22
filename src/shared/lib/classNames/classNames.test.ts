import {classNames} from './classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['first', 'second'])).toBe('someClass first second')
    })

    test('with mods', () => {
        expect(classNames('someClass', {hovered: true, scrollable: true}, ['first', 'second'])).toBe(
            'someClass first second hovered scrollable'
        )
    })

    test('with mods false', () => {
        expect(classNames('someClass', {hovered: true, scrollable: false}, ['first', 'second'])).toBe(
            'someClass first second hovered'
        )
    })

    test('with mods undefined', () => {
        expect(classNames('someClass', {hovered: true, scrollable: undefined}, ['first', 'second'])).toBe(
            'someClass first second hovered'
        )
    })
})
