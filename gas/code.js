function test() {
	let data = SpreadsheetApp.openById("1cEiNhDEyiU2MtyPhnXNe25qNGhju5SEGD_5Ch34ZtoA").getSheetByName("Data").getRange(1, 1, 5, 6).getValues()
	console.log(data);
}
