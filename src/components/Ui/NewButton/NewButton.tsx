import { FC } from 'react'
import './NewButton.scss'
interface INewButton {

}

const NewButton: FC<INewButton> = () => {
	return (
			 <button className='exception__button_amo_crm'>
					Сохранить
			 </button>
		)
}
export default NewButton