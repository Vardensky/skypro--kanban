function Form({description, setDescription, editMode}) {
    
    return (<form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
        <div className="form-browse__block">
            <label htmlFor="textArea01" className="subttl">{description}</label>
            <textarea onChange={(event) => setDescription(event.target.value)  } value={description} className="form-browse__area" name="text" id="textArea01" readOnly={!editMode} placeholder="Введите описание задачи..."></textarea>
        </div>
    </form>)
}

export default Form