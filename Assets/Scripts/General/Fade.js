function Update () {
}
 
// FadeInOut
//
//--------------------------------------------------------------------
//                        Public parameters
//--------------------------------------------------------------------
 
public var fadeOutTexture : Texture2D;
public var fadeSpeed = 1.0;
 
var drawDepth = -1000;
 
var alphaWait : boolean = true;

var WaitTime : float = 2;
 
//--------------------------------------------------------------------
//                       Private variables
//--------------------------------------------------------------------
 
private var alpha = 1.0;
 
private var fadeDir = -1;
 
//--------------------------------------------------------------------
//                       Runtime functions
//--------------------------------------------------------------------
 
//--------------------------------------------------------------------
 
function OnGUI(){
 
   if(alphaWait == false) {
   
    alpha += fadeDir * fadeSpeed * Time.deltaTime;
    }
   
    alpha = Mathf.Clamp01(alpha);
   
    GUI.color.a = alpha;
   
    GUI.depth = drawDepth;
   
    GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeOutTexture);
}
 
//--------------------------------------------------------------------
 
function fadeIn(){
 
    yield WaitForSeconds(WaitTime);
    alphaWait = false;
 
    fadeDir = -1;
}
 
//--------------------------------------------------------------------
 
function fadeOut(){
    fadeDir = 1;
    fadeSpeed = 2;
   
 
}
 
function Start(){
 
       
    alpha=1;
    fadeSpeed = 1;
    fadeIn();
}