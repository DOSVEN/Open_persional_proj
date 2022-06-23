
// ==================== Manual Comp (Tạo Comp thủ công) ====================

var resourceUI = "palette{\
    orientation:'row',\
    menu:Panel{\
    createProject: Button{text: 'Tạo Project'}\
    createComp: Button{text:'Tạo Composition'}\
	createText: Button{text:'Họ tên - Mã Sinh Viên'}\
	saveProject: Button{text:'Lưu Project'}\
	renderProject: Button{text:'Xuất file vid'}\
	helpButton: Button{text:'Hướng dẫn'}\
 }\
\}";

var window  = new Window(resourceUI);
window.center();
window.show();

window.menu.saveProject.onClick= function(){
	app.project.saveWithDialog () ;
};

window.menu.renderProject.onClick = function() {
	renderProject(myComp);
}

window.menu.createComp.onClick = function(){  
 
	var w = new Window ('dialog');
	var myName = w.add ("edittext",undefined,"Name Comp"); 
	var myWidth = w.add ("edittext",undefined,"Width"); 
	var myHeight = w.add ("edittext",undefined,"Height"); 
	var myPixel = w.add ("edittext",undefined,"Pixel Aspect"); 
	var myFrame = w.add ("edittext",undefined,"Frame Rate"); 
	var createComp = w.add("button", undefined, "Ok");
	w.show();
	Compnew = app.project.items.addComp(myName.text,parseInt(myWidth.text),parseInt(myHeight.text),parseFloat(myPixel.text),20,parseFloat(myFrame.text));
	createComp.onClick= function () {
		w.hide();
	};
};

window.menu.createText.onClick = function(){
	var t = new Window ('dialog');
	var myText = t.add ('edittext',undefined,'ho ten - ma sinh vien');

	var ok1Btn = t.add('button', undefined, 'Ok');    
	t.show();
	ok1Btn.onClick= function () {
	t.hide();

};
	var myTextLayer=myComp.layers.addText();
	var myPropertyText=myTextLayer.property('Source Text');
	var myTextValue=myPropertyText.value;
	
	myTextValue.text=myText.text;
	myTextValue.fontSize=70;
	myTextValue.fillColor=[1,1,1];
	myTextValue.applyFill=true;
	myTextValue.strokeColor=[1,1,1];
	myTextValue.applyStroke=true;

	myPropertyText.setValue(myTextValue);
	myPropertyText.setValue(myTextValue);

	var myOpacity=myTextLayer.property('Opacity');
	myOpacity.setValueAtTime(0,0);
	myOpacity.setValueAtTime(2,100);
	myOpacity.setValueAtTime(10,0);
	var myPosition=myTextLayer.property('Position');
	myPosition.setValueAtTime(2,[myComp.width/4,myComp.height/4]);
};

window.menu.helpButton.onClick = function() {
	var helpText = " \
    Hướng dẫn: \n \
    - Để tạo mới Project: Click `Tạo Project` \
    - Để tạo Comp mới, người dùng nhấn chọn 'Tạo Composition', lưu ý ở đây đã tạo sẵn một Comp 'Main Comp' tự chạy sẵn  \
	- Sau khi chọn 'Tạo Comp' người dùng sẽ được hiển thị một Pop up khác với các thông tin để người dùng nhập vào cho thuộc tính Comp mới  \
    - Người dùng nhập tên \
    - Click `Lưu Project` để lưu Project \
    - Click `Render` để render (xuất các định dạng vid) \n \
  "
  alert(helpText, "Hướng dẫn sử dụng");
}


// ==================== Autorun main comp ====================

// app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
// app.newPoject();


// create comp
var myComp = app.project.items.addComp("Main Comp",1280,720,1,66,30);

// ==== Solid Background ====
var solidLayer2 = myComp.layers.addSolid([222/255,222/255,222/255], "Background2", 1280, 720, 1, myComp.duration);
var solidLayer1 = myComp.layers.addSolid([255/255,255/255,255/255], "Background1", 1280, 720, 1, myComp.duration);

// Import file media
var folder = app.project.items.addFolder("Assets");

// var item;
// var files = Folder("/Users/adobe/Desktop/ltkx_PAT/Media").getFiles();

// for(var i = 0; i < files.length; i++){
// 	item = app.project.importFile(new ImportOptions(files[i]));
// 	$.writeln(item.name);
// }

// var textLayer = myComp.layers.addText("Give people wonderful tool");
// textLayer.transform.position.setValue([640,360]);
// textLayer.transform.anchorPoint.setValue([455,-18]);



// text mo dau
itemTextintro = app.project.importFile(new ImportOptions(new File("Media/hello.png")));
itemTextintro.parentFolder = folder;
var appleTextintro = myComp.layers.add(itemTextintro,2);
appleTextintro.transform.position.setValue([640,263]);
appleTextintro.transform.scale.setValue([60, 60]);

// iMac
itemImac = app.project.importFile(new ImportOptions(new File("Media/iMac.png")));
itemImac.parentFolder = folder;
var appleImac = myComp.layers.add(itemImac,63);
// appleImac.transform.scale.setValue([150, 150]);

// imac Retro
itemImac1 = app.project.importFile(new ImportOptions(new File("Media/imacGreen.png")));
itemImac2 = app.project.importFile(new ImportOptions(new File("Media/imacRose.png")));
itemImac3 = app.project.importFile(new ImportOptions(new File("Media/imacBlue.png")));
itemImac4 = app.project.importFile(new ImportOptions(new File("Media/imacPur.png")));
itemImac5 = app.project.importFile(new ImportOptions(new File("Media/imacYellow.png")));
itemImac1.parentFolder = folder;
itemImac2.parentFolder = folder;
itemImac3.parentFolder = folder;
itemImac4.parentFolder = folder;
itemImac5.parentFolder = folder;
var ImacRetroGreen = myComp.layers.add(itemImac1,63);
var ImacRetroRose = myComp.layers.add(itemImac2,63);
var ImacRetroBlue = myComp.layers.add(itemImac3,63);
var ImacRetroPur = myComp.layers.add(itemImac4,63);
var ImacRetroYellow = myComp.layers.add(itemImac5,63);
ImacRetroYellow.transform.anchorPoint.setValue([95,101]);
ImacRetroPur.transform.anchorPoint.setValue([93.5,96]);
ImacRetroBlue.transform.anchorPoint.setValue([97,101.5]);
ImacRetroRose.transform.anchorPoint.setValue([107.5,104.5]);
ImacRetroGreen.transform.anchorPoint.setValue([106.5,105.5]);


