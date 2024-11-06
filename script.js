
$(document).ready(function(){
	const url = "http://localhost:3000/production";
	// post request	
	$('#Post').on('submit',(e)=>{
		e.preventDefault();
		var name = $('#name').val();
		var pic = $('#pic').val();
		$.ajax({
			url: url,
			dataType: "JSON",
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({  name, pic }),
			success:function(response){
					alert("Success...");
				$('#name').val('');
				$('#pic').val('');
			},
			error:function(e){
				console.log("Error: " + e.message);
			}
		})
})
// Get Data
function getData(product){
				var row = $(".row");
				row.empty();
				product.map(Element=>{
						const productHtml = `
						<div class="col-md-3">
										  <div class="card p-3">
													  <img height="250px" class=" img-fluid" src="${Element.image}" alt="">
															<h2>Name: ${Element.name}</h2>
												</div>
						</div>
						`;
						row.append(productHtml);
				});
}
function DisplayProduct(){
						fetch(url)
						.then(response=>{
											if(!response.ok) {
													throw new Error(`HTTP error! status: ${response.status}`);
												}
										return response.json();
						})
						.then(products=>{
									getData(products);
						})
						.catch(error=>{ console.log(error); });
}
DisplayProduct();

});


