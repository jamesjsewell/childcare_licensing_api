import Backbone from "backbone";
import { API_URL } from "../../util/util.js"

export const Item = Backbone.Model.extend({
	urlRoot: `${API_URL}/data_conclusions/findings`,
	idAttribute: "_id",
	defaults: function() {
		return {
			name: null,
			description: null
		};
	}
});

export const ItemCollection = Backbone.Collection.extend({
	comparator: function (mod) {
		return new Date(mod.get("createdAt")).getTime() * -1;
	},
	fetch: function (options) {
		
		if (options.data) {

			options.type = 'POST';
			options.url = `${API_URL}/data_conclusions/findings/filter`

		}
		else{
			options.url = `${API_URL}/data_conclusions/findings`
		}
	
		Backbone.Collection.prototype.fetch.call(this, options);
	},
	parse: function (response) {
		console.log(response)
		return response

	},
	model: Item
});