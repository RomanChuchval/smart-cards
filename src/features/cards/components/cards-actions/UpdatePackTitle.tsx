import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { AppModal } from 'features/modals/components/AppModal'
import { PacksModalForm } from 'features/packs/components/modals/PacksModalForm'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { useAppModals } from 'common'

type UpdatePackTitlePropsType = {
    packId: string
    packName: string
}
export const UpdatePackTitle: React.FC<UpdatePackTitlePropsType> = ({ packId, packName }) => {
    const { showUpdateModal, openUpdateModal, handleClose, selectedPackId } = useAppModals({
        packId,
        packName
    })
    const { updatePack, img, setImg } = useEditorPack()
    return (
        <>
            <ListItemButton onClick={openUpdateModal}>
                <ListItemIcon>
                    <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary='Edit' />
            </ListItemButton>
            <AppModal
                title={'Create Card'}
                open={selectedPackId === packId && showUpdateModal}
                handleClose={handleClose}>
                <PacksModalForm onSubmit={updatePack} handleClose={handleClose} img={img} setImg={setImg} />
            </AppModal>
        </>
    )
}
