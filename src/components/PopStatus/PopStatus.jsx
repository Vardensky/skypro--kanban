import classNames from "classnames";
import { statusApp } from "../../utils/data";

function PopStatus({ status, setStatus, editMode }) {
  return (
    <div className="pop-browse__status status">
      <p className="status__p subttl">Статус</p>
      <div className="status__themes">
        {editMode ? (
          <>
            {statusApp.map((element) => (
              <label
              key={element}
                className={classNames("status__theme ", {
                  _gray: status === element,
                })}
              >
                <input
                  type="radio"
                  value={element}
                  checked={status === element}
                  onChange={(event) => setStatus(event.target.value)}
                />
                <span className={classNames({ _gray: status === element })}>
                  {element}
                </span>
              </label>
            ))}
            
          </>
        ) : (
          <div className="status__theme _gray">
            <p className="_gray">{status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopStatus;
