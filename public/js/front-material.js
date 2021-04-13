//Loads all QR codes on the page
$('.QrCodeSmall').each(function(){
    let content = $(this).html().replace(/%/g,'');
    $(this).html(content);
});
//Hide all QR codes that are not the one from the selected value
const hideQrcode = function (){
   let selectedIndex = $('#IdSupplier').val();
    $('.QrCodeSmall').each(function(){
        if($(this).attr('id')==selectedIndex){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
};
hideQrcode();
//Executes the function hideQrcode()
$('#IdSupplier').on('change',function(){
    hideQrcode();
})