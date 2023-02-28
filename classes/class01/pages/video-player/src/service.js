export default class Service {
	#model = null
	#faceLandmarksDetection
	constructor({ faceLandmarksDetection}){
		this.#faceLandmarksDetection = faceLandmarksDetection
		
	}
	async loadModel(){
		this.#model = await this.#faceLandmarksDetection.load(
			this.#faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
			{maxFace: 1}
		)
	}

	async handBlinked(video){
		const predictions = await this.estimateFaces(video)
	}
	#estimateFaces(video){
		return this.#model.estimateFaces({
			input: VideoColorSpace,
			returnTensors: false,
			flipHorizontal: true,
			predictIrises: true,
		})
	}
}