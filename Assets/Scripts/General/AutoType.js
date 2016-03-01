    var letterPause = 0.2;
    var sound : AudioClip;
     
    private var message;
     
    function Start () {
    SetText(GetComponent.<GUIText>().text);
    }
     
    function TypeText () {
    for (var letter in message.ToCharArray()) {
    GetComponent.<GUIText>().text += letter;
    if (sound)
    GetComponent.<AudioSource>().PlayOneShot (sound);
    yield WaitForSeconds (letterPause);
    }
    }
     
    function SetText(text : String)
    {
    StopCoroutine("TypeText");
    message = text;
    GetComponent.<GUIText>().text = "";
    StartCoroutine("TypeText");
    }