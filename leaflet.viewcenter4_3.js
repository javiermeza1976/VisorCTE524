L.Control.ViewCenter = L.Control.extend({
	options: {
		position: 'topleft',
		title: 'Tegucigalpa',
		forceSeparateButton: false,
		vcLatLng: [14.077643, -87.192429],
		vcZoom: 12
	},

	onAdd: function (map) {
		var className = 'Tegucigalpa', container;
		
		if(map.zoomControl && !this.options.forceSeparateButton) {
			container = map.zoomControl._container;
		} else {
			container = L.DomUtil.create('div', 'leaflet-bar');
		}
		
		this._createButton(this.options, className, container, this.setCenterView, map);

		return container;
	},
	
	_createButton: function (opts, className, container, fn, context) {
		var link = L.DomUtil.create('a', className, container);
		link.href = '#';
		link.title = opts.title;

		var zoom = opts.vcZoom || 6;
		
		L.DomEvent
			.addListener(link, 'click', L.DomEvent.stopPropagation)
			.addListener(link, 'click', L.DomEvent.preventDefault)
			.addListener(link, 'click', function(){
			    context.setView(opts.vcLatLng, zoom);
			}, context);
		return link;
	}
});



L.control.viewcenter = function (options) {
	return new L.Control.ViewCenter(options);
};

