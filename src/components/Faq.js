function Faq() {
    return (
        <section className="faqConts">
            <h1 className="mainTit">amet porttitor eget dolor morbi</h1>
            <p className="topTxt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
                <li onClick={QnaActive} className="quest">
                    <span>Q</span>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>
                    <p></p>
                </li>
                <li className="answer">
                    <span>A</span>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus. Quam vulputate dignissim suspendisse in est. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Semper eget duis at tellus. Sed elementum tempus egestas sed. Mi sit amet mauris commodo quis. Facilisis volutpat est velit egestas dui id ornare arcu. Imperdiet sed euismod nisi porta lorem mollis aliquam. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Quis vel eros donec ac odio. Et sollicitudin ac orci phasellus. Vulputate eu scelerisque felis imperdiet proin. Varius duis at consectetur lorem donec. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Tincidunt eget nullam non nisi est sit amet.<br /><br />Mollis aliquam ut porttitor leo a diam. Eget duis at tellus at. Volutpat blandit aliquam etiam erat velit scelerisque in. Lorem ipsum dolor sit amet. Pulvinar etiam non quam lacus. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Enim sed faucibus turpis in eu mi. Blandit massa enim nec dui nunc mattis enim ut tellus. Lorem donec massa sapien faucibus et molestie ac. Cursus euismod quis viverra nibh cras pulvinar mattis. Libero id faucibus nisl tincidunt eget nullam non nisi est. Nulla aliquet porttitor lacus luctus accumsan. Suspendisse ultrices gravida dictum fusce ut placerat. Tellus molestie nunc non blandit massa enim nec dui. Ac turpis egestas integer eget. Ultrices dui sapien eget mi proin sed libero enim.</div>
                </li>
                <li onClick={QnaActive} className="quest">
                    <span>Q</span>
                    <div>at consectetur lorem donec massa sapien faucibus?</div>
                    <p></p>
                </li>
                <li className="answer">
                    <span>A</span>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, modi dicta repudiandae eveniet
                        consequuntur totam accusamus fugiat, enim provident officia incidunt, quam odit amet! Odit.
                    </div>
                </li>
                <li onClick={QnaActive} className="quest">
                    <span>Q</span>
                    <div>consequat id porta nibh venenatis cras sed?</div>
                    <p></p>
                </li>
                <li className="answer">
                    <span>A</span>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </li>
                <li onClick={QnaActive} className="quest">
                    <span>Q</span>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit?</div>
                    <p></p>
                </li>
                <li className="answer">
                    <span>A</span>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </li>
                <li onClick={QnaActive} className="quest">
                    <span>Q</span>
                    <div>cursus euismod quis viverra nibh cras pulvinar?</div>
                    <p></p>
                </li>
                <li className="answer">
                    <span>A</span>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, modi dicta repudiandae eveniet
                        consequuntur totam accusamus fugiat, enim provident officia incidunt, quam odit amet! Odit.
                    </div>
                </li>
            </ul>
        </section>
    )

    function QnaActive(e) {
        e.currentTarget.nextSibling.classList.toggle("on");
        e.currentTarget.lastChild.classList.toggle("on");
    }
}

export default Faq;