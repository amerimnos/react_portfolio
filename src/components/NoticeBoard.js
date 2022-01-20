import { useState, useRef, useEffect } from "react";

function NoticeBoard() {

    const [isPop, setIsPop] = useState(false);
    const [articleIndex, setArticleIndex] = useState(null);
    const [article, setArticle] = useState([]);
    const [isCreate, setIsCreate] = useState(null);

    const popInputTitle = useRef(null);
    const popInputConts = useRef(null);
    const popInputTime = useRef(null);

    function handleCreate() {
        let tit = popInputTitle.current.value;
        let conts = popInputConts.current.value;
        let time = popInputTime.current.value;
        console.log(new Date().getHours());

        setArticle(
            [
                { title: tit, contents: conts, time: time },
                ...article
            ]
        );
        setIsPop(false);

    }

    async function handleSync(index) {

        //바로 setIsPop 실행하면 Pop요소가 바로 불러오지 않고 아래 코드를 실행시키기 때문에 오류남. 
        //그래서 await 활용.
        await new Promise(
            resolve => resolve(setIsPop(true))
        )
        popInputTitle.current.value = article[index].title;
        popInputConts.current.value = article[index].contents;
    }

    function handelDelete(articleIndex) {
        setArticle(
            article.filter(
                (article, index) => {
                    //함수 본문에 {}로 둘러쌓여 있으면 반드시 return을 해야 리턴값을 인식함..
                    return index !== articleIndex;
                }
            )
        )
        setIsPop(false);
    }

    function handleEdit() {
        setArticle(
            article.map(
                (el, index) => {
                    if (index === articleIndex) {
                        return { title: popInputTitle.current.value, contents: popInputConts.current.value, time: el.time, timeEdit: popInputTime.current.value }
                    } else {
                        return el;
                    }
                }
            )
        )
        setIsPop(false);
    }

    console.log('article', article);

    return (
        <section className="noticeConts">
            <h1 className="mainTit">Lorem ipsum dolor sit amet</h1>
            <p className="topTxt">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ipsum dicta recusandae quibusdam iusto accusamus laudantium quod dolor reprehenderit voluptas placeat repellendus exercitationem soluta porro eligendi quae ab eveniet, ducimus blanditiis officiis modi magni a! Fugit ducimus consequuntur debitis magnam.</p>
            <ul className="notice">

                {
                    article.map((el, index) => {

                        return (
                            <li key={index} className="item" onClick={
                                () => {
                                    setArticleIndex(index);
                                    handleSync(index);
                                    setIsCreate(false);
                                }}>
                                <div className="date">
                                    <span>21</span>
                                    <div>2022.01</div>
                                </div>
                                <ul className="txt">
                                    <li>
                                        <span>Notice</span>
                                        <h2>{el.title}</h2>
                                    </li>
                                    <li className="conts">{el.contents}</li>
                                    <li>
                                        <span className="time">Writing time {el.time}</span>
                                        <span className="timeEdit">Modified time {el.timeEdit}</span>
                                    </li>
                                </ul>
                                <i className="viewBtn">view details</i>
                            </li>
                        )
                    })

                }

            </ul>
            <button type="button" data-text="Create" className="createBtn" onClick={
                () => {
                    setIsPop(true);
                    setIsCreate(true);
                }
            }>
                <span>C</span>
                <span>r</span>
                <span>e</span>
                <span>a</span>
                <span>t</span>
                <span>e</span>
                <span class="material-icons-round">arrow_forward_ios</span>
            </button>

            <ul className="pagiNation">
                <li className="first"><i className="fas fa-angle-double-left" aria-hidden="true"></i></li>
                <li className="prev"><i className="fas fa-angle-left" aria-hidden="true"></i></li>
                <li className="num">1</li>
                <li className="num">2</li>
                <li className="num">3</li>
                <li className="next"><i className="fas fa-angle-right" aria-hidden="true"></i></li>
                <li className="last"><i className="fas fa-angle-double-right" aria-hidden="true"></i></li>
            </ul>

            {isPop ? <Pop /> : null}
        </section>
    )

    function Pop() {
        return (
            <div className="popWrap">
                <div className="pop">
                    <form action="">
                        <fieldset>
                            <legend>The title and contents to write on the Q&A bulletin board.</legend>
                            <input ref={popInputTime} type="hidden" value={`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`} />
                            <label htmlFor="title" className="tit">Title</label>
                            <input ref={popInputTitle} type="text" className="inputTit" id="title" placeholder="Please write the title to put in the Q&A bulletin board." required />
                            <label htmlFor="conts" className="tit">Contents</label>
                            <textarea ref={popInputConts} type="text" className="conts" id="conts" placeholder="Please write what you want to put in the Q&A bulletin board." required />
                            <div className="btnWrap">

                                {
                                    isCreate
                                        ?
                                        <button className="createBtn" onClick={
                                            () => {
                                                handleCreate();
                                            }
                                        }>Create</button>
                                        :
                                        <button className="createBtn" onClick={
                                            () => {
                                                handleEdit();
                                            }
                                        }>Edit</button>

                                }

                                <button type="button" className="deleteBtn" onClick={
                                    () => {
                                        handelDelete(articleIndex);
                                    }
                                }>Delete</button>
                                <button type="button" className="exitBtn" onClick={
                                    () => {
                                        setIsPop(false);
                                    }
                                }>Exit</button>

                            </div>
                        </fieldset>
                    </form>
                </div>

                {/* <li className="item">
                    <div className="date">
                        <span>01</span>
                        <div>2022.01</div>
                    </div>
                    <ul className="txt">
                        <li>
                            <span>Notice</span>
                            <h2>Lorem, ipsum dolor.</h2>
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad rerum cupiditate repudiandae porro fuga.</li>
                    </ul>
                    <a href="#n" onClick={()=>{alert('to be announced')}} className="viewBtn">view details</a>
                </li>
                <li className="item">
                    <div className="date">
                        <span>11</span>
                        <div>2022.01</div>
                    </div>
                    <ul className="txt">
                        <li>
                            <span>Notice</span>
                            <h2>Lorem, ipsum dolor.</h2>
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad rerum cupiditate repudiandae porro fuga.</li>
                    </ul>
                    <a href="#n" onClick={()=>{alert('to be announced')}} className="viewBtn">view details</a>
                </li>
                <li className="item">
                    <div className="date">
                        <span>15</span>
                        <div>2022.01</div>
                    </div>
                    <ul className="txt">
                        <li>
                            <span>Notice</span>
                            <h2>Lorem, ipsum dolor.</h2>
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad rerum cupiditate repudiandae porro fuga.</li>
                    </ul>
                    <a href="#n" onClick={()=>{alert('to be announced')}} className="viewBtn">view details</a>
                </li>
                <li className="item">
                    <div className="date">
                        <span>21</span>
                        <div>2022.01</div>
                    </div>
                    <ul className="txt">
                        <li>
                            <span>Notice</span>
                            <h2>Lorem, ipsum dolor.</h2>
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad rerum cupiditate repudiandae porro fuga.</li>
                    </ul>
                    <a href="#n" onClick={()=>{alert('to be announced')}} className="viewBtn">view details</a>
                </li>
                <li className="item">
                    <div className="date">
                        <span>25</span>
                        <div>2022.01</div>
                    </div>
                    <ul className="txt">
                        <li>
                            <span>Notice</span>
                            <h2>Lorem, ipsum dolor.</h2>
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad rerum cupiditate repudiandae porro fuga.</li>
                    </ul>
                    <a href="#n" onClick={()=>{alert('to be announced')}} className="viewBtn">view details</a>
                </li>
                <li className="item">
                    <div className="date">
                        <span>31</span>
                        <div>2022.01</div>
                    </div>
                    <ul className="txt">
                        <li>
                            <span>Notice</span>
                            <h2>Lorem, ipsum dolor.</h2>
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad rerum cupiditate repudiandae porro fuga.</li>
                    </ul>
                    <a href="#n" onClick={()=>{alert('to be announced')}} className="viewBtn">view details</a>
                </li>
                <li className="item">
                    <div className="date">
                        <span>02</span>
                        <div>2022.02</div>
                    </div>
                    <ul className="txt">
                        <li>
                            <span>Notice</span>
                            <h2>Lorem, ipsum dolor.</h2>
                        </li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ad rerum cupiditate repudiandae porro fuga.</li>
                    </ul>
                    <a href="#n" onClick={()=>{alert('to be announced')}} className="viewBtn">view details</a>
                </li> */}
            </div>
        )
    }

}

export default NoticeBoard;


