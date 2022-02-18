/* 
//모듈 간략한 설명//
이 모듈은 performance.now() 값과 requestAnimationFrame을 통해 
얻게되는 진행률 값을 활용하여 구현한 애니메이션 기법이다.
일반인 css 보다 훨씬 부드러운 모션처리가 가능하지만, 기존에 있던 css 속성을 hover시 변경할 수 없는 등 부작용이 있으므로 가능하면 인터렉션은 요소에 class를 주는 형태로 하되, 꼭 필요한 부분에만 사용하는 것을 추천한다.

//사용법 및 주의 사항//
1. % 와 px 단위만으로 모션 처리 가능하며, em, vw, vh 등등의 단위는 적용이 안된다.
2. prop에 transform을 추가후 value에 숫자를 입력하면 translateY 값이 처리된다.

//사용 예시//
new Animate('div',
    {
        prop: 'width',
        duration: 500,
        value: '5%',
        callback: () => {
            new Animate('div',
                {
                    prop: 'opacity',
                    duration: 500,
                    value: 0,
                    callback: () => {
                        new Animate('div',
                            {
                                prop: 'scroll',
                                duration: 500,
                                value: 30,
                                callback: () => {
                                    new Animate('div',
                                        {
                                            prop: 'transform',
                                            duration: 800,
                                            value: 100,
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            )
        }
    }
) */

class Animate {

    //이 constructor 함수를 통해서 복사될 인스턴스에 this를 통해서 새롭게 변수 등이 설정
    constructor(selector, option) {
        this.selector = selector;
        //객체의 전개 구문을 통해서 duration 속성이 없으면 기본적으로 500ms로 고정
        this.option = { duration: 500, ...option };
        //해당 페이지가 로드 되고나서 부터 아래 구문이 실행될때의 걸린 시간을 의미
        this.startTime = performance.now();
        this.currentValue = null;

        //css의 일반적인 속성 외에도 scroll 애니메이션도 처리 할 수 있도록 추가함. 
        if (this.option.prop === 'scroll') {
            //srollY 속성을 통해서 해당 스크롤된 값을 저장하는데, srollY 속성이 없는 IE낮은 버전의 경우 동일한 속성인 pageYOffset 속성을 대신 적용함.
            this.currentValue = this.selector.srollY || this.selector.pageYOffset;

            //css 속성 중 transform:transformY 얻는 로직 추가. 예를들어, transform:transformY(-100px)인 값을 얻으려면 속성이 'transform'인 경우에서 찾아야 하고 결과 값은 matrix(1, 0, 0, 1, 0, 0) 같은 형식을 뛰므로 끝에 있는 값을 취함.
        } else if (this.option.prop === 'transform') {

            let transformYPosStart = getComputedStyle(this.selector)[this.option.prop].lastIndexOf(',');
            let transformYPosEnd = getComputedStyle(this.selector)[this.option.prop].lastIndexOf(')');
            let tranformYValue = getComputedStyle(this.selector)[this.option.prop].slice(transformYPosStart + 1, transformYPosEnd);
            this.currentValue = Number(tranformYValue);

        } else {
            //scroll속성 이외에는 모두 아래 구문으로 처리하는데, getComputedStyle 속성을 활용하여 해당 요소의 css 속성값 즉, 이미 브라우저상에서 처리된 값이 currentValue에 저장됨. 주의 할 것은 css의 값이 아닌 랜더링 된 값(px)을 의미함.
            this.currentValue = parseFloat(getComputedStyle(this.selector)[this.option.prop]);
        }

        //value 값의 자료형을 isString에 저장하는데, 굳이 저장하는 이유는 css 속성 값이 %인 경우 처리해야 하기 때문임. 이 모듈은 기본적으로 getComputedStyle를 활용하기 때문에 px로 애니메이션 처리함.
        this.isString = typeof this.option.value;

        // 만약, value 값에 %가 포함되어 있다면 실행.
        if (this.isString === 'string') {
            // 변경하려는 값이 %일 경우는 부모 요소의 속성(아래 x, y에 있는 속성)에 상대적으로 반응하기 때문에 아래의 과정이 필요함. 예를들어, 부모의 width 속성이 100px이고 자식의 width 속성이 50px일때 width 값을 100%로 바꾼다면, 우리가 예상했던 결과인 100px이 된다. 즉, 아래 과정은 변경하려는 속성의 % 단위와 현재 해당 요소의 px 단위를 %로 변환하여 나중에 계산하기 전에 미리 서로의 단위를 맞춰주는 작업이다.
            const parentWid = parseFloat(getComputedStyle(this.selector.parentElement).width);
            const parentHt = parseFloat(getComputedStyle(this.selector.parentElement).height);
            const x = ['margin-left', 'margin-right', 'left', 'right', 'width'];
            const y = ['margin-top', 'margin-bottom', 'top', 'bottom', 'height'];
            for (const prop of x) {
                if (this.option.prop === prop) this.currentValue = (this.currentValue / parentWid) * 100;
            }
            for (const prop of y) {
                if (this.option.prop === prop) this.currentValue = (this.currentValue / parentHt) * 100;
            }
            // '%'라는 문자를 제거하기 위해 parseFloat 활용함.
            this.option.value = parseFloat(this.option.value);
        }

        // 만약, 변경할 속성 값이 현재 속성 값과 같으면 이 모듈을 끝낸다.
        if (this.option.value === this.currentValue) return;

        /* setTimeout으로 처리하는 방식쓰면 컴퓨터의 성능 때문에 시간이 씹혀서 애니메이션이 끊기는 현상을 발생하고 모니터 주사율에 맞게 알아서 키프레임이 자동으로 조절되기 않기 때문에 requestAnimationFrame 함수를 사용한다.
        requestAnimationFrame 인자로 콜백햄수를 받는데 콜백함수의 인자엔 performance.now()와 거의 흡사한 시간이 저장된다. 즉, 호출 될때의 시간이긴 한대, 처음 호출되고 부터 계속 호출 될때마다 그 시간은 누적이 되는 개념이다. */

        requestAnimationFrame(time => this.run(time));
    }

    run(time) {

        /* requestAnimationFrame이 계속 호출될때 마다 time은 커지며, 더불어 progress 값도 0에서 1까지 모니터 주사율에 맞게로 자연스럽게 커짐. 결과적으로, progress의 도움을 받아서 해당 속성을 변경할 위치까지 도달하게 됨*/
        let timeLast = time - this.startTime;
        let progress = timeLast / this.option.duration;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        if (progress < 1) {
            requestAnimationFrame(time => this.run(time));
        } else {
            setTimeout(() => {
                if (this.option.callback) this.option.callback();
            }, 0);
        }

        let result = this.currentValue + ((this.option.value - this.currentValue) * progress);

        //opacity, scroll이 아닌 나머지 모든 속성들을 % 단위로 이동되도록 요청했다면 실행
        if (this.isString === 'string') {
            this.selector.style[this.option.prop] = `${result}%`;

            //opacity 값은 단위가 없으니 그냥 대입
        } else if (this.option.prop === 'opacity') {
            this.selector.style[this.option.prop] = result;

            //scroll 값은 window.scroll 함수 활용하여 처리
        } else if (this.option.prop === 'scroll') {
            window.scroll(0, result);

            // opacity, scroll이 아닌 나머지 모든 속성들을 %가 아닌 px 단위로 이동되도록 요청했다면 실행
        } else if (this.option.prop === 'transform') {
            this.selector.style[this.option.prop] = `matrix(1, 0, 0, 1, 0, ${result})`;
        } else {
            this.selector.style[this.option.prop] = `${result}px`;
        }
    }



}

export default Animate;