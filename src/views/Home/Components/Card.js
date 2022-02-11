import { useSortable } from "@dnd-kit/sortable";
import DragHandle from "./DragHandle";

// aka SortableItem

export default function Card({
  removeCard,
  panelId,
  cardIndex,
  card,
  panelIndex,
  getIndex,
}) {
  const {
    setNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
  } = useSortable({
    id: card.id,
  });

  // console.log("card: ", over?.id);

  return (
    <div
      className="cardWrapper"
      key={cardIndex}
      ref={setNodeRef}
      style={{
        // ...wrapperStyle,
        transition,
        "--translate-x": transform ? `${Math.round(transform.x)}px` : undefined,
        "--translate-y": transform ? `${Math.round(transform.y)}px` : undefined,
        "--scale-x": transform?.scaleX ? `${transform.scaleX}` : undefined,
        "--scale-y": transform?.scaleY ? `${transform.scaleY}` : undefined,
      }}
    >
      <div
        className="cardWrapper__content"
        style={{
          value: cardIndex,
          isDragging,
          isSorting,
          overIndex: over ? getIndex(over.id) : overIndex,
          panelId,
        }}
      >
        {card.id}
        <div className="cardWrapper__right">
          <span
            className="cardWrapper__right--delete"
            onClick={() => {
              removeCard(cardIndex, panelIndex);
            }}
          >
            x
          </span>
          <DragHandle {...listeners} className="cardWrapper__right--dragIcon" />
        </div>
      </div>
    </div>
  );
}
