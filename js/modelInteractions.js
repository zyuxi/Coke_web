//adapted from example code 'benskitchen.com'
function cokeScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function spriteScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

function pepperScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
}

var spinning = false;

function spin_x(){
	spinning = !spinning;
	document.getElementById('model__RotationTimer_x').setAttribute('enabled', spinning.toString());
}

function spin_y(){
	spinning = !spinning;
	document.getElementById('model__RotationTimer_y').setAttribute('enabled', spinning.toString());
}

function spin_z(){
	spinning = !spinning;
	document.getElementById('model__RotationTimer_z').setAttribute('enabled', spinning.toString());
}

function stopRotation(){
	spinning = false;
	document.getElementById('model__RotationTimer_x').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimer_y').setAttribute('enabled', spinning.toString());
	document.getElementById('model__RotationTimer_z').setAttribute('enabled', spinning.toString());
}

function animateModel(){
	if(document.getElementById('model__RotationTimer_y').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer_y').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimer_y').setAttribute('enabled', 'false');
}

function polyframe(){

}

function wireframe(){
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight(){
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
}

function omniLight()
{
	lightOn = !lightOn;
	document.getElementById('model__omniLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function targetLight(){
	lightOn = !lightOn;
	document.getElementById('model__targetLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function cameraFront(){
	document.getElementById('model__CameraFront').setAttribute('bind', 'true');
}

function cameraBack(){
	document.getElementById('model__CameraBack').setAttribute('bind', 'true');
}

function cameraLeft(){
	document.getElementById('model__CameraLeft').setAttribute('bind', 'true');
}

function cameraRight(){
	document.getElementById('model__CameraRight').setAttribute('bind', 'true');
}

function cameraTop(){
	document.getElementById('model__CameraTop').setAttribute('bind', 'true');
}

function cameraBottom(){
	document.getElementById('model__CameraBottom').setAttribute('bind', 'true');
}