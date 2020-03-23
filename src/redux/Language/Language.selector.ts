import {createSelector} from 'reselect'
import {State} from '../root.reducer.type'


const selectLanguage = (state:State) => state.language

export const selectLanguageLocale = createSelector(
    [selectLanguage],
    language => language.locale
)