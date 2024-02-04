function PopStatus() {
    
    return (<div className="pop-browse__status status">
        <p className="status__p subttl">Статус</p>
        <div className="status__themes">
            <div className="status__theme _hide">
                <p>Без статуса</p>
            </div>
            <div className="status__theme _gray">
                <p className="_gray">Нужно сделать</p>
            </div>
            <div className="status__theme _hide">
                <p>В работе</p>
            </div>
            <div className="status__theme _hide">
                <p>Тестирование</p>
            </div>
            <div className="status__theme _hide">
                <p>Готово</p>
            </div>
        </div>
    </div>)
}

export default PopStatus