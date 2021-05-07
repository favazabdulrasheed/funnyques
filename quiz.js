$(document).ready(function() {
	var data=[];
  currentModal = 0;
  
  $('.modalDialog').each(function(){
    data.push({
      id: $(this).attr('id'),
      order: $(this).data('modalorder')
    });
  })
    
	$('#openModalBtn').click(function(){
  	currentModal = 0;
    window.location.href = "#" + data[currentModal].id;
    $('#'+data[currentModal].id).find('.getAssignment2').prop('disabled', true);
  })
  
  //prev
  $('.getAssignment2').click(function(){
  	if (currentModal>0) {
    	currentModal--;
      window.location.href = "#" + data[currentModal].id;
    } else {
      
    	window.location.href = '#'
    }
  })
  
  //next
  $('.getAssignment').click(function(){
  	if (currentModal<data.length - 1) {
    	currentModal++;
      if (currentModal===data.length - 1) $('#'+data[currentModal].id).find('.getAssignment').prop('disabled', true);
      window.location.href = "#" + data[currentModal].id;
    } else {
    	window.location.href = '#'
    }
  })
  $('.special').click(function(){
    if (currentModal<data.length - 1) {
      currentModal++;
    if (currentModal===data.length - 1) $('#'+data[currentModal].id).find('.getAssignment').prop('disabled', true);
    window.location.href = "#" + data[currentModal].id;
  } else {
      window.location.href = '#'
  }
})


  
})
function see(){
    alert("പിന്നെ നീ എന്ത് കാണാൻ വന്നതാ?😡")
}