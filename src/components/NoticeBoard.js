function NoticeBoard() {
    return (
        <section className="noticeConts">
            <h1 className="mainTit">Lorem ipsum dolor sit amet</h1>
            <p className="topTxt">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ipsum dicta recusandae quibusdam iusto accusamus laudantium quod dolor reprehenderit voluptas placeat repellendus exercitationem soluta porro eligendi quae ab eveniet, ducimus blanditiis officiis modi magni a! Fugit ducimus consequuntur debitis magnam.</p>

            <ul className="notice">
                <li className="item">
                    <div className="date">
                        <span>07</span>
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
                </li>
            </ul>
            <ul class="pagiNation">
                <li class="first"><i class="fas fa-angle-double-left" aria-hidden="true"></i></li>
                <li class="prev"><i class="fas fa-angle-left" aria-hidden="true"></i></li>
                <li class="num">1</li>
                <li class="num">2</li>
                <li class="num">3</li>
                <li class="next"><i class="fas fa-angle-right" aria-hidden="true"></i></li>
                <li class="last"><i class="fas fa-angle-double-right" aria-hidden="true"></i></li>
            </ul>
        </section>
    )
}

export default NoticeBoard;