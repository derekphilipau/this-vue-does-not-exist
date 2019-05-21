export default {
    methods: {
        getRandomizedIdArray(min, max, idLength) {
            let a = [];
            let len = max - min + 1;
            for (var i = 0; i < len; ++i) {
                a[i] = this.getId(min + i, idLength);
            }
            a = this.shuffle(a);
            return a;
        },
        getId(i, idLength) {
            return (i + '').padStart(idLength, '0');
        },
        getImageUrl(id, imgBaseUrl, fileExtension) {
            return imgBaseUrl + id + '.' + fileExtension;
        },
        /**
         * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
         * Shuffles array in place. ES6 version
         * @param {Array} a items An array containing the items.
         */
        shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        },
        getRandom(min, max) {
            // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
            // Returns a random integer between min (include) and max (include)
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}