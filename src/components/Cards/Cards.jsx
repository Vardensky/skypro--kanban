import Card from "../Card/Card";
import { statusApp } from "../../utils/data";
import {format} from "date-fns"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Cards({ isLoading, cards }) {
  const onDragEnd = () => {
    
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="main__block">
        <div className="main__content">
          {statusApp.map((status, index) => {
            return (
              <div key={index} className="main__column column">
                <div className="column__title">
                  <p>{status}</p>
                </div>
                <Droppable droppableId={status} key={status}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {!isLoading
                        ? cards
                            .filter((data) => data.status === status)
                            .map((data, index) => (
                              <Draggable
                                key={data._id}
                                draggableId={data._id}
                                index={index}
                              >
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Card
                                      title={data.title}
                                      theme={data.topic}
                                      date={format(new Date(data.date), "dd.MM.yyyy")}
                                      text={data.text}
                                      id={data._id}
                                    />
                                  </div>
                                )}
                              </Draggable>
                            ))
                        : "Данные загружаются"}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}

export default Cards;
