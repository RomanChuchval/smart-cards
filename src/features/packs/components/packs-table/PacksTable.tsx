import { useAppFilter } from 'features/packs/hooks/useAppFilter'
import Grid from '@mui/material/Grid'
import { CustomTable } from 'common/components/table/CustomTable'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import React from 'react'
import { TableActions } from 'common/components/table-actions-buttons/TableActions'

export const PacksTable = () => {
    const { packs, userId, sort, setSort, sortHandler } = useAppFilter()
    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '50px',
        maxWidth: '50px'
    }
    return (
        <Grid item md={12}>
            <CustomTable setSort={setSort} sort={sort} sortHandler={sortHandler}
                         tableCellForHeader={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']}>
                {packs.cardPacks?.map(textBody => {
                    return (
                        <TableRow key={textBody._id}>
                            <TableCell sx={{ ...tableBodySX, paddingLeft: '40px', maxWidth: '200px' }}>
                                {textBody.name}
                            </TableCell>
                            <TableCell sx={{ ...tableBodySX, maxWidth: '200px' }}>{textBody.cardsCount}</TableCell>
                            <TableCell sx={tableBodySX}>{textBody.updated}</TableCell>
                            <TableCell sx={tableBodySX}>{textBody.user_name}</TableCell>
                            <TableCell sx={tableBodySX}>
                                <TableActions myCards={userId === textBody.user_id} />
                            </TableCell>
                        </TableRow>
                    )
                })}
            </CustomTable>
        </Grid>
    )
}