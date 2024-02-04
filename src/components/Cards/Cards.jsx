import Card from "../Card/Card";
import { statusApp } from "../../utils/data";
import * as S from "./Cards.styled";

function Cards({ isLoading, cards }) {
  return (
    <div className="main__block">
      <div className="main__content">
        {statusApp.map((status, index) => {
          return (
            <div key={index} className="main__column column">
              <div className="column__title">
                <p>{status}</p>
              </div>
              <S.Cards>
                {!isLoading
                  ? cards.map((data) => {
                      if (data.status === status) {
                        return (
                          <Card
                            key={data._id}
                            title={data.title}
                            theme={data.topic}
                            date={data.date}
                            text={data.text}
                            id={data._id}
                          />
                        );
                      }
                    })
                  : "Данные загружаются"}
              </S.Cards>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
