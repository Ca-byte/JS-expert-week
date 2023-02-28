export default class Controller {
	#view
	#worker
	#camera
	#blinkedCounter = 0

	constructor({ view, worker, camera}) {
		this.#view = view
		this.#worker = this.#configureWorker(worker)
		this.#camera = camera

		this.#view.configureOnBtnClick(this.onBtnStart.bind(this))
	}

	static async initialize(deps) {
    const controller = new Controller(deps)
		controller.log('Not yet detecting eye blink! Click in the button to start')
    return controller.init()
  }
	#configureWorker(worker){
		let ready = false
		worker.onmessage = ({ data })=> {
			if('READY'=== data){
				this.#view.enableButton()
				console.log('worker is ready!')
				ready = true
				return;
			}
			const blinked = data.blinked
			this.#blinkedCounter += blinked
			this.#view.togglePlayVideo()
			console.log('blinked', blinked)
		}
		return {
			send (msg){
				if(!ready)return;
				worker.postMessage(msg)
			}
		}
	}
	async init(){
		console.log("Init beach!")
	}

	loop(){
		const video = this.#camera.video
		const img = this.#view.getVideoFrame(video)
		this.#worker.send(img)
		this.log(`detecting eyes blink...`)

		setTimeout(()=> this.loop(), 100);

	}

	log(text) {
		const times = `      -blinked times: ${this.#blinkedCounter}`
		this.#view.log(`status: ${text}`.concat(this.#blinkedCounter ? times: ""))
	}

	onBtnStart(){
		this.log('Initializing detection ...')
		this.#blinkedCounter = 0
		this.loop()
	}
}