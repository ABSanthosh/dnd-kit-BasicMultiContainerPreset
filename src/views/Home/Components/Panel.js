import { defaultAnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import DragHandle from "./DragHandle";

// aka DroppableContainer

const animateLayoutChanges = (args) =>
  args.isSorting || args.wasDragging ? defaultAnimateLayoutChanges(args) : true;

export default function Panel({ panelIndex, panel, addData, children }) {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform,
  } = useSortable({
    id: panel.id,
    animateLayoutChanges,
  });
  const items = panel.panelItems.map((item) => item.id);
  const isOverContainer = over
    ? (panel.id === over.id && active?.data.current?.type !== "container") ||
      items.includes(over.id)
    : false;

  // console.log("panel: ", panel.id);

  return (
    <div
      className="panel"
      key={panelIndex}
      ref={setNodeRef}
      style={{
        transition,
        transform: transform,
        opacity: isDragging ? 0.5 : undefined,
        backgroundColor: isOverContainer && "rgb(235, 235, 235, 1)",
        "--translatePanel-x": transform
          ? `${Math.round(transform.x)}px`
          : undefined,
        "--translatePanel-y": transform
          ? `${Math.round(transform.y)}px`
          : undefined,
        "--scalePanel-x": transform?.scaleX ? `${transform.scaleX}` : undefined,
        "--scalePanel-y": transform?.scaleY ? `${transform.scaleY}` : undefined,
      }}
    >
      <div className="panel__title">
        <div className="panel__title--left">{panel.id}</div>
        <div className="panel__title--right">
          <span
            className="addItem"
            onClick={() => {
              addData(panelIndex);
            }}
          >
            +
          </span>
          <DragHandle
            {...listeners}
            {...attributes}
            className="cardWrapper__right--dragIcon"
          />
        </div>
      </div>
      <div className="panel__content">{children}</div>
    </div>
  );
}
