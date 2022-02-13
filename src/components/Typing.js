

class Typing {
    constructor(ref, array) {

        this.ref = ref.current;
        this.newObj = [];
        array.forEach((element, index) => {
            this.newObj = [...this.newObj, element.split('')];
        });
        this.typing();
    }

    async typing() {
        for (let arrayIndex = 0; arrayIndex < this.newObj.length; arrayIndex++) {

            //초반 딜레이 줌.
            if (arrayIndex === 0) {
                await new Promise(
                    resolve => {
                        setTimeout(() => {
                            resolve();
                        }, 2000);
                    }
                )
            }
            await new Promise(
                resolve => {
                    for (let index = 0; index < this.newObj[arrayIndex].length; index++) {
                        setTimeout(() => {
                            let text = this.newObj[arrayIndex][index];
                            this.ref.textContent += text;
                        }, 50 * index);
                    }
                    setTimeout(() => {
                        resolve();
                    }, 50 * this.newObj[arrayIndex].length + 3500);
                }
            )
            if (arrayIndex !== this.newObj.length - 1) {
                await new Promise(
                    resolve => {
                        for (let index = this.newObj[arrayIndex].length, i = 0; 0 < index; index--) {
                            setTimeout(() => {
                                this.newObj[arrayIndex].splice(index - 1, 1 + i);
                                this.ref.textContent = this.newObj[arrayIndex].join('');
                            }, 35 * i);
                            i++
                        }
                        setTimeout(() => {
                            resolve();
                        }, 35 * this.newObj[arrayIndex].length + 1000);
                    }
                )
            } else {
                this.ref.classList.add('cursorOff');
            }

        }
    }
}

export default Typing;