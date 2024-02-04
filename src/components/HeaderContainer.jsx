import { useState } from "react"
import { Link } from "react-router-dom";
import { RoutesObject } from "../utils/Routes/Routes";

function HeaderContainer() {
    const [visible, setVisible] = useState(false);
   

    function handleClick () {
    setVisible(!visible)
    }
    
    return (<div className="container">
        <div className="header__block">
            <div className="header__logo _show _light">
                <a href="" target="_self"><img src="/img/logo.png" alt="logo" /></a>
            </div>
            <div className="header__logo _dark">
                <a href="" target="_self"><img src="/img/logo_dark.png" alt="logo" /></a>
            </div>
            <nav className="header__nav">
                <button className="header__btn-main-new _hover01" id="btnMainNew"><Link to={RoutesObject.ADD}>Создать новую задачу</Link></button>
                <button onClick={handleClick} className="header__user _hover02">Ivan Ivanov</button>
                {visible && (<div className="header__pop-user-set pop-user-set header__pop-user-set--open" id="user-set-target">
                    <p className="pop-user-set__name">Ivan Ivanov</p>
                    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                    <div className="pop-user-set__theme">
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox" />
                    </div>
                    <button type="button" className="_hover03"><Link to={RoutesObject.EXIT}>Выйти</Link></button>
                </div>)}
            </nav>
        </div>
    </div>)
}

export default HeaderContainer