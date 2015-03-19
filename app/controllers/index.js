
var alertaSinConfirmar = Ti.UI.createAlertDialog({
		title : 'ESTATUS RESERVACIÒN',
		message:' '+'Reservaciòn sin confirmar',
		ok:'OK',
		});
alertaSinConfirmar.show();

var platform=Ti.Platform.osname;
// $.crol.add(alertaSinConfirmar.show());
if(platform=='iphone'){
var ActivityIndicatorStyle;
ActivityIndicatorStyle = Titanium.UI.ActivityIndicatorStyle;
var actInd = Titanium.UI.createActivityIndicator({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
	});
	$.crol.add(actInd);
	actInd.show();
}else if(platform=='android'){
	var progressIndicator = Ti.UI.Android.createProgressIndicator({
			  message: 'Espere un momento mientras se crea su reservación',
			  location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
			  type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT,
			  cancelable: false,
			});
			
			// $.bloqueo.visible = true;
			// alertaCreacion.show();
			progressIndicator.show();
}

$.index.open();
