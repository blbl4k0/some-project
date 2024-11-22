import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import tseslintParser from '@typescript-eslint/parser'
import i18next from 'eslint-plugin-i18next'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    },
    {
        languageOptions: {
            parser: tseslintParser,
            parserOptions: {
                ecmaVersion: 'latest', 
                sourceType: 'module', 
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
            },
            globals: globals.browser,
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        plugins: {
            react: pluginReact,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs['flat/recommended'],
    {
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 1,
            'no-undef': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/ban-ts-comment': 1,
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-explicit-any": "off",
            '@typescript-eslint/no-non-null-assertion': 'off',
            //   "react/no-unescaped-entities": "off",
            //   "react/prefer-const": "off",
            //   "react/display-name": "off",
            //   "import/named": "off",
            //   "import/no-unresolved": "off",
            //   "no-console": "warn",
            //   "testing-library/await-async-events": "error",
            //   "testing-library/no-await-sync-queries": "error",
            //   "testing-library/no-node-access": ["error", {"allowContainerFirstChild": true}],
            //   "testing-library/no-debugging-utils": "error",
            //   "testing-library/no-manual-cleanup": "error",
            //   "testing-library/no-unnecessary-act": "error",
            //   "testing-library/no-wait-for-multiple-assertions": "error",
            //   "testing-library/no-wait-for-side-effects": "error",
            //   "testing-library/prefer-find-by": "error",
            //   "testing-library/prefer-presence-queries": "error",
            //   "testing-library/prefer-screen-queries": "error",
            //   "testing-library/render-result-naming-convention": "error"
        },
    },
    {ignores: ['build/*']},
]
