function supportsWorkerType(){
	let supports = false
	const tester = {
		get type(){ supports = true }
	}

	try {
		new Worker('blob://', tester).terminate()
	} finally {
		supports
	}
	
}

export {
	supportsWorkerType
}