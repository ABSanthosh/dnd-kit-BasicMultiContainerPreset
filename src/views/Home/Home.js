import "./Home.scss";
import { defaultBoards } from "../../Assets/defaultValues";
import { useState } from "react";
import shortid from "shortid";
import {
  defaultDropAnimation,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Panel from "./Components/Panel";
import Card from "./Components/Card";
import { createPortal } from "react-dom";

const selectedBoard = defaultBoards[0];
export default function Home() {
  const [boardData, setBoardData] = useState(selectedBoard);
  const [activeId, setActiveId] = useState(null);
  const [duplicateData, setDuplicateData] = useState(null);

  const addData = (index) => {
    const newBoard = boardData;
    newBoard.boardPanels[index].panelItems.push({
      content: "New board",
      lastModified: "",
      position: 1,
      id: shortid.generate(),
    });
    setBoardData((prev) => {
      return { ...prev, ...newBoard };
    });
  };

  const removeCard = (index, panelIndex) => {
    const newBoard = boardData;
    if (activeId === newBoard.boardPanels[panelIndex].panelItems[index].id) {
      setActiveId(null);
    }
    newBoard.boardPanels[panelIndex].panelItems.splice(index, 1);
    setBoardData((prev) => {
      return { ...prev, ...newBoard };
    });
  };

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      sortableKeyboardCoordinates,
    })
  );

  function findContainer(id) {
    const preResult = boardData.boardPanels.find((panel) => {
      return panel.panelItems.find((item) => {
        return item.id === id;
      });
    });

    if (preResult) {
      return preResult;
    } else {
      return boardData.boardPanels.find((panel) => {
        return panel.id === id;
      });
    }
  }

  const getIndex = (id) => {
    const panel = findContainer(id);
    return boardData.boardPanels.indexOf(panel);
  };

  function renderContainerDragOverlay(id) {
    const panel = boardData.boardPanels[getIndex(id)];
    return (
      <Panel key={panel.id} panelIndex={getIndex(id)} panel={panel}>
        {panel.panelItems.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            cardIndex={cardIndex}
            card={card}
            panelId={panel.id}
            panelIndex={getIndex(id)}
            removeCard={removeCard}
            getIndex={getIndex}
          />
        ))}
      </Panel>
    );
  }

  function renderSortableItemDragOverlay(id) {
    const cardParent = boardData.boardPanels.find((panel) => {
      return panel.panelItems.find((item) => {
        return item.id === id;
      });
    });
    const cardIndex = cardParent.panelItems.findIndex((item) => {
      return item.id === id;
    });
    const card = cardParent.panelItems[cardIndex];

    return (
      <Card
        cardIndex={cardIndex}
        card={card}
        removeCard={removeCard}
        getIndex={getIndex}
      />
    );
  }

  function isPanelId(id) {
    const result = boardData.boardPanels.find((panel) => {
      return panel.id === id;
    });
    return result ? true : false;
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActiveId(active.id);
        setDuplicateData(boardData);
      }}
      onDragOver={({ active, over }) => {
        const overId = over?.id;
        const activeId = active?.id;
        console.log(overId);
        if (
          !isPanelId(overId) &&
          !isPanelId(activeId) &&
          activeId !== overId &&
          !findContainer(activeId)
            .panelItems.map((items) => items.id)
            .includes(overId)
        ) {
        }
      }}
      onDragEnd={({ active, over }) => {
        const overId = over?.id;
        const activeId = active?.id;

        // Only for items sorting inside a panel
        if (
          findContainer(activeId) === findContainer(overId) &&
          !isPanelId(overId) &&
          !isPanelId(activeId)
        ) {
          setBoardData((prev) => {
            const activeContainer = findContainer(activeId);
            const activeItemIndex = activeContainer.panelItems.findIndex(
              (item) => {
                return item.id === active.id;
              }
            );

            const overItemIndex = activeContainer.panelItems.findIndex(
              (item) => {
                return item.id === over.id;
              }
            );

            prev.boardPanels[getIndex(activeContainer.id)].panelItems =
              arrayMove(
                prev.boardPanels[getIndex(activeContainer.id)].panelItems,
                activeItemIndex,
                overItemIndex
              );

            return {
              ...prev,
            };
          });
        }

        // only for items between panels
        if (
          !isPanelId(activeId) &&
          findContainer(overId) &&
          findContainer(activeId) &&
          findContainer(activeId) !== findContainer(overId)
        ) {
          setBoardData((prev) => {
            const activeContainer = findContainer(activeId);
            const overContainer = findContainer(overId);

            const activeIndex = activeContainer.panelItems.findIndex((item) => {
              return item.id === activeId;
            });

            const overIndex = overContainer.panelItems.findIndex((item) => {
              return item.id === overId;
            });

            let newIndex;

            if (isPanelId(overId)) {
              newIndex = overContainer.panelItems.length;
            } else {
              const isBelowOverItem =
                over &&
                active.rect.current.translated &&
                active.rect.current.translated.top >
                  over.rect.top + over.rect.height;

              const modifier = isBelowOverItem ? 1 : 0;

              newIndex =
                overIndex >= 0
                  ? overIndex + modifier
                  : overContainer.panelItems.length + 1;
            }

            const updatedOverPanelItems = [
              ...prev.boardPanels[getIndex(overContainer.id)].panelItems.slice(
                0,
                newIndex
              ),
              prev.boardPanels[getIndex(activeContainer.id)].panelItems[
                activeIndex
              ],
              ...prev.boardPanels[getIndex(overContainer.id)].panelItems.slice(
                newIndex,
                prev.boardPanels[getIndex(overContainer.id)].panelItems.length
              ),
            ];

            const updatedActivePanelItems = prev.boardPanels[
              getIndex(activeContainer.id)
            ].panelItems.filter((item) => item.id !== active.id);

            prev.boardPanels[getIndex(overContainer.id)].panelItems = [
              ...updatedOverPanelItems,
            ];

            prev.boardPanels[getIndex(activeContainer.id)].panelItems = [
              ...updatedActivePanelItems,
            ];

            return { ...prev };
          });
        }

        // Only for panels sorting
        if (isPanelId(activeId)) {
          setBoardData((prev) => {
            const activeContainer = findContainer(activeId);
            const overContainer = findContainer(overId);

            const activeContainerIndex = getIndex(activeContainer.id);
            const overContainerIndex = getIndex(overContainer.id);
            const updatedBoardPanels = arrayMove(
              prev.boardPanels,
              activeContainerIndex,
              overContainerIndex
            );
            return { ...prev, boardPanels: updatedBoardPanels };
          });
        }
      }}
      onDragCancel={onDragCancel}
    >
      <div className="App">
        <SortableContext
          items={[...boardData.boardPanels]}
          strategy={horizontalListSortingStrategy}
        >
          {boardData.boardPanels.map((panel, panelIndex) => (
            <Panel
              key={panelIndex}
              panelIndex={panelIndex}
              panel={panel}
              addData={addData}
            >
              <SortableContext
                items={[...panel.panelItems]}
                strategy={verticalListSortingStrategy}
              >
                {boardData.boardPanels[panelIndex].panelItems.map(
                  (card, cardIndex) => (
                    <Card
                      key={cardIndex}
                      cardIndex={cardIndex}
                      card={card}
                      panelId={panel.id}
                      panelIndex={panelIndex}
                      removeCard={removeCard}
                      getIndex={getIndex}
                    />
                  )
                )}
              </SortableContext>
            </Panel>
          ))}
        </SortableContext>
      </div>
      {createPortal(
        <DragOverlay
          adjustScale={false}
          dropAnimation={{
            ...defaultDropAnimation,
            dragSourceOpacity: 0.5,
          }}
        >
          {activeId
            ? boardData.boardPanels.map((item) => item.id).includes(activeId)
              ? renderContainerDragOverlay(activeId)
              : renderSortableItemDragOverlay(activeId)
            : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );

  function handleDragEnd({ active, over }) {
    const activeContainer = findContainer(active.id);

    if (!activeContainer) {
      setActiveId(null);
      return;
    }

    const overId = over?.id;

    if (!overId) {
      setActiveId(null);
      return;
    }

    const overContainer = findContainer(overId);

    if (overContainer) {
      const activeIndex = activeContainer.panelItems.findIndex((item) => {
        return item.id === active.id;
      });
      const overIndex = overContainer.panelItems.findIndex((item) => {
        return item.id === overId;
      });

      const draggedCard = activeContainer.panelItems.find((item) => {
        return item.id === activeId;
      });
      setBoardData((prev) => {
        const activeItems = prev.boardPanels.find((item) => {
          return item.id === activeContainer.id;
        });
        const overItems = prev.boardPanels.find((item) => {
          return item.id === overContainer.id;
        });

        activeItems.panelItems.splice(activeIndex, 1);
        overItems.panelItems.splice(overIndex, 0, draggedCard);

        return { ...prev };
      });
    }

    // if (activeIndex !== overIndex) {
    // }
    setActiveId(null);
  }

  function onDragCancel() {
    if (duplicateData) {
      setBoardData({ ...duplicateData });
    }
    setActiveId(null);
    setDuplicateData(null);
  }
}
