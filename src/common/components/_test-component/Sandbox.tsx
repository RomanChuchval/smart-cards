import React from 'react';
import { PageTitle } from 'common/components/page-title/PageTitle';
import { SearchBar } from 'common/components/search-bar/SearchBar';
import { Stack } from '@mui/material';
import { ShowPacksCards } from 'common/components/show-packs-cards/ShowPacksCards';

export const Sandbox = () => {
    return (
        <Stack spacing={5} sx={{ mt: '50px' }}>
            <PageTitle title={'Packs list'} />
            <SearchBar fullWidth={true} />
            <SearchBar />
            <ShowPacksCards />
        </Stack>
    );
};
