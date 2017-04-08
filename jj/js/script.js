google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(main);

function main(){
	// Select entire spreadsheet (empty query)
	var queryString = encodeURIComponent('');
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1hmOyx4M7NvclKCr6Hu1r6cgjHG2iyjPX1RCherEyr9I/gviz/tq?tq=' + queryString);
	query.send(handleDocsQueryResponse);
}

function handleDocsQueryResponse(response){
	if (response.isError()){
		alert('Error in query: ' + response.getMessage() + ' - ' + response.getDetailedMessage());
		return;
	}
	var data = response.getDataTable();
	
	// Set block 1
	$('#bread-name-1').html(data.getFormattedValue(0, 0));
	$('#bread-desc-1').html(data.getFormattedValue(0, 1));
	$('#bread-price-1').html(data.getFormattedValue(0, 2));
	
	// Set block 2
	$('#bread-name-2').html(data.getFormattedValue(1, 0));
	$('#bread-desc-2').html(data.getFormattedValue(1, 1));
	$('#bread-price-2').html(data.getFormattedValue(1, 2));
	
	// Set block 3
	$('#bread-name-3').html(data.getFormattedValue(2, 0));
	$('#bread-desc-3').html(data.getFormattedValue(2, 1));
	$('#bread-price-3').html(data.getFormattedValue(2, 2));
	
	// Set block 4
	$('#bread-name-4').html(data.getFormattedValue(3, 0));
	$('#bread-desc-4').html(data.getFormattedValue(3, 1));
	$('#bread-price-4').html(data.getFormattedValue(3, 2));
	
	// Set block 5
	$('#bread-name-5').html(data.getFormattedValue(4, 0));
	$('#bread-desc-5').html(data.getFormattedValue(4, 1));
	$('#bread-price-5').html(data.getFormattedValue(4, 2));
	
	// Set block 6
	$('#bread-name-6').html(data.getFormattedValue(5, 0));
	$('#bread-desc-6').html(data.getFormattedValue(5, 1));
	$('#bread-price-6').html(data.getFormattedValue(5, 2));
}



