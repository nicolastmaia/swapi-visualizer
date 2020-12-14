import { Modal } from 'antd';

// função que retorna um modal de erro da biblioteca antd
function showErrorModal(numberOfErrors = '') {
	// final do título do modal.
	let messageEnd;

	if (numberOfErrors == 1) {
		messageEnd = numberOfErrors + ' resource.';
	} else {
		messageEnd = numberOfErrors + ' resources.';
	}

	Modal.error({
		title: `An error has ocurred when fetching ${messageEnd} `,
		content: 'Please reload the page or try again later.',
	});
}

export default showErrorModal;
