function compile(pole,pw, debug=false){
	var arr = pole.split("/");
	var width = arr[0];
	var img = arr[1].split("");
	var itr = 0;
	var html = "";
	if(debug){
		alert("arr = "+arr+"\n"+"width = "+width+"\n"+"img = "+img);
	}
	for(var j = 0; j<img.length/width; j++){
		html += "<tr>";
		for(var i=0; i<width; i++){ 
			if(img[itr]=="0"){
				html += "<td class='wht' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="1"){
				html += "<td class='blk' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="2"){
				html += "<td class='gr' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="3"){
				html += "<td class='rd' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="4"){
				html += "<td class='orn' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="5"){
				html += "<td class='ylw' style='padding:"+pw+"px;'></td>";
			} 
			else if(img[itr]=="6"){
				html += "<td class='grn' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="7"){
				html += "<td class='lbl' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="8"){
				html += "<td class='bl' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="9"){
				html += "<td class='prp' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="a"){
				html += "<td class='pnk' style='padding:"+pw+"px;'></td>";
			}
			else if(img[itr]=="#"){
				varder = "";
				varder += img[itr+1];
				varder += img[itr+2];
				varder += img[itr+3];
				varder += img[itr+4];
				varder += img[itr+5];
				varder += img[itr+6];
				html += "<td style='padding:"+pw+"px; background:#"+varder+";'></td>";
				itr += 6;
			}
			itr++;
		}
	}
	return html;
}