// Ring - clickwheel
itemRingsmall = app.project.importFile(new ImportOptions(new File("Media/ring_small.png")));
itemRingmed = app.project.importFile(new ImportOptions(new File("Media/ring_med.png")));
itemRinglarge = app.project.importFile(new ImportOptions(new File("Media/ring_large.png")));
itemRingsmall.parentFolder = folder;
itemRingmed.parentFolder = folder;
itemRinglarge.parentFolder = folder;
var appleRing1 = myComp.layers.add(itemRingsmall,63);
	appleRing1.transform.scale.setValue([135, 135]);
var appleRing2 = myComp.layers.add(itemRingmed,63);
	appleRing2.transform.scale.setValue([135, 135])
var appleRing3 = myComp.layers.add(itemRinglarge,63);
	appleRing3.transform.scale.setValue([135, 135])

// Clickwheel Menu
itemClickwheelMenu = app.project.importFile(new ImportOptions(new File("Media/clickwheel_menu.png")));
itemClickwheelMenu.parentFolder = folder;
var appleClickwheel = myComp.layers.add(itemClickwheelMenu,63);
	appleClickwheel.transform.scale.setValue([70,70]);
itemClickwheelSelect = app.project.importFile(new ImportOptions(new File("Media/clickwheel_click.png")));
itemClickwheelSelect.parentFolder = folder;
var appleClickwheelSelect = myComp.layers.add(itemClickwheelSelect,63);
	appleClickwheelSelect.transform.scale.setValue([70,70]);
	

// // Vien nut home
// var homeButtonLayer=myComp.layers.addShape();
//     homeButtonLayer.name="homebutton";          
        
// var circleContent = homeButtonLayer.property("ADBE Root Vectors Group");
// var circleGroup=circleContent.addProperty("ADBE Vector Group");
// var circle = circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
//         circle.property("ADBE Vector Ellipse Size").setValue([170,170]);
// var circleFill=circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
//        circleFill.property("ADBE Vector Fill Color").setValue([55/255,55/255,55/255]);



// Vien home button
itemHomebuttonFill = app.project.importFile(new ImportOptions(new File("Media/homebuttonfill.png")));
itemHomebuttonFill.parentFolder = folder;
var homeButtonFill = myComp.layers.add(itemHomebuttonFill,63);
homeButtonFill.transform.scale.setValue([110, 110]);

// home button icon
itemHomebutton = app.project.importFile(new ImportOptions(new File("Media/homebutton.png")));
itemHomebutton.parentFolder = folder;
var homeButton = myComp.layers.add(itemHomebutton,63);
homeButton.transform.scale.setValue([75, 75]);

// Touch ID
itemTouchid = app.project.importFile(new ImportOptions(new File("Media/touchid.png")));
itemTouchid.parentFolder = folder;
var Touchid = myComp.layers.add(itemTouchid,63);
Touchid.transform.scale.setValue([86, 86]);


// Face ID
itemFaceid = app.project.importFile(new ImportOptions(new File("Media/faceid.png")));
itemFaceid.parentFolder = folder;
var Faceid = myComp.layers.add(itemFaceid,63);
Faceid.transform.scale.setValue([95, 95]);

// Face ID load checl
itemFaceidCheck = app.project.importFile(new ImportOptions(new File("Media/faceidloadcheck.png")));
itemFaceidCheck.parentFolder = folder;
var FaceidCheck = myComp.layers.add(itemFaceidCheck,63);
FaceidCheck.transform.scale.setValue([70, 70]);

// Face ID Confirm
itemFaceidConfirm = app.project.importFile(new ImportOptions(new File("Media/faceidconfirm.png")));
itemFaceidConfirm.parentFolder = folder;
var FaceidConfirm = myComp.layers.add(itemFaceidConfirm,63);
FaceidConfirm.transform.scale.setValue([75, 75]);

// imac list
itemImaclist1 = app.project.importFile(new ImportOptions(new File("Media/imac_list1.png")));
itemImaclist1.parentFolder = folder;
var Imaclist1 = myComp.layers.add(itemImaclist1,63);
Imaclist1.transform.scale.setValue([74, 74]);
itemImaclist2 = app.project.importFile(new ImportOptions(new File("Media/imac_list2.png")));
itemImaclist2.parentFolder = folder;
var Imaclist2 = myComp.layers.add(itemImaclist2,63);
Imaclist2.transform.scale.setValue([90, 90]);

// radar
itemRadar = app.project.importFile(new ImportOptions(new File("Media/Radar.png")));
itemRadar.parentFolder = folder;
var appleRadar = myComp.layers.add(itemRadar,63);
appleRadar.transform.scale.setValue([60, 60]);

// siri
itemHeysiri = app.project.importFile(new ImportOptions(new File("Media/homepodsiri.png")));
itemHeysiri.parentFolder = folder;
var appleHeysiri = myComp.layers.add(itemHeysiri,63);
appleHeysiri.transform.scale.setValue([95, 95]);

// macpro
itemMacpro = app.project.importFile(new ImportOptions(new File("Media/macpro.png")));
itemMacpro.parentFolder = folder;
var appleMacpro = myComp.layers.add(itemMacpro,63);
appleMacpro.transform.scale.setValue([70, 70]);

// macpro Caseside
itemMacproSide = app.project.importFile(new ImportOptions(new File("Media/macpro_siideview.png")));
itemMacproSide.parentFolder = folder;
var appleMacproSide = myComp.layers.add(itemMacproSide,63);
appleMacproSide.transform.scale.setValue([130, 130]);

// airpod
itemAirpod = app.project.importFile(new ImportOptions(new File("Media/airpod.png")));
itemAirpod.parentFolder = folder;
var appleAirpod = myComp.layers.add(itemAirpod,60);
appleAirpod.transform.scale.setValue([80, 80]);

//laptop leftside
itemlaptopLeft = app.project.importFile(new ImportOptions(new File("Media/laptopleft.png")));
itemlaptopLeft.parentFolder = folder;
var applelaptopLeft = myComp.layers.add(itemlaptopLeft,60);
applelaptopLeft.transform.scale.setValue([80, 80]);
applelaptopLeft.transform.anchorPoint.setValue([635, 25]);

//laptop rightside
itemlaptopRight = app.project.importFile(new ImportOptions(new File("Media/laptopright.png")));
itemlaptopRight.parentFolder = folder;
var applelaptopRight = myComp.layers.add(itemlaptopRight,60);
applelaptopRight.transform.scale.setValue([80, 80]);
applelaptopRight.transform.anchorPoint.setValue([3, 25]);


