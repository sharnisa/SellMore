
var pro, invo, cust;
var rowID;
var n = 1;
var Caddr = new Array();
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var geocoder;
$.getJSON("json/product.json", function (json) {
	pro = json;
	console.log("load Products");
});
$.getJSON("json/invoice.json", function (json) {
	invo = json;
	console.log("load Products");
});
$.getJSON("json/customer.json", function (json) {
	cust = json;
	console.log("load Products");
});
var p = 1;
var b = 1;
$(document).one('pagebeforecreate', function () {
	$.mobile.pageContainer.find("[data-role=page]").each(function () {
		if ($(this).attr("id") != "popup") {
			var panel = '<div data-role="panel" id="mypanel' + p + '"><h2>Main Menu</h2><ul data-role="listview" data-inset="true"><li><a href="#home">Home</a></li><li><a href="#Productspage">Products</a></li><li><a href="#invPage">Invoices</a></li><li><a href="#customers">Customer</a></li></ul>'

				$(this).append(panel);
			p++;
		}
	});
	$.mobile.pageContainer.find("[data-role=header]").each(function () {
		if ($(this).attr("id") != "pophead") {
			var panelBtn = '<a href="#mypanel' + b + '"data-icon="bars" data-role="button"data-iconshadow="false">Main Menu</a>'
				$(this).append(panelBtn);
			b++;
		}
	});

});

