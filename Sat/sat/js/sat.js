//# sourceMappingURL=sat.js.map
// It changes map height depending on device height.
function cambiarAltoMapa() {
    var observer = new MutationObserver(function (mutations) {
        if (document.contains($("flx-map")[0])) {
            $("flx-map").attr("height", ($(window).height() > 460 ? $(window).height() - 260 : 200));
            $("flx-map > div.mapContainer").height(($(window).height() > 460 ? $(window).height() - 260 : 200));
            observer.disconnect();
        }
    });
    observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });
}
// Several areas. It stops bubble propagation when clicking on element.
function stopClickPropagation(element) {
    var count = 0;
    var a = setInterval(function () {
        if ($(element).length && count < 20) {
            clearInterval(a);
            $(element).click(function (event) {
                event.stopPropagation();
            });
        }
        else {
            count++;
        }
        ;
    }, 500);
    // Used elements 'a.PC_link'   '.PC_DownloadLinks'
}
// Part view. Map with default address is displayed.
function showGeolocalizar(IdParte, addr) {
    var histObj = new flexygo.nav.FlexygoHistory();
    histObj.targetid = 'modal1024x800';
    var modal = flexygo.targets.createContainer(histObj, true, null, true);
    modal.empty();
    modal.closest('.ui-dialog').find('.ui-dialog-title').html(flexygo.localization.translate('satGeolocalization.mapTitle'));
    modal.addClass('nopadding');
    if (addr && addr != '') {
        modal.append('<input class="srch" style="width: 76%;height: 30px;" type="text" placeholder="Search adress"/><button class="srch btn btn-default" type="button" > <i class="flx-icon icon-search " /></button><button class="acpt btn btn-default sat-button" type="button" ><i class="flx-icon icon-save-2 icon-margin-right"/>' + flexygo.localization.translate('satGeolocalization.mapSaveButton') + '</button><flx-map cluster="false" mode="coord" zoom="3" width="auto" height="96%"><marker address="' + addr + '"></marker></flx-map>');
        modal.find(".srch").val(addr);
        if (modal.find('input.srch').val() != '') {
            modal.find('flx-map').remove();
            modal.append('<flx-map cluster="false" mode="coord" zoom="3" width="auto" height="96%"><marker address="' + addr + '"></marker></flx-map>');
        }
    }
    else {
        modal.append('<input class="srch" style="width: 76%;height: 30px;" type="text" placeholder="Search adress"/><button class="srch btn btn-default" type="button" > <i class="flx-icon icon-search" /></button><button class="acpt btn btn-default sat-button" type="button" > <i class="flx-icon icon-save-2 icon-margin-right"/>' + flexygo.localization.translate('satGeolocalization.mapSaveButton') + '</button><flx-map cluster="false" mode="coord" zoom="3" width="auto" height="96%"></flx-map>');
    }
    modal.find('input.srch').on('keydown', function (ev) {
        if (ev.keyCode === 13) {
            var address = modal.find('input.srch').val();
            if (address != '') {
                modal.find('flx-map').remove();
                modal.append('<flx-map cluster="false" mode="coord" zoom="3" width="auto" height="96%"><marker address="' + address + '"></marker></flx-map>');
            }
        }
    });
    modal.find('button.srch').on('click', function (ev) {
        var address = modal.find('input.srch').val();
        if (address != '') {
            modal.find('flx-map').remove();
            modal.append('<flx-map cluster="false" mode="coord" zoom="3" width="auto" height="96%"><marker address="' + address + '"></marker></flx-map>');
        }
    });
    modal.find('button.acpt').on('click', function (ev) {
        var lat = '';
        var lng = '';
        var mapbt = modal.find('flx-map')[0];
        if (mapbt.lat != null) {
            lat = mapbt.lat;
        }
        else if ($(mapbt).attr("lat") != null) {
            lat = $(mapbt).attr("lat");
        }
        if (mapbt.lng != null) {
            lng = mapbt.lng;
        }
        else if ($(mapbt).attr("lng") != null) {
            lng = $(mapbt).attr("lng");
        }
        if (lat && lng) {
            var parteConf = new flexygo.obj.Entity('sat_Parte_Conf', 'Conf_Partes.IdParte=' + IdParte);
            parteConf.read();
            parteConf.data['Pers_DestinoLat'].Value = lat;
            parteConf.data['Pers_DestinoLong'].Value = lng;
            if (parteConf.update()) {
                flexygo.msg.success(flexygo.localization.translate('satGeolocalization.UpdateCoordenates'));
            }
            else {
                flexygo.msg.error(flexygo.localization.translate('satGeolocalization.UpdateCoordenates'));
            }
        }
        modal.closest('.ui-dialog').find('.ui-dialog-titlebar-close').click();
        console.log(lat + '---' + lng);
    });
}
//# sourceMappingURL=sat.js.map