// ipad with case
itemipadCase = app.project.importFile(new ImportOptions(new File("Media/ipadwithcase.png")));
itemipadCase.parentFolder = folder;
var appleipadCase = myComp.layers.add(itemipadCase,60);
appleipadCase.transform.scale.setValue([80, 80]);

// ipad with case closed
itemipadCaseClose = app.project.importFile(new ImportOptions(new File("Media/ipadwithcaseclose.png")));
itemipadCaseClose.parentFolder = folder;
var appleipadCaseClose = myComp.layers.add(itemipadCaseClose,60);



// app pencil 1
itemAPencil = app.project.importFile(new ImportOptions(new File("Media/applepencil.png")));
itemAPencil.parentFolder = folder;
var applePencil1 = myComp.layers.add(itemAPencil,60);
applePencil1.transform.scale.setValue([120, 120]);
applePencil1.transform.anchorPoint.setValue([169,284]);
applePencil1.transform.rotation.setValue(209);
applePencil1.transform.position.setValue([800,240]);
// rotate dupimage 
var applePencil2 = applePencil1.duplicate();
applePencil2.transform.rotation.setValue(180);
applePencil2.transform.anchorPoint.setValue([169,284]);
applePencil2.transform.rotation.setValue(29);
applePencil2.transform.position.setValue([480,480]);

// linedraw
itemLinedraw = app.project.importFile(new ImportOptions(new File("Media/linedraw.png")));
itemLinedraw.parentFolder = folder;
var appleLinedraw = myComp.layers.add(itemLinedraw,63);
appleLinedraw.transform.scale.setValue([95, 95]);



// Case airpod open
itemCaseairpod_op = app.project.importFile(new ImportOptions(new File("Media/airpod_open.png")));
itemCaseairpod_op.parentFolder = folder;
var appleCaseairpod_op = myComp.layers.add(itemCaseairpod_op,60);
appleCaseairpod_op.transform.scale.setValue([95, 95]);

// Case airpod closed
itemCaseairpod_close = app.project.importFile(new ImportOptions(new File("Media/airpod_close.png")));
itemCaseairpod_close.parentFolder = folder;
var appleCaseairpod_cl = myComp.layers.add(itemCaseairpod_close,60);
appleCaseairpod_cl.transform.scale.setValue([95, 95]);
appleCaseairpod_cl.transform.position.setValue([640,331]);

// Homepod speaker
itemHomepod = app.project.importFile(new ImportOptions(new File("Media/homepod.png")));
itemHomepod.parentFolder = folder;
var appleHomepod = myComp.layers.add(itemHomepod,63);
appleHomepod.transform.scale.setValue([235, 235]);



// Apple TV - text
itemAppleTVtext = app.project.importFile(new ImportOptions(new File("Media/appleTVtext.png")));
itemAppleTVtext.parentFolder = folder;
var appleTVtext = myComp.layers.add(itemAppleTVtext,63);
	appleTVtext.transform.scale.setValue([85, 85]);


// Apple TV
itemAppleTV = app.project.importFile(new ImportOptions(new File("Media/appletv.png")));
itemAppleTV.parentFolder = folder;
var appleTV = myComp.layers.add(itemAppleTV,63);
	appleTV.transform.scale.setValue([135, 135]);
	appleTV.transform.position.setValueAtTime(45.9,[640,360]);
	appleTV.transform.position.setValueAtTime(47.2,[785,360]);

appleTV.transform.position.setValueAtTime(45.54,[640,360]);
appleTV.transform.position.setValueAtTime(47.12,[778,373]);
appleTV.transform.position.setValueAtTime(47.44,[777,373]);

// Apple TV - add symbol
itemAppleTVaddsymbol = app.project.importFile(new ImportOptions(new File("Media/appletvaddicon.png")));
itemAppleTVaddsymbol.parentFolder = folder;
var appleTVaddsymbol = myComp.layers.add(itemAppleTVaddsymbol,63);
	appleTVaddsymbol.transform.scale.setValue([148, 148]);
	appleTVaddsymbol.transform.position.setValue([775, 373]);
	
// Apple TV flash
itemAppleTVflash = app.project.importFile(new ImportOptions(new File("Media/appletvflash.png")));
itemAppleTVflash.parentFolder = folder;
var appleTVflash = myComp.layers.add(itemAppleTVflash,63);
	appleTVflash.transform.scale.setValue([154, 154]);
	appleTVflash.transform.position.setValue([638, 387]);
	

// ipad camera
itemIpadwithcam = app.project.importFile(new ImportOptions(new File("Media/ipadcam.png")));
itemIpadwithcam.parentFolder = folder;
var appleIpadwithcam = myComp.layers.add(itemIpadwithcam,63);
appleIpadwithcam.transform.anchorPoint.setValue([696,318.5]);

// iphoneX
itemIphoneX = app.project.importFile(new ImportOptions(new File("Media/iphonex.png")));
itemIphoneX.parentFolder = folder;
var appleIphoneX = myComp.layers.add(itemIphoneX,63);
appleIphoneX.transform.scale.setValue([105, 105]);
appleIphoneX.transform.anchorPoint.setValue([160.5, 161.5]);
appleIphoneX.transform.position.setValue([640, 360]);

// txt 1 outro
itemTextoutro1 = app.project.importFile(new ImportOptions(new File("Media/text1.png")));
itemTextoutro1.parentFolder = folder;
var appleTextoutro1 = myComp.layers.add(itemTextoutro1,64);
appleTextoutro1.transform.position.setValue([640, 380]);

// txt 2 outro
itemTextoutro2 = app.project.importFile(new ImportOptions(new File("Media/text2.png")));
itemTextoutro2.parentFolder = folder;
var appleTextoutro2 = myComp.layers.add(itemTextoutro2,64);
appleTextoutro2.transform.scale.setValue([90, 90]);
appleTextoutro2.transform.position.setValue([640, 380]);

// apple logo company outro
itemApplelogoComp = app.project.importFile(new ImportOptions(new File("Media/applelogocompany.png")));
itemApplelogoComp.parentFolder = folder;
var appleApplelogoComp = myComp.layers.add(itemApplelogoComp,64);
appleApplelogoComp.transform.scale.setValue([90, 90]);


// var audioLayer = myComp.selectedLayers[0];
itemSoundtrack = app.project.importFile(new ImportOptions(new File("Media/Soundtrack.mp3")));
itemSoundtrack.parentFolder = folder;
var soundTrack = myComp.layers.add(itemSoundtrack);



// ====== Apple Remote 1 ======
var remoteLayer=myComp.layers.addShape();
       remoteLayer.name="remote1";       
        