$(document).ready(function () {
	var canvas = $("#myCanvas")[0];
  var ctx = canvas.getContext("2d");
  var img = new Image();        //create the image object
  img.src = "_images/apple-wallpaper.PNG";         //load the image
  
  img.onload = function() {
    ctx.drawImage(img, 0, 0, 300, 400);    //draw the image
  };

	var cAddr,
	clat,
	clng;
	if (navigator.geolocation) {
		geocoder = new google.maps.Geocoder();
		var info = new google.maps.InfoWindow({
				content : "Where am I?",
				maxWidth : 150
			});
	} else {
		alert("Geolocation is not supported by this browser.");
	}

	$.getJSON("json/product.json")
	.done(function (pro) {
		console.log("product  success");

		for (var i = 0; i < pro.products.length; i++) {
			console.log(pro.products[i].model);
			if (pro.products[i].model == "MACBOOK") {
				
				$("#comps").append("<li><a href='#popup' data-rel='dialog' data-transition='pop' id='" + pro.products[i].prodId + "'><img src='_" + pro.products[i].image + "'>" + pro.products[i].name + "</a></li>");
			}
		}
		$("#comps").listview().listview("refresh");

		for (var i = 0; i < pro.products.length; i++) {
			if (pro.products[i].model == "IPAD") {
				$("#pads").append("<li><a href='#popup' data-rel='dialog' data-transition='pop' id='" + pro.products[i].prodId + "'><img src='_" + pro.products[i].image + "'>" + pro.products[i].name + "</a></li>");
			}
		}
		$("#pads").listview().listview("refresh");

		for (var i = 0; i < pro.products.length; i++) {
			
			if (pro.products[i].model == "IPHONE") {
				$("#phones").append("<li><a href='#popup' data-rel='dialog' data-transition='pop' id='" + pro.products[i].prodId + "'><img src='_" + pro.products[i].image + "'>" + pro.products[i].name + "</a></li>");
			}
		}
		$("#phones").listview().listview("refresh");
		
		

		$('#comps li a').click(function () {
			var p_id = $(this).attr("id");
			for (var i = 0; i < pro.products.length; i++) {
				if (pro.products[i].prodId == p_id) {
					$("#popHead").html(pro.products[i].name);
					$("#pop-img").attr("src", "_" + pro.products[i].image);
					$("#popName").html(pro.products[i].name);
					$("#contents").html("");
					for (var key in pro.products[i].techspecs) 
					{
						$("#contents").append('<p id="data">'+key+' : '+pro.products[i].techspecs[key]+'</p>');
					}
					
					$("#contents").append('<p><a href="'+pro.products[i].buy+'" class="ui-btn ui-icon-shop ui-btn-icon-top" id="buy">Buy</a></p>');

				}
			}

		});

		$('#pads li a').click(function () {
			var p_id = $(this).attr("id");
			for (var i = 0; i < pro.products.length; i++) {
				if (pro.products[i].prodId == p_id) {
					$("#popHead").html(pro.products[i].name);
					$("#pop-img").attr("src", "_" + pro.products[i].image);
					$("#popName").html(pro.products[i].name);
					$("#contents").html("");
					for (var key in pro.products[i].techspecs) 
					{
						$("#contents").append('<p id="data">'+key+' : '+pro.products[i].techspecs[key]+'</p>');
					}
					
					$("#contents").append('<p><a href="'+pro.products[i].buy+'" class="ui-btn ui-icon-shop ui-btn-icon-top" id="buy">Buy</a></p>');
					
				}
			}

		});

		$('#phones li a').click(function () {
			var p_id = $(this).attr("id");
			for (var i = 0; i < pro.products.length; i++) {
				if (pro.products[i].prodId == p_id) {
					$("#popHead").html(pro.products[i].name);
					$("#pop-img").attr("src", "_" + pro.products[i].image);
					$("#popName").html(pro.products[i].name);
					$("#contents").html("");
					for (var key in pro.products[i].techspecs) 
					{
						$("#contents").append('<p id="data">'+key+' : '+pro.products[i].techspecs[key]+'</p>');
					}
					
					$("#contents").append('<p><a href="'+pro.products[i].buy+'" class="ui-btn ui-icon-shop ui-btn-icon-top" id="buy">Buy</a></p>');
					
				}
			}

		});

	})
	.fail(function () {
		console.log("error loading product");

	});

	$.getJSON("json/customer.json")
	.done(function (cust) {
		console.log("Customer  success");

		for (var i = 0; i < cust.customers.length; i++) {

			$("#custli").append("<li><a href='#popup1' data-transition='slide' id='" + cust.customers[i].id + "'>" + cust.customers[i].name + "</a></li>");

		}
		$("#custli").listview().listview("refresh");

		$('#custli li a').click(function () {
			$("#contents1").html(' ');
			var p_id = $(this).attr("id");
			for (var i = 0; i < cust.customers.length; i++) {
				if (cust.customers[i].id == p_id) {
					
					$("#contents1").html('<h4>' + cust.customers[i].name + '</h4>'
						 + '<div class="ui-grid-solo">'
						 + '<div class="ui-block-a"><p>Name: ' + cust.customers[i].name + '</p><p>Email: ' + cust.customers[i].email + '</p><p>Phone: ' + cust.customers[i].phone + '</p><p>Address: ' + cust.customers[i].address + '</p></div>'
						+ '<div class="ui-grid-solo">'	
						+ '<div class="ui-block-a">'
						 + '<div id="map-canvas" style="width: 280px; height:200px; border:2px solid black;"></div>'
						 +'<p><a href="mailto:'+cust.customers[i].email+'" class="ui-btn ui-icon-mail ui-btn-icon-top" id="buy">Send Mail</a></p>'
						 + '</div>'
						 + '</div>');
						 
					
					var lat=0,lng=0;
                    //  Obtain lat, lng
					geocoder.geocode( { 'address': cust.customers[i].address}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
						lat = results[0].geometry.location.lat();
						lng = results[0].geometry.location.lng();
							
						var latlng = new google.maps.LatLng(lat,lng);
                    
						var mapOptions = {
                        center: new google.maps.LatLng(lat,lng),
                        zoom: 18,
                        //ROADMAP, HYBRID, SATELLITE, TERRAIN
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
				
				//  Display map
						var map = new google.maps.Map($("#map-canvas")[0], mapOptions);
					//  Define map marker
						myLoc = new google.maps.Marker ({
                        position: new google.maps.LatLng(lat,lng),
						map: map,
                        animation: google.maps.Animation.DROP,			
                        });
					}});
				}
			}

		});
	

		for(var i = 0; i <cust.customers.length; i++){
			var n = cust.customers[i].name;
			console.log(n);
			$("#customerInv").append('<div data-role="collapsible" data-collapsed="false"  data-iconpos="right" id="'+cust.customers[i].name+'">');	
			$("#"+cust.customers[i].name).append('<h4>'+cust.customers[i].name+'</h4>'
               +'<ul data-role="listview" class="abc" data-inset="true" id="invList'+i+'">');
			 for(var j = 0; j < cust.customers[i].inv.length; j++){ 
			  $("#invList"+i).append('<li id="'+cust.customers[i].inv[j]+0+'"><a href="#indInv">'+cust.customers[i].inv[j]+'</a></li>'
               +'</ul></div>');
		}
		$("#invList"+i).listview().listview("refresh");
		 }
		 
		
		
		$("#customerInv").collapsibleset().collapsibleset("refresh");

	})
	.fail(function () {
		console.log("error loading product");
	});
	
	$.getJSON("json/invoice.json")
	.done(function (invo) {
	
		
		 console.log(cust.customers[1].name+"FINAL TEST");
		for(var i=0; i<cust.customers.length;i++)
		{			$(document).on("click", "#invList"+i+" >li", function() {
							rowID= $(this).closest("li").attr("id");
							rowID = rowID/10;
							var custName = $(this).parent().parent().parent().attr("id");
							$("#custName").html(custName);
							for(var j=0; j<cust.customers.length;j++)
							{
								if(cust.customers[j].name == custName)
									{
										$("#Address").html("Address: "+cust.customers[j].address);
										$("#Phone").html("Phone: "+cust.customers[j].phone);
										
										$("#invoiceid").html("Invoice ID: "+rowID);
										console.log(rowID+"NN");
										for(var k=0; k<invo.invoice.length;k++)
										{
											if(invo.invoice[k].invNum == rowID)
											{
													$("#invdate").html("Invoice Date:"+invo.invoice[k].date);
													for(var b=0; b<invo.invoice[k].details.length;b++)
													{
															for(var p=0; p<pro.products.length;p++)
														{
															if(invo.invoice[k].details[b]==pro.products[p].prodId)
															{
																$("#a"+b).html("Product "+(b+1)+" : "+pro.products[p].name);
																$("#pr"+b).html("Price : "+pro.products[p].price);
																$("#tot").html("Total : "+invo.invoice[k].amount);
															}
														}
													}
											}
													
										}
									}
										
									
							}
							
					
			
			});
		
		}
		
		
	})
	.fail(function () {
		console.log("error loading product");
	});

});

//  This code goes between here

function DisplyMap(address){
	var latlang;
	geocoder.geocode({'address' :address}, function (results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							console.log("hii");
							var lat = results[0].geometry.location.lat();
							var lng = results[0].geometry.location.lng();

							latlng = new google.maps.LatLng(lat, lng);
							console.log(latlng);
						
					var mapOptions = {
						center : latlng,
						zoom : 18,
						//ROADMAP, HYBRID, SATELLITE, TERRAIN
						mapTypeId : google.maps.MapTypeId.ROADMAP
						
					};
					
					var map = new google.maps.Map($("#map-canvas")[0], mapOptions);
						
							myLoc = new google.maps.Marker({
							map : map,
							animation : google.maps.Animation.DROP,
							position : latlng,
							label : labels[labelIndex++ % labels.length]
						});

					google.maps.event.addListener(myLoc, "click", function () {
						
							var infowindow = new google.maps.InfoWindow({content: '<b>' + address + '</b>'});
							
						
						infowindow.open(map, this);
					});

	
	}
	});
}