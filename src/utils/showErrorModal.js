import { Modal } from 'antd';

function showErrorModal() {
	Modal.error({
		title: 'An error has ocurred when fetching resources.',
		content: 'Please reload the page or try again later.',
	});
}

export default showErrorModal;