var buttonContent = remoteLayer.property("ADBE Root Vectors Group");
var circleGroup=buttonContent.addProperty("ADBE Vector Group");
// Duoi phai
var circle = circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
	circleGroup.transform.scale.setValue([147,147]);
	circle.property("ADBE Vector Ellipse Position").setValueAtTime(41.12,[65,300]);
	circle.property("ADBE Vector Ellipse Position").setValueAtTime(41.75,[65,148]);
	circle.property("ADBE Vector Ellipse Position").setValueAtTime(43,[65,150]);
	circle.property("ADBE Vector Ellipse Position").setValueAtTime(44.1,[-63,-140]);
	circle.property("ADBE Vector Ellipse Size").setValueAtTime(43.6,[100,100]);
	circle.property("ADBE Vector Ellipse Size").setValueAtTime(44.2,[90,90]);

var circleFill=circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    circleFill.property("ADBE Vector Fill Color").setValue([44/255,44/255,44/255]);
	   
// Duoi trai
var circle2 = circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
	circle2.property("ADBE Vector Ellipse Position").setValueAtTime(41.12,[-63,300]);
	circle2.property("ADBE Vector Ellipse Position").setValueAtTime(41.6,[-63,148]);
	circle2.property("ADBE Vector Ellipse Position").setValueAtTime(43,[-63,150]);
	circle2.property("ADBE Vector Ellipse Position").setValueAtTime(44.1,[65,-140]);
	circle2.property("ADBE Vector Ellipse Size").setValueAtTime(43.6,[100,100]);
	circle2.property("ADBE Vector Ellipse Size").setValueAtTime(44.2,[90,90]);
var circle2Fill=circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    circle2Fill.property("ADBE Vector Fill Color").setValue([44/255,44/255,44/255]);

	

var circle3 = circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
	circle3.property("ADBE Vector Ellipse Size").setValueAtTime(41.12,[230,230]);
	circle3.property("ADBE Vector Ellipse Size").setValueAtTime(43,[230,230]);
	circle3.property("ADBE Vector Ellipse Size").setValueAtTime(44,[100,100]);
	circle3.property("ADBE Vector Ellipse Size").setValueAtTime(44.2,[90,90]);
	circle3.property("ADBE Vector Ellipse Position").setValueAtTime(41.12,[0,-65]);
	circle3.property("ADBE Vector Ellipse Position").setValueAtTime(42.9,[0,-65]);
	circle3.property("ADBE Vector Ellipse Position").setValueAtTime(43.1,[65,150]);
	circle3.property("ADBE Vector Ellipse Position").setValueAtTime(43.4,[-64,150]);
	circle3.property("ADBE Vector Ellipse Position").setValueAtTime(43.7,[-60,0]);
	
var circle3Fill=circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    circle3Fill.property("ADBE Vector Fill Color").setValue([44/255,44/255,44/255]);


var circle4 = circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
	circle4.property("ADBE Vector Ellipse Size").setValueAtTime(41.12,[230,230]);
	circle4.property("ADBE Vector Ellipse Size").setValueAtTime(43,[230,230]);
	circle4.property("ADBE Vector Ellipse Size").setValueAtTime(44,[100,100]);
	circle4.property("ADBE Vector Ellipse Size").setValueAtTime(44.2,[90,90]);
	circle4.property("ADBE Vector Ellipse Position").setValueAtTime(41.12,[0,-65]);
	circle4.property("ADBE Vector Ellipse Position").setValueAtTime(43.1,[0,-65]);
	circle4.property("ADBE Vector Ellipse Position").setValueAtTime(43.4,[65,150]);
	circle4.property("ADBE Vector Ellipse Position").setValueAtTime(43.7,[-64,150]);
	circle4.property("ADBE Vector Ellipse Position").setValueAtTime(44,[-60,120]);
var circle4Fill=circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    circle4Fill.property("ADBE Vector Fill Color").setValue([44/255,44/255,44/255]);

var circle5 = circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
	circle5.property("ADBE Vector Ellipse Size").setValueAtTime(41.12,[230,230]);
	circle5.property("ADBE Vector Ellipse Size").setValueAtTime(43,[230,230]);
	circle5.property("ADBE Vector Ellipse Size").setValueAtTime(44,[100,100]);
	circle5.property("ADBE Vector Ellipse Size").setValueAtTime(44.2,[90,200]);
	// circle5.property("ADBE Vector RoundCorner Radius").setValueAtTime(44.2,40);
	circle5.property("ADBE Vector Ellipse Position").setValueAtTime(41.12,[0,-65]);
	circle5.property("ADBE Vector Ellipse Position").setValueAtTime(43.1,[0,-65]);
	circle5.property("ADBE Vector Ellipse Position").setValueAtTime(43.4,[65,60]);
	
var circle5Fill=circleGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    circle5Fill.property("ADBE Vector Fill Color").setValue([44/255,44/255,44/255]);


var bodyRemoteContent = remoteLayer.property("ADBE Root Vectors Group");
var groupHvuong = bodyRemoteContent.addProperty("ADBE Vector Group");
var shapeRect = groupHvuong.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
	groupHvuong.transform.scale.setValue([389, 729]);
	
var fillHvuong = groupHvuong.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill"); 
	// fillHvuong.property("ADBE Vector Fill Color").setValue([176/255,178/255,180/255]);
	fillHvuong.property("ADBE Vector Fill Color").setValueAtTime(41.5,[193/255,195/255,197/255]);
	fillHvuong.property("ADBE Vector Fill Color").setValueAtTime(42.4,[193/255,195/255,197/255]);
	fillHvuong.property("ADBE Vector Fill Color").setValueAtTime(43,[78/255,78/255,78/255]);




