import ATV from 'atvjs';
import Handlebars from 'handlebars';

function assetUrl(name) {
    return `${ATV.launchOptions.BASEURL}assets/${name}`;
}

function imageUrl(name) {
    return ((_.startsWith(name, 'http://') || _.startsWith(name, 'https://')) ? name : `${ATV.launchOptions.BASEURL}assets/img/${name}`);
}

function background_image(img = '', className = '') {
    return `<background><img class="${className}" src="${imageUrl(img)}" /></background>`;
}

const helpers = {
	toJSON(obj = {}) {
		let str;
		try {
			str = JSON.stringify(obj);
		} catch (ex) {
			str = "{}"
		}
		return str;
	},
	asset_url(asset) {
		return new Handlebars.SafeString(assetUrl(asset));
	},
	img_url(img) {
		return new Handlebars.SafeString(imageUrl(img));
	},
	background_image(img) {
		return new Handlebars.SafeString(background_image(img));
	}
};

// register all helpers
_.each(helpers, (fn, name) => Handlebars.registerHelper(name, fn));

export default helpers;