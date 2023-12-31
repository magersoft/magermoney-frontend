import { popups } from '@/app/popups';
import { usePopupsStore } from '@/app/popups/store';

export function usePopups() {
	const { popup, isShowed, options, setPopup, setShowed, removePopup } =
		usePopupsStore();

	const popupComponent = computed(() => unref(popup) && popups[unref(popup)!]);

	const handleShow = () => {
		setShowed(!!unref(popup));
	};

	const handleClose = () => {
		setShowed(false);
	};

	const handleClosed = () => {
		removePopup();
	};

	return {
		popup,
		popupComponent,
		options,
		isShowed,
		setPopup,
		handleShow,
		handleClose,
		handleClosed
	};
}
