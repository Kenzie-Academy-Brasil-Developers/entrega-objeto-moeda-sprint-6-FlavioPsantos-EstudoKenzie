const coin = {
    state: 0,

    flip: function() {
        console.log(this.state)
        this.state = Math.round(Math.random() * 1)
        return this.state

    },

    toString: function() {
        if (coin.flip() === 1) {
            return 'Heads'
        } else {
            return 'Tails'
        }
    },

    toHTML: function() {
        const image = document.createElement("img");
        if (coin.flip() === 1) {
            image.src = "asset/img/cara.jpg"
        } else {
            image.src = "asset/img/coroa.png"
        }
        image.alt = "Heads/Tails"
        const body = document.querySelector('body')
        body.appendChild(image)
        return image;
    },
};

function display20Flips() {
    const body = document.querySelector('body')
    const results = [];
    for (let i = 1; i <= 20; i++) {
        let text = document.createTextNode(` Lançamento ${i}: ${coin.toString()}, `)
        results.push(coin.toString())
        body.appendChild(text)
    }
    return results;
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.


}

function display20Images() {
    const results = [];
    for (let i = 1; i <= 20; i++) {
        coin.toHTML()
        results.push(coin.toString())
    }
    return results;


}
display20Images();
display20Flips();