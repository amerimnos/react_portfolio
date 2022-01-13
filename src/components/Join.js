function Join() {
    return (

        <section className="joinConts">
            <article className="const1">
                <div className="info">
                    <dl>
                        <dt>Deadline</dt>
                        <dd className="big">2022. 01. 31 ~ 2022. 2. 22</dd>
                    </dl>
                </div>
            </article>

            <article className="privacyConts">
                <div className="scrollWrap">
                    <div className="scroll">
                        <h2>Euismod lacinia at quis risus sed vulputate. Eget magna fermentum iaculis eu non.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Arcu dui vivamus arcu felis bibendum ut. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Eu nisl nunc mi ipsum faucibus. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Aliquet sagittis id consectetur purus. Euismod lacinia at quis risus sed vulputate. Eget magna fermentum iaculis eu non.</p>
                        <h2>Mauris in aliquam sem fringilla ut morbi tincidunt.</h2>
                        <p>Aliquet lectus proin nibh nisl condimentum. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Ut lectus arcu bibendum at. Amet consectetur adipiscing elit ut aliquam. Tincidunt vitae semper quis lectus nulla at volutpat diam. Egestas sed sed risus pretium quam vulputate. Blandit cursus risus at ultrices mi tempus imperdiet. Risus ultricies tristique nulla aliquet enim tortor at. Dolor morbi non arcu risus quis varius quam quisque. In eu mi bibendum neque egestas congue quisque. Id donec ultrices tincidunt arcu non sodales neque.</p>
                        <h2>Quisque id diam vel quam elementum.</h2>
                        <p>Vestibulum lectus mauris ultrices eros in cursus turpis. Elementum tempus egestas sed sed risus pretium. In est ante in nibh. Rutrum quisque non tellus orci ac. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Orci sagittis eu volutpat odio. Amet est placerat in egestas erat imperdiet sed euismod nisi. Magna etiam tempor orci eu lobortis elementum. Proin fermentum leo vel orci porta non.</p>
                    </div>
                </div>
                <div className="checkWrap">
                    <input type="checkbox" name="privacy" id="privacy"></input>
                    <label className="support-check-box" htmlFor="privacy"></label> I agree with the above.
                </div>
            </article>


            <article className="const2">
                <form id="form" action="" method="">
                    <fieldset>
                        <legend>Enter your membership information.</legend>

                        <div className="tit"><i className="material-icons">people_alt</i> Account information</div>
                        <table className="form-table">
                            <caption>ID, Password, phone 등을 입력해주세요.</caption>
                            <colgroup>
                                <col style={{ width: '20%' }}></col>
                                <col style={{ width: '80%' }}></col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="id">ID <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="id" id="id" placeholder="enter ID"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="password">Password <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="password" id="password" placeholder="Enter password"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="passwordConfirm">Checking the password <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="passwordConfirm" id="passwordConfirm" placeholder="Enter password"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="tit"><i className="material-icons">business_center</i> Personal information</div>
                        <table className="form-table">
                            <caption>ID, Password, phone 등을 입력해주세요.</caption>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="name">Name <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="name" id="name" placeholder="Enter name"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="email">Email <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="email" id="email" placeholder="Enter email"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="phone">Phone <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="phone" id="phone" placeholder="Enter phone"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="age">Age <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="customSelectWrap">
                                            <select name="age" id="age">
                                                <option value="company_sort1">10s</option>
                                                <option value="company_sort2">20s</option>
                                                <option value="company_sort3">30s</option>
                                                <option value="company_sort4">40s</option>
                                                <option value="company_sort5">50s</option>
                                            </select>
                                            <i className="material-icons">expand_more</i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="3">
                                        <label className="smTrans" htmlFor="companyAddress">Address <span className="necessary">*</span></label>
                                    </th>
                                    <td className="smTrans">
                                        <div className="inputWrap smTrans">
                                            <input type="text" name="companyAddress" id="companyAddress" placeholder="Enter adress"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <button className="support-btn">Search</button>
                                        <div className="inputWrap mt10 width-full">
                                            <input type="text" name="companyAddressDetail1" placeholder="Enter address"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="inputWrap mt10 width-full">
                                            <input type="text" name="companyAddressDetail2" placeholder="Enter address details"></input>
                                            <span className="inputFocus"></span>
                                        </div>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="tit"><i className="material-icons">style</i> Sponsor</div>
                        <table className="form-table">
                            <caption>심포지엄, 배너 요청 여부, 추가 사항을 입력해주세요.</caption>
                            <colgroup>
                                <col style={{ width: '20%' }}></col>
                                <col style={{ width: '80%' }}></col>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>Symposium <span className="necessary">*</span></th>
                                    <td>
                                        <input type="checkbox" name="sympo_sat" id="sympo_sat"></input>Sat
                                        <label htmlFor="sympo_sat" className="support-check-box interval"></label>
                                        <input type="checkbox" name="sympo_sun" id="sympo_sun"></input>Sun
                                        <label htmlFor="sympo_sun" className="support-check-box"></label>

                                        <div className="sponsorSubContents">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Banner request <span className="necessary">*</span></th>
                                    <td>
                                        <label className="radio-wrap interval">
                                            <input type="radio" name="banner_apply" value="yes" className="radio-box"></input>
                                            <i className="radio-button"></i> <span>yes</span>
                                        </label>
                                        <label className="radio-wrap interval">
                                            <input type="radio" name="banner_apply" value="no" className="radio-box"></input>
                                            <i className="radio-button"></i> <span>no</span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="bday">Banner date <span className="necessary">*</span></label>
                                    </th>
                                    <td>

                                        <div className="inputWrap">
                                            <input type="date" name="bday" id="bday" required="" pattern="\d{4}-\d{2}-\d{2}"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="additionalRequest">Additional requests</label>
                                    </th>
                                    <td>
                                        <div className="inputWrap width-full">
                                            <textarea name="additionalRequest" id="additionalRequest" className="textareaBox"
                                                placeholder="Please feel free to write down the request."
                                            ></textarea>
                                            <span className="inputFocus"></span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="payinfo">
                            <span className="emoji">🔔</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                            possimus iste cumque quas voluptas doloremque, dignissimos reiciendis eaque libero ad tempora animi
                            tenetur? Dolores nemo qui quo accusantium. Ipsum, ea!
                        </div>

                        <div className="btn-wrap">
                            <label htmlFor="submit" className="commonBtn1 border-btn-hover">
                                <input type="submit" id="submit"></input>
                                <span>Register</span>
                                <span>Register</span>
                            </label>

                            <label htmlFor="reset" className="commonBtn1 border-btn-hover">
                                <input type="reset" id="reset"></input>
                                <span>Cancel</span>
                                <span>Cancel</span>
                            </label>
                        </div>
                    </fieldset>
                </form>
            </article>
        </section>
    )
}
export default Join;