// create animation
(function moveAnimation(){
	// dupsquareLayer.transform.position.setValueAtTime(5,[myComp.width-1100,myComp.height-650]);
	// dupsquareLayer.transform.position.setValueAtTime(10,[myComp.width-1100,myComp.height-150]);
	// dupsquareLayer.transform.position.setValueAtTime(15,[myComp.width-1100,myComp.height-700]);
	appleTextintro.transform.position.setValueAtTime(0,[1573,190]);
	appleTextintro.transform.position.setValueAtTime(1,[640,270]);

	ImacRetroYellow.transform.position.setValueAtTime(13.06,[603,273]);
	ImacRetroYellow.transform.position.setValueAtTime(13.54,[594,231]);
	ImacRetroPur.transform.position.setValueAtTime(13.06,[534,373]);
	ImacRetroPur.transform.position.setValueAtTime(13.54,[500,368]);
	ImacRetroBlue.transform.position.setValueAtTime(13.06,[590,498]);
	ImacRetroBlue.transform.position.setValueAtTime(13.54,[578,519]);
	ImacRetroRose.transform.position.setValueAtTime(13.06,[743,470]);
	ImacRetroRose.transform.position.setValueAtTime(13.54,[774,481]);
	ImacRetroGreen.transform.position.setValueAtTime(13.06,[749,320]);
	ImacRetroGreen.transform.position.setValueAtTime(13.54,[774,281]);


	appleAirpod.transform.position.setValueAtTime(35,[myComp.width-645,myComp.height-550]);
	appleAirpod.transform.position.setValueAtTime(36,[myComp.width-645,myComp.height-390]);
	
	applePencil1.transform.position.setValueAtTime(31.8,[800,240]);
	applePencil1.transform.position.setValueAtTime(32.9,[640,360]);
	applePencil1.transform.position.setValueAtTime(33.4,[0,360]);
	applePencil2.transform.position.setValueAtTime(31.8,[480,480]);
	applePencil2.transform.position.setValueAtTime(32.9,[640,360]);
	applePencil2.transform.position.setValueAtTime(33.4,[1280,360]);

	
	applelaptopRight.transform.position.setValueAtTime(25.18,[660,370]);	
	applelaptopRight.transform.position.setValueAtTime(26.46,[650,360]);
	applelaptopRight.transform.position.setValueAtTime(28,[385,360]);
	applelaptopLeft.transform.position.setValueAtTime(25.18,[660,350]);	
	applelaptopLeft.transform.position.setValueAtTime(26.46,[630,360]);
	applelaptopLeft.transform.position.setValueAtTime(28,[890,360]);


})();


(function rotateAnimation(){
	appleRadar.transform.rotation.setValueAtTime(50,0);
	appleRadar.transform.rotation.setValueAtTime(52,400);

	appleRing1.transform.rotation.setValueAtTime(2.1,0);
	appleRing1.transform.rotation.setValueAtTime(2.8,400);
	appleRing1.transform.rotation.setValueAtTime(4.5,2000);
	appleRing2.transform.rotation.setValueAtTime(2.1,0);
	appleRing2.transform.rotation.setValueAtTime(2.8,-400);
	appleRing2.transform.rotation.setValueAtTime(4.5,-2000);
	appleRing3.transform.rotation.setValueAtTime(2.1,0);
	appleRing3.transform.rotation.setValueAtTime(2.8,400);
	appleRing3.transform.rotation.setValueAtTime(4.5,2000);

	homeButton.transform.rotation.setValueAtTime(6.7,0);
	homeButton.transform.rotation.setValueAtTime(7.6,51);

	Touchid.transform.rotation.setValueAtTime(7,-80);
	Touchid.transform.rotation.setValueAtTime(9,0);

	FaceidCheck.transform.rotation.setValueAtTime(10.37,0);
	FaceidCheck.transform.rotation.setValueAtTime(11.14,900);
	
	//13 - 16
	ImacRetroYellow.transform.rotation.setValueAtTime(13.06,-150);
	ImacRetroYellow.transform.rotation.setValueAtTime(15.36,0);
	ImacRetroPur.transform.rotation.setValueAtTime(13.06,-150);
	ImacRetroPur.transform.rotation.setValueAtTime(15.36,0);
	ImacRetroBlue.transform.rotation.setValueAtTime(13.06,-150);
	ImacRetroBlue.transform.rotation.setValueAtTime(15.36,0);
	ImacRetroRose.transform.rotation.setValueAtTime(13.06,-150);
	ImacRetroRose.transform.rotation.setValueAtTime(15.36,0);
	ImacRetroGreen.transform.rotation.setValueAtTime(13.06,-150);
	ImacRetroGreen.transform.rotation.setValueAtTime(15.36,0);

	// 16-18
	Imaclist1.transform.rotation.setValueAtTime(16,0);
	Imaclist1.transform.rotation.setValueAtTime(18,120);
    // 18-20
	Imaclist2.transform.rotation.setValueAtTime(18,30);
	Imaclist2.transform.rotation.setValueAtTime(20,150);
	
	//26-28
	applelaptopRight.transform.rotation.setValueAtTime(25.18,90);
	applelaptopRight.transform.rotation.setValueAtTime(26.39,0);
	applelaptopLeft.transform.rotation.setValueAtTime(25.18,90);
	applelaptopLeft.transform.rotation.setValueAtTime(26.39,0);


	// 29 -32
	appleipadCase.transform.rotation.setValueAtTime(29.36,0);
	appleipadCase.transform.rotation.setValueAtTime(29.48,19);
	appleipadCase.transform.rotation.setValueAtTime(30.03,22);
	appleipadCase.transform.rotation.setValueAtTime(30.13,22);
	appleipadCase.transform.rotation.setValueAtTime(32.01,-320);

	appleHomepod.transform.rotation.setValueAtTime(37.8,0);
	appleHomepod.transform.rotation.setValueAtTime(41.2,270);

	appleHeysiri.transform.rotation.setValueAtTime(37.1,0);
	appleHeysiri.transform.rotation.setValueAtTime(41.2,950);

	appleIpadwithcam.transform.rotation.setValueAtTime(52.06,104);
	appleIpadwithcam.transform.rotation.setValueAtTime(53.33,302);
	

	appleIphoneX.transform.rotation.setValueAtTime(53.42,-156);
	appleIphoneX.transform.rotation.setValueAtTime(55,-22);
	appleIphoneX.transform.rotation.setValueAtTime(55.19,0);

	applePencil1.transform.rotation.setValueAtTime(32,209);
	applePencil1.transform.rotation.setValueAtTime(32.8,180);
	applePencil1.transform.rotation.setValueAtTime(33.5,180);
	applePencil2.transform.rotation.setValueAtTime(32,29);
	applePencil2.transform.rotation.setValueAtTime(32.8,0);
	applePencil2.transform.rotation.setValueAtTime(33.5,0)
	
})();


