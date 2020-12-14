import { Modal } from 'antd';

function showErrorModal(numberOfErrors = '') {
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
