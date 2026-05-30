//your JS code here. If required.
let input = document.querySelector('#ip');
let start = document.querySelector('#btn')
let output = document.querySelector('#output')
start.addEventListener('click' ,function () {
	const first = new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(input.value)
		},2000)
	})	
	first.then((val)=>{
		output.innerText = `Result:${val}`
		return val
	}).then((val)=>{
		val = val*2
		setTimeout(()=>{
		output.innerText = `Result:${val}`
		},3000)	
	return val
	}).then((val)=>{
		val = val-3
		setTimeout(()=>{
		output.innerText = `Result:${val}`
		},4000)	
	return val
	}).then((val)=>{
		val = val/2
		setTimeout(()=>{
		output.innerText = `Result:${val}`
		},5000)	
	return val
	}).then((val)=>{
		val = val + 10
		setTimeout(()=>{
		output.innerText = `Final Result:${val}`
		},6000)	
	})
	
})
