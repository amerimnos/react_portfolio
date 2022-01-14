import { useEffect, useRef, useState } from "react";

function Join() {

    const { daum } = window;
    let formData = {
        bday: '',
        bannerApply: '',
        sympoDate: '',
        companyAddressDetail2: '',
        companyAddressDetail1: '',
        companyAddress: '',
        age: '',
        phone: '',
        email: '',
        name: '',
        passwordConfirm: '',
        password: '',
        id: '',
        privacy: null,
    }
    let [val, setVal] = useState(formData);
    let [err, setErr] = useState({});
    let [success, SetSuccess] = useState('');

    let postCode = useRef(null);
    let address1 = useRef(null);
    let address2 = useRef(null);

    function handleValue(e) {
        let { name, value } = e.target;
        // [name] 사용 이유 : developer.mozilla.org 객체초기자 > 계산된 프로퍼티명 참고( https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer#%EA%B3%84%EC%82%B0%EB%90%9C_%ED%94%84%EB%A1%9C%ED%8D%BC%ED%8B%B0%EB%AA%85 )
        setVal({ ...val, [name]: value });
    }

    function handleCheck(e) {
        let name = e.target.name;
        setVal({ ...val, [name]: e.target.checked });
    }

    function handleSelect(e) {
        let name = e.target.name;
        setVal({ ...val, [name]: e.target.selectedIndex });
    }

    function handleSubmit(e) {
        e.preventDefault();

        //다음API로 불러온 데이터는 onChange에 영향을 안받아서 강제로 추가함.
        let postCodeOb = {
            companyAddress: postCode.current.value,
            companyAddressDetail1: address1.current.value,
            companyAddressDetail2: address2.current.value,
        }
        setVal({ ...val, ...postCodeOb });
        console.log(val);

        setErr(errorCheck(val));
    }

    function errorCheck(val) {
        let errors = {};
        let num = /[0-9]/;
        let char = /[!@#$%^&*]/;
        let eng = /[a-zA-Z]/;

        if (!val.privacy) errors.privacy = '동의해 주세요.';
        if (!val.id || val.id.length < 6) errors.id = '6자 이상의 ID를 입력하세요.';
        if (val.password.length < 5 || !num.test(val.password) || !char.test(val.password) || !eng.test(val.password)) errors.password = '5자 이상, 영문, 숫자, 특수문자를 포함해주세요.';
        if (val.password !== val.passwordConfirm) errors.passwordConfirm = '비밀번호는 동일해야 합니다.';
        if (!val.name || val.name.length < 6) errors.name = '이름을 6자이상 입력하세요.';
        if (!val.email || !/@/.test(val.email)) errors.email = 'e-mail을 입력하세요.';
        if (!val.phone || !num.test(val.phone) || !/010/.test(val.phone)) errors.phone = '휴대폰 번호를 입력하세요.';
        if (val.age === 0) errors.age = '나이를 선택하세요.';
        if (!postCode.current.value) {
            errors.companyAddress = '주소찾기 버튼를 활용하세요.';
        }
        if (!val.sympoDate) errors.sympoDate = '요일을 선택하세요.';
        if (!val.bannerApply) errors.bannerApply = '신청여부를 선택하세요.';
        if (!val.bday) errors.bday = '날짜를 입력하세요.';


        if (Object.keys(errors).length === 0) SetSuccess('회원가입을 축하합니다.');
        return errors;
    }


    function sample4_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                let roadAddr = data.roadAddress; // 도로명 주소 변수
                let extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraRoadAddr !== '') {
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                postCode.current.value = data.zonecode;
                address1.current.value = roadAddr;
                address2.current.value = data.jibunAddress;
            },
            autoClose: true
        }).open();
    }


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
                    <input type="checkbox" name="privacy" id="privacy" onChange={handleCheck}></input>
                    <label className="support-check-box" htmlFor="privacy"></label> I agree with the above.<br></br>
                    <div className="error">{err.privacy}</div>
                </div>
            </article>


            <article className="const2">
                <form id="form" action="" method="" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Enter your membership information.</legend>

                        <div className="tit"><i className="material-icons">people_alt</i> Account information</div>
                        <table className="form-table">
                            <caption>Enter your membership information.</caption>
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
                                            <input type="text" name="id" id="id" placeholder="enter ID" onChange={handleValue}></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.id}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="password">Password <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="password" name="password" id="password" placeholder="Enter password" onChange={handleValue}></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.password}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="passwordConfirm">Checking the password <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Enter password" onChange={handleValue}></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.passwordConfirm}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="tit"><i className="material-icons">business_center</i> Personal information</div>
                        <table className="form-table">
                            <caption>enter Personal information.</caption>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="name">Name <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="name" id="name" placeholder="Enter name" onChange={handleValue}></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.name}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="email">Email <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="email" id="email" placeholder="Enter email" onChange={handleValue}></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.email}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="phone">Phone <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="inputWrap">
                                            <input type="text" name="phone" id="phone" placeholder="Enter phone" onChange={handleValue}></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.phone}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="age">Age <span className="necessary">*</span></label>
                                    </th>
                                    <td>
                                        <div className="customSelectWrap">
                                            <select name="age" id="age" onChange={handleSelect}>
                                                <option val="">- Please choose -</option>
                                                <option val="10s">10s</option>
                                                <option val="20s">20s</option>
                                                <option val="30s">30s</option>
                                                <option val="40s">40s</option>
                                                <option val="50s">50s</option>
                                            </select>
                                            <i className="material-icons">expand_more</i>
                                        </div>
                                        <div className="error">{err.age}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan="3">
                                        <label className="smTrans" htmlFor="companyAddress">Address <span className="necessary">*</span></label>
                                    </th>
                                    <td className="smTrans">
                                        <div className="inputWrap smTrans">
                                            <input readOnly ref={postCode} type="text" name="companyAddress" id="companyAddress" placeholder="Enter Post code" onChange={handleValue}></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <button onClick={() => sample4_execDaumPostcode()} className="support-btn">주소찾기</button>
                                        <div className="inputWrap mt10 width-full">
                                            <input readOnly ref={address1} type="text" name="companyAddressDetail1" placeholder="Enter address"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="inputWrap mt10 width-full">
                                            <input ref={address2} type="text" name="companyAddressDetail2" placeholder="Enter address details"></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.companyAddress}</div>

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
                                        <input type="checkbox" name="sympoDate" id="sympo_sat" onChange={handleCheck}></input>Sat
                                        <label htmlFor="sympo_sat" className="support-check-box interval"></label>
                                        <input type="checkbox" name="sympoDate" id="sympo_sun" onChange={handleCheck}></input>Sun
                                        <label htmlFor="sympo_sun" className="support-check-box"></label>

                                        <div className="sponsorSubContents">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                                        </div>
                                        <div className="error">{err.sympoDate}</div>

                                    </td>
                                </tr>
                                <tr>
                                    <th>Banner request <span className="necessary">*</span></th>
                                    <td>
                                        <label className="radio-wrap interval">
                                            <input type="radio" name="bannerApply" value="yes" className="radio-box" onChange={handleCheck}></input>
                                            <i className="radio-button"></i> <span>yes</span>
                                        </label>
                                        <label className="radio-wrap interval">
                                            <input type="radio" name="bannerApply" value="no" className="radio-box" onChange={handleCheck}></input>
                                            <i className="radio-button"></i> <span>no</span>
                                        </label>
                                        <div className="error">{err.bannerApply}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label htmlFor="bday">Banner date <span className="necessary">*</span></label>
                                    </th>
                                    <td>

                                        <div className="inputWrap">
                                            <input type="date" name="bday" id="bday" onChange={handleValue} /* required pattern="\d{4}-\d{2}-\d{2}" */></input>
                                            <span className="inputFocus"></span>
                                        </div>
                                        <div className="error">{err.bday}</div>
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


            <div className="success">{success}</div>
        </section>
    )
}
export default Join;