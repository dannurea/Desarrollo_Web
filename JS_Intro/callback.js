const callback = (myfunction) => {
    myfunction();
    console.log('I am a callback')
}

callback(() => {
    console.log('No itsa me')
});
