import ATV from 'atvjs';

import template from './template.hbs';

let Page = ATV.Page.create({
	name: 'rating',
	type: 'modal',
	template: template
});

export default Page;