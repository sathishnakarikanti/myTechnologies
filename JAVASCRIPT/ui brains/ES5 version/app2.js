let printWishMessage=(message,color) => {
    let h1Tag=document.querySelector(selectors='#msg-2');
	h1Tag.innerText=message;
	h1Tag.style.backgroundColor=color;
	h1Tag.style.padding='15px';
	h1Tag.style.boxShadow='0 0 10px black';
};

	//Event listeners (in it steps)
	//1.Get the HTML element/tag.
	//2.Attach an event to the element/tag.
	//3.Write a function for event handling

	//good morning button
	let gmButton=document.querySelector(selectors='#gm-btn');//1.getting the html element
    gmButton.addEventListener(type ='click',listener= function(){
    	printWishMessage(message='Good Morning',color='green');
    });

    //good afternoon button
    let gaButton=document.querySelector(selectors='#ga-btn');
    gaButton.addEventListener(type ='click',listener= function(){
    	printWishMessage(message='Good Afternoon',color='red');
    });

    let geButton=document.querySelector(selectors='#ge-btn');
    geButton.addEventListener(type='click', listener= function(){
    	printWishMessage(message='Good Evening',color='orange');
    });
    let gnButton=document.querySelector(selectors='#gn-btn');
    gnButton.addEventListener(type='click',listener= function(){
    	printWishMessage(message='Good Night',color='blue');

    });