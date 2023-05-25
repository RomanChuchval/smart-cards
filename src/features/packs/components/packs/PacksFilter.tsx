import React from 'react'
import { usePacksParamsFilter } from 'features/packs/hooks/usePacksParamsFilter'
import Grid from '@mui/material/Grid'
import { SearchBar } from 'common/components/search-bar/SearchBar'
import { ShowPacksCards } from 'common/components/show-packs-cards/ShowPacksCards'
import { CardsCountSlider } from 'common/components/number-of-cards-slider/CardsCountSlider'
import { ClearFilter } from 'common/components/clear-filter/ClearFilter'
import { CardsPagination } from 'common/components/pagination/CardsPagination'
import { useApp } from 'app/hooks/useApp'

type PacksFilterPropsType = {
    children: React.ReactNode
}
export const PacksFilter: React.FC<PacksFilterPropsType> = ({ children }) => {
    const {
        packs,
        search,
        valueSlider,
        setValueSlider,
        onMy,
        setOnMy,
        onChangePagination,
        onChangeSlider,
        onChangeText,
        clearFiltersHandler,
        onClickShowPacksCards
    } = usePacksParamsFilter()
    const { isLoadingApp } = useApp()

    return (
        <>
            <Grid item md={4}>
                <SearchBar fullWidth={true}
                           onChange={onChangeText}
                           value={search}
                           disabled={isLoadingApp} />
            </Grid>
            <Grid item md={3} display={'flex'} justifyContent={'center'}>
                <ShowPacksCards onClick={onClickShowPacksCards}
                                onMy={onMy}
                                setOnMy={setOnMy}
                                disabled={isLoadingApp} />
            </Grid>
            <Grid item md={4} display={'flex'} justifyContent={'center'}>
                <CardsCountSlider onChange={onChangeSlider}
                                  minMax={valueSlider}
                                  setMinMax={setValueSlider}
                                  disabled={isLoadingApp} />
            </Grid>
            <Grid item md={1} display={'flex'} justifyContent={'flex-end'}>
                <ClearFilter clearFiltersHandler={clearFiltersHandler}
                             disabled={isLoadingApp} />
            </Grid>
            {children}
            <Grid item md={12}>
                <CardsPagination page={packs.page}
                                 pageCount={packs.pageCount}
                                 totalCount={packs.cardPacksTotalCount}
                                 onChange={onChangePagination}
                                 disabled={isLoadingApp} />
            </Grid>
        </>
    )
}