(function scaleAnimation(){
	appleTextintro.transform.scale.setValueAtTime(0,[2000,2000]);
	appleTextintro.transform.scale.setValueAtTime(1,[40,40]);
	appleTextintro.transform.scale.setValueAtTime(1.2,[38,38]);
	
	FaceidConfirm.transform.scale.setValueAtTime(12.55,[75,75]);
	FaceidConfirm.transform.scale.setValueAtTime(13.08,[526,526]);

	ImacRetroYellow.transform.scale.setValueAtTime(13.06,[60,60]);
	ImacRetroYellow.transform.scale.setValueAtTime(15.36,[90,90]);
	ImacRetroPur.transform.scale.setValueAtTime(13.06,[60,60]);
	ImacRetroPur.transform.scale.setValueAtTime(15.36,[90,90]);
	ImacRetroBlue.transform.scale.setValueAtTime(13.06,[60,60]);
	ImacRetroBlue.transform.scale.setValueAtTime(15.36,[90,90]);
	ImacRetroRose.transform.scale.setValueAtTime(13.06,[60,60]);
	ImacRetroRose.transform.scale.setValueAtTime(15.36,[90,90]);
	ImacRetroGreen.transform.scale.setValueAtTime(13.06,[60,60]);
	ImacRetroGreen.transform.scale.setValueAtTime(15.36,[90,90]);
	

	appleImac.transform.scale.setValueAtTime(0,[150,150]);
	appleImac.transform.scale.setValueAtTime(1,[70,70]);
	appleImac.transform.scale.setValueAtTime(1.2,[68,68]);

	appleMacpro.transform.scale.setValueAtTime(20,[750,750]);
	appleMacpro.transform.scale.setValueAtTime(20.8,[60,60]);
	appleMacpro.transform.scale.setValueAtTime(21.3,[50,50]);
	
	appleMacproSide.transform.scale.setValueAtTime(22.31,[121,121]);
	appleMacproSide.transform.scale.setValueAtTime(24.40,[130,130]);
	appleMacproSide.transform.scale.setValueAtTime(25.13,[1,491]);

	appleRadar.transform.scale.setValueAtTime(51.7,[60,60]);
	appleRadar.transform.scale.setValueAtTime(52,[10,10]);

	appleClickwheel.transform.scale.setValueAtTime(5.1,[65,65]);
	appleClickwheel.transform.scale.setValueAtTime(6,[70,70]);
	appleClickwheel.transform.scale.setValueAtTime(6.4,[26,26]);
	
	homeButtonFill.transform.scale.setValueAtTime(6.7,[110,110]);
	homeButtonFill.transform.scale.setValueAtTime(6.9,[100,100]);
	homeButtonFill.transform.scale.setValueAtTime(7.6,[100,100]);
	homeButton.transform.scale.setValueAtTime(6.7,[75,75]);
	homeButton.transform.scale.setValueAtTime(7.3,[47,47]);
	homeButton.transform.scale.setValueAtTime(7.6,[42,42]);

	Touchid.transform.scale.setValueAtTime(9.7,[86,86]);
	Touchid.transform.scale.setValueAtTime(10,[1300,1300]);

	Faceid.transform.scale.setValueAtTime(9.48,[95,95]);
	Faceid.transform.scale.setValueAtTime(10.22,[110,110]);
	
	// 27 -28
	applelaptopLeft.transform.scale.setValueAtTime(26.46,[80,80]);
	applelaptopLeft.transform.scale.setValueAtTime(28,[37,37]);
	applelaptopRight.transform.scale.setValueAtTime(26.46,[80,80]);
	applelaptopRight.transform.scale.setValueAtTime(28,[37,37]);

	// 28 - 29
	appleipadCaseClose.transform.scale.setValueAtTime(28.1,[20,20]);
	appleipadCaseClose.transform.scale.setValueAtTime(28.5,[75,75]);
	appleipadCaseClose.transform.scale.setValueAtTime(28.9,[80,80]);
	
	

	appleHeysiri.transform.scale.setValueAtTime(37.1,[135,135]);
	appleHeysiri.transform.scale.setValueAtTime(37.7,[95,95]);

	appleHomepod.transform.scale.setValueAtTime(37.8,[235,235]);
	appleHomepod.transform.scale.setValueAtTime(39.5,[57,57]);
	appleHomepod.transform.scale.setValueAtTime(40,[55,55]);

	appleTV.transform.scale.setValueAtTime(44.42,[150,700]);
	appleTV.transform.scale.setValueAtTime(45.3,[152,152]);
	appleTV.transform.scale.setValueAtTime(45.54,[145,145]);
	appleTV.transform.scale.setValueAtTime(47.3,[4,145]);
	appleTV.transform.scale.setValueAtTime(47.48,[4,29]);

	appleIpadwithcam.transform.scale.setValueAtTime(52.06,[50,50]);
	appleIpadwithcam.transform.scale.setValueAtTime(53.33,[95,95]);

	appleIphoneX.transform.scale.setValueAtTime(53.54,[180,180]);
	appleIphoneX.transform.scale.setValueAtTime(55.50,[105,105]);

	appleLinedraw.transform.scale.setValueAtTime(32.9,[1,30]);
	appleLinedraw.transform.scale.setValueAtTime(33.45,[110,95]);
	appleLinedraw.transform.scale.setValueAtTime(33.8,[110,7000]);
	

})();


