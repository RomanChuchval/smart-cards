import { useAppSelector } from 'app/hooks/useAppSelector'
import { errorSelector, infoMessageSelector } from 'app/app.selectors'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { packsErrorSelector, packsInfoMessageSelector } from 'features/packs/packs.selectors'
import { clearNotifyStateAction } from 'common/utils/clearNotifyStateAction'
import { cardQuestionsSelector } from 'features/cards/cards.selectors'
import { CustomToast } from 'common/components/custom-toast/CustomToast'
import { errorLearnSelector } from 'features/learn/learn.selector'

export const useAppNotify = () => {
    const appError = useAppSelector(errorSelector)
    const appInfoMessage = useAppSelector(infoMessageSelector)
    const packsError = useAppSelector(packsErrorSelector)
    const packsInfoMessage = useAppSelector(packsInfoMessageSelector)
    const learnError = useAppSelector(errorLearnSelector)
    const cardsInfoMessage = useAppSelector(cardQuestionsSelector)
    const dispatch = useAppDispatch()

    const error = appError || packsError || learnError
    const infoMessage = appInfoMessage || packsInfoMessage

    if (infoMessage) {
        toast.success(infoMessage, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            style: {
                backgroundColor: '#366EFF',
            },
        })
        dispatch(clearNotifyStateAction())
    }

    if (error) {
        toast.error(error, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        })
        dispatch(clearNotifyStateAction())
    }

    if (cardsInfoMessage.question !== '' || cardsInfoMessage.questionImg !== '') {
        toast.success(
            <CustomToast
                message={cardsInfoMessage.question}
                image={cardsInfoMessage.questionImg}
            />,
            {
                style: {
                    backgroundColor: '#366EFF',
                },
            }
        )
        dispatch(clearNotifyStateAction())
    }
}
