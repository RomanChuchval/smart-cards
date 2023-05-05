import React from 'react'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'


type CustomTablePropsType = {
    tableCellForHeader: string[]
    children: React.ReactNode
    sortHandler: () => void
    setSort: (value: boolean) => void
    sort: boolean
}

export const CustomTable: React.FC<CustomTablePropsType> = ({ children, sort, setSort, sortHandler, tableCellForHeader}) => {
    const tableHeaderSX = {
        fontWeight: 700,
        '&:first-of-type': { paddingLeft: '40px' },
        '&:last-of-type': { paddingRight: '54px' }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow sx={{ background: '#EFEFEF' }}>
                        {tableCellForHeader.map(textHead => (
                            <TableCell sx={tableHeaderSX} key={textHead}>
                                {textHead}
                                {textHead === 'Last Updated' && (
                                    <IconButton
                                        onClick={() => {
                                            sortHandler()
                                            setSort(!sort)
                                        }}
                                    >
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