(function opacityAnimation(){
	appleTextintro.transform.opacity.setValueAtTime(0,100);
	appleTextintro.transform.opacity.setValueAtTime(1,100);
	appleTextintro.transform.opacity.setValueAtTime(2,100);
	appleTextintro.transform.opacity.setValueAtTime(2.1,0);

	appleImac.transform.opacity.setValueAtTime(0.5,0);
	appleImac.transform.opacity.setValueAtTime(0.9,80);
	appleImac.transform.opacity.setValueAtTime(2,80);
	appleImac.transform.opacity.setValueAtTime(2.1,0);

	appleRing1.transform.opacity.setValueAtTime(2,0);
	appleRing1.transform.opacity.setValueAtTime(2.4,100);
	appleRing1.transform.opacity.setValueAtTime(4,100);
	appleRing1.transform.opacity.setValueAtTime(4.2,100);
	appleRing1.transform.opacity.setValueAtTime(4.5,0);
	appleRing2.transform.opacity.setValueAtTime(2,0);
	appleRing2.transform.opacity.setValueAtTime(2.4,100);
	appleRing2.transform.opacity.setValueAtTime(4,100);
	appleRing2.transform.opacity.setValueAtTime(4.2,100);
	appleRing2.transform.opacity.setValueAtTime(4.5,0);
	appleRing3.transform.opacity.setValueAtTime(2,0);
	appleRing3.transform.opacity.setValueAtTime(2.4,100);
	appleRing3.transform.opacity.setValueAtTime(4,100);
	appleRing3.transform.opacity.setValueAtTime(4.2,100);
	appleRing3.transform.opacity.setValueAtTime(4.5,0);

	appleClickwheel.transform.opacity.setValueAtTime(4.9,0);
	appleClickwheel.transform.opacity.setValueAtTime(5,100);
	appleClickwheel.transform.opacity.setValueAtTime(6.8,100);
	appleClickwheel.transform.opacity.setValueAtTime(6.9,0);
	appleClickwheelSelect.transform.opacity.setValueAtTime(4.9,0);
	appleClickwheelSelect.transform.opacity.setValueAtTime(5,100);
	appleClickwheelSelect.transform.opacity.setValueAtTime(6.77,100);
	appleClickwheelSelect.transform.opacity.setValueAtTime(6.85,0);


	homeButton.transform.opacity.setValueAtTime(6.7,0);
	homeButton.transform.opacity.setValueAtTime(6.9,100);
	homeButton.transform.opacity.setValueAtTime(7.6,100);
	homeButton.transform.opacity.setValueAtTime(7.61,0);
	homeButtonFill.transform.opacity.setValueAtTime(6.7,0);
	homeButtonFill.transform.opacity.setValueAtTime(6.9,100);
	homeButtonFill.transform.opacity.setValueAtTime(7.6,100);
	homeButtonFill.transform.opacity.setValueAtTime(7.61,0);
	
	Touchid.transform.opacity.setValueAtTime(7.5,0);
	Touchid.transform.opacity.setValueAtTime(7.6,100);
	Touchid.transform.opacity.setValueAtTime(9,100);
	Touchid.transform.opacity.setValueAtTime(9.91,0);

	Faceid.transform.opacity.setValueAtTime(9.48,0);
	Faceid.transform.opacity.setValueAtTime(9.54,100);
	Faceid.transform.opacity.setValueAtTime(10.22,100);
	Faceid.transform.opacity.setValueAtTime(10.33,0);

	FaceidCheck.transform.opacity.setValueAtTime(10.37,0);
	FaceidCheck.transform.opacity.setValueAtTime(10.47,100);
	FaceidCheck.transform.opacity.setValueAtTime(11.07,100);
	FaceidCheck.transform.opacity.setValueAtTime(11.14,0);

	FaceidConfirm.transform.opacity.setValueAtTime(11.19,0);
	FaceidConfirm.transform.opacity.setValueAtTime(11.35,100);
	FaceidConfirm.transform.opacity.setValueAtTime(12.55,100);
	FaceidConfirm.transform.opacity.setValueAtTime(13.08,0);

	ImacRetroGreen.transform.opacity.setValueAtTime(13,0);
	ImacRetroGreen.transform.opacity.setValueAtTime(13.06,100);
	ImacRetroGreen.transform.opacity.setValueAtTime(15.36,100);
	ImacRetroGreen.transform.opacity.setValueAtTime(16.20,0);
	ImacRetroRose.transform.opacity.setValueAtTime(13,0);
	ImacRetroRose.transform.opacity.setValueAtTime(13.06,100);
	ImacRetroRose.transform.opacity.setValueAtTime(15.36,100);
	ImacRetroRose.transform.opacity.setValueAtTime(16.20,0);
	ImacRetroBlue.transform.opacity.setValueAtTime(13,0);
	ImacRetroBlue.transform.opacity.setValueAtTime(13.06,100);
	ImacRetroBlue.transform.opacity.setValueAtTime(15.36,100);
	ImacRetroBlue.transform.opacity.setValueAtTime(16.20,0);
	ImacRetroPur.transform.opacity.setValueAtTime(13,0);
	ImacRetroPur.transform.opacity.setValueAtTime(13.06,100);
	ImacRetroPur.transform.opacity.setValueAtTime(15.36,100);
	ImacRetroPur.transform.opacity.setValueAtTime(16.20,0);
	ImacRetroYellow.transform.opacity.setValueAtTime(13,0);
	ImacRetroYellow.transform.opacity.setValueAtTime(13.06,100);
	ImacRetroYellow.transform.opacity.setValueAtTime(15.36,100);
	ImacRetroYellow.transform.opacity.setValueAtTime(16.20,0);




	appleRadar.transform.opacity.setValueAtTime(50,0);
	appleRadar.transform.opacity.setValueAtTime(50.1,100);
	appleRadar.transform.opacity.setValueAtTime(52,100)
	appleRadar.transform.opacity.setValueAtTime(52.1,0)
	solidLayer1.transform.opacity.setValueAtTime(10,100);
	solidLayer1.transform.opacity.setValueAtTime(15,0);
	
	solidLayer2.transform.opacity.setValueAtTime(63,100);
	
// 16-18
	Imaclist1.transform.opacity.setValueAtTime(16.09,0);
	Imaclist1.transform.opacity.setValueAtTime(16.1,100);
	Imaclist1.transform.opacity.setValueAtTime(17.7,100);
	Imaclist1.transform.opacity.setValueAtTime(18.2,0);

// 18-20
	Imaclist2.transform.opacity.setValueAtTime(18.1,0);
	Imaclist2.transform.opacity.setValueAtTime(18.2,100);
	Imaclist2.transform.opacity.setValueAtTime(19.6,100);
	Imaclist2.transform.opacity.setValueAtTime(19.9,0);

	appleMacpro.transform.opacity.setValueAtTime(19.9,0);
	appleMacpro.transform.opacity.setValueAtTime(20,100);
	appleMacpro.transform.opacity.setValueAtTime(22,100);
	appleMacpro.transform.opacity.setValueAtTime(22.1,0);

	appleMacproSide.transform.opacity.setValueAtTime(22.06,0);
	appleMacproSide.transform.opacity.setValueAtTime(22.57,100);
	appleMacproSide.transform.opacity.setValueAtTime(24.59,100);
	appleMacproSide.transform.opacity.setValueAtTime(25.33,0);

// 27.9-29.5
	applelaptopLeft.transform.opacity.setValueAtTime(25.18,0);
	applelaptopLeft.transform.opacity.setValueAtTime(26.01,100);
	applelaptopLeft.transform.opacity.setValueAtTime(28,100);
	applelaptopLeft.transform.opacity.setValueAtTime(28.16,0);
	applelaptopRight.transform.opacity.setValueAtTime(25.18,0);
	applelaptopRight.transform.opacity.setValueAtTime(26.01,100);
	applelaptopRight.transform.opacity.setValueAtTime(28,100);
	applelaptopRight.transform.opacity.setValueAtTime(28.16,0);

	
	//28-29
	appleipadCaseClose.transform.opacity.setValueAtTime(28,0);
	appleipadCaseClose.transform.opacity.setValueAtTime(28.1,100);
	appleipadCaseClose.transform.opacity.setValueAtTime(29,100);
	appleipadCaseClose.transform.opacity.setValueAtTime(29.1,0);
	
	// 28 -31
	appleipadCase.transform.opacity.setValueAtTime(29.3,0);
	appleipadCase.transform.opacity.setValueAtTime(29.42,100);
	appleipadCase.transform.opacity.setValueAtTime(31.58,100);
	appleipadCase.transform.opacity.setValueAtTime(32.04,0);
	
	
	applePencil1.transform.opacity.setValueAtTime(32,0);
	applePencil1.transform.opacity.setValueAtTime(32.1,100);
	applePencil1.transform.opacity.setValueAtTime(33.4,100);
	applePencil1.transform.opacity.setValueAtTime(33.5,0);
	
	applePencil2.transform.opacity.setValueAtTime(32,0);
	applePencil2.transform.opacity.setValueAtTime(32.1,100);
	applePencil2.transform.opacity.setValueAtTime(33.4,100);
	applePencil2.transform.opacity.setValueAtTime(33.5,0);
	
	appleLinedraw.transform.opacity.setValueAtTime(32.55,0);
	appleLinedraw.transform.opacity.setValueAtTime(32.6,100);
	appleLinedraw.transform.opacity.setValueAtTime(33.8,100);
	appleLinedraw.transform.opacity.setValueAtTime(33.9,0);
	
	
	// 34-36
	appleCaseairpod_op.transform.opacity.setValueAtTime(34.9,0);
	appleCaseairpod_op.transform.opacity.setValueAtTime(35,100);
	appleCaseairpod_op.transform.opacity.setValueAtTime(36,100);
	appleCaseairpod_op.transform.opacity.setValueAtTime(36.001,0);
	
	appleCaseairpod_cl.transform.opacity.setValueAtTime(36.00,0);
	appleCaseairpod_cl.transform.opacity.setValueAtTime(36.0001,100);
	appleCaseairpod_cl.transform.opacity.setValueAtTime(36.8,100);
	appleCaseairpod_cl.transform.opacity.setValueAtTime(36.800001,0);


	appleAirpod.transform.opacity.setValueAtTime(34.9,0);
	appleAirpod.transform.opacity.setValueAtTime(35,100);
	appleAirpod.transform.opacity.setValueAtTime(36,100);
	appleAirpod.transform.opacity.setValueAtTime(36.001,0);
	
	appleHeysiri.transform.opacity.setValueAtTime(37,0);
	appleHeysiri.transform.opacity.setValueAtTime(37.2,100);	
	appleHeysiri.transform.opacity.setValueAtTime(41.15,100);
	appleHeysiri.transform.opacity.setValueAtTime(41.2,0);

	// 37.8-41.2
	appleHomepod.transform.opacity.setValueAtTime(37.8,0);
	appleHomepod.transform.opacity.setValueAtTime(37.85,100);	
	appleHomepod.transform.opacity.setValueAtTime(41.1,100);
	appleHomepod.transform.opacity.setValueAtTime(41.4,0);
	
	//41-45
	remoteLayer.transform.opacity.setValueAtTime(41,0);
	remoteLayer.transform.opacity.setValueAtTime(41.2,100);
	remoteLayer.transform.opacity.setValueAtTime(44.8,100);
	remoteLayer.transform.opacity.setValueAtTime(45.3,0);

	appleTV.transform.opacity.setValueAtTime(44.6,0);
	appleTV.transform.opacity.setValueAtTime(45,100)
	appleTV.transform.opacity.setValueAtTime(49,100);
	appleTV.transform.opacity.setValueAtTime(49.1,0);

	appleTVtext.transform.opacity.setValueAtTime(45.9,0);
	appleTVtext.transform.opacity.setValueAtTime(46,100);
	appleTVtext.transform.opacity.setValueAtTime(49.53,100);
	appleTVtext.transform.opacity.setValueAtTime(49.59,0);

	appleTVflash.transform.opacity.setValueAtTime(48.41,0);
	appleTVflash.transform.opacity.setValueAtTime(48.44,100);
	appleTVflash.transform.opacity.setValueAtTime(48.45,0);
	appleTVflash.transform.opacity.setValueAtTime(48.48,100);
	appleTVflash.transform.opacity.setValueAtTime(48.49,0);
	appleTVflash.transform.opacity.setValueAtTime(48.53,100);
	appleTVflash.transform.opacity.setValueAtTime(48.54,0);
	appleTVflash.transform.opacity.setValueAtTime(48.56,100);
	appleTVflash.transform.opacity.setValueAtTime(48.58,0);
	appleTVflash.transform.opacity.setValueAtTime(49,100);
	appleTVflash.transform.opacity.setValueAtTime(49.59,100);
	appleTVflash.transform.opacity.setValueAtTime(50,0);

	appleTVaddsymbol.transform.opacity.setValueAtTime(47.47,0);
	appleTVaddsymbol.transform.opacity.setValueAtTime(48.14,100);
	appleTVaddsymbol.transform.opacity.setValueAtTime(49.53,100);
	appleTVaddsymbol.transform.opacity.setValueAtTime(49.59,0);

	appleIpadwithcam.transform.opacity.setValueAtTime(52.06,0);
	appleIpadwithcam.transform.opacity.setValueAtTime(52.29,100);
	appleIpadwithcam.transform.opacity.setValueAtTime(53.10,100);
	appleIpadwithcam.transform.opacity.setValueAtTime(53.33,0);

	appleIphoneX.transform.opacity.setValueAtTime(53.42,0);
	appleIphoneX.transform.opacity.setValueAtTime(53.52,100);
	appleIphoneX.transform.opacity.setValueAtTime(56.51,100);
	appleIphoneX.transform.opacity.setValueAtTime(56.54,0);

	appleTextoutro1.transform.opacity.setValueAtTime(56.29,0);
	appleTextoutro1.transform.opacity.setValueAtTime(57.16,100);
	appleTextoutro1.transform.opacity.setValueAtTime(59,100);
	appleTextoutro1.transform.opacity.setValueAtTime(59.09,0);
	appleTextoutro2.transform.opacity.setValueAtTime(59.05,0);
	appleTextoutro2.transform.opacity.setValueAtTime(59.12,100);
	appleTextoutro2.transform.opacity.setValueAtTime(61.22,100);
	appleTextoutro2.transform.opacity.setValueAtTime(62.04,0);
	
	appleApplelogoComp.transform.opacity.setValueAtTime(62.19,0);
	appleApplelogoComp.transform.opacity.setValueAtTime(62.28,100);

})();



(function lockAllLayers() {
    function lockAllLayers (comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.locked = true;
        }
    }

    app.beginUndoGroup("Lock Layer(s)");
    var project = app.project;
    var items = project.items;
    var numItems = items.length;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            lockAllLayers(item);
        }
    }
    app.endUndoGroup();
})();