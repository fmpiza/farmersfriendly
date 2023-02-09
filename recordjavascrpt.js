class VoiceRecorder {
	constructor() {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			console.log("getUserMedia supported")
		} else {
			console.log("getUserMedia is not supported on your browser!")
		}

		this.mediaRecorder
		this.stream
		this.chunks = []
		this.isRecording = false

		this.recorderRef = document.querySelector("#recorder")
		this.playerRef = document.querySelector("#player")
		this.startRef = document.querySelector("#start")
		this.stopRef = document.querySelector("#stop")
		
		this.startRef.onclick = this.startRecording.bind(this)
		this.stopRef.onclick = this.stopRecording.bind(this)

		this.constraints = {