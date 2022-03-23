import React from 'react'
import { i18nObject } from 'typesafe-i18n'
import { BaseTranslation, TranslationFunctions } from '../../i18n/i18n-types'
import en from '../../i18n/en'

export const Home = () => {
  const LL = i18nObject<'en', BaseTranslation, TranslationFunctions>('en', en)
  return (
    <>
      {LL.HEADER()}
    </>
  )
}
