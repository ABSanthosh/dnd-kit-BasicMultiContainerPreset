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
  const [dummyBoardData, setDummyBoardData] = useState(boardData);
  const [containers, setContainers] = useState(boardData.boardPanels);
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
    const preResult = selectedBoard.boardPanels.find((panel) => {
      return panel.panelItems.find((item) => {
        return item.id === id;
      });
    });

    if (preResult) {
      return preResult;
    } else {
      return selectedBoard.boardPanels.find((panel) => {
        return panel.id === id;
      });
    }
  }

  const getIndex = (id) => {
    const panel = findContainer(id);
    return selectedBoard.boardPanels.indexOf(panel);
  };

  function renderContainerDragOverlay(id) {
    const panel = selectedBoard.boardPanels[getIndex(id)];
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
    const cardParent = selectedBoard.boardPanels.find((panel) => {
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
    const result = selectedBoard.boardPanels.find((panel) => {
      return panel.id === id;
    });
    return result ? true : false;
  }

  function handleDragOver({ active, over }) {
    // console.log(over?.id);
    const overId = over?.id;

    if (!over?.id) {
      return;
    }
    // console.log(overId);

    // Find the containers
    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setBoardData((prev) => {
        // console.log("prev");
        const activeItems = boardData.boardPanels.find((panel) => {
          return panel.id === activeContainer.id;
        });

        const overItems = boardData.boardPanels.find((panel) => {
          return panel.id === overContainer.id;
        });

        const activeIndex = activeItems.panelItems.findIndex((item) => {
          return item.id === active.id;
        });
        const overIndex = overItems.panelItems.findIndex((item) => {
          return item.id === over.id;
        });

        let newIndex;

        if (isPanelId(over.id)) {
          newIndex = overItems.panelItems.length + 1;
        } else {
          const isBelowOverItem =
            over &&
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height;

          const modifier = isBelowOverItem ? 1 : 0;

          newIndex =
            overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
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

        // console.log(updatedActivePanelItems, updatedOverPanelItems);

        prev.boardPanels[getIndex(overContainer.id)].panelItems =
          updatedOverPanelItems;
        prev.boardPanels[getIndex(activeContainer.id)].panelItems =
          updatedActivePanelItems;

        // setDummyBoardData({ ...prev });
        return { ...prev };
      });
    }
  }

  return (
    <>
      <pre
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          borderRadius: "6px",
          backgroundColor: "white",
          padding: "10px",
          fontFamily: "code",
          maxHeight: "100vh",
          overflowY: "scroll",
          minWidth: "300px",
          zIndex: "9999",
        }}
      >
        {JSON.stringify(dummyBoardData.boardPanels, null, 2)}
      </pre>
      <DndContext
        sensors={sensors}
        onDragStart={({ active }) => {
          setActiveId(active.id);
          setDuplicateData(boardData);
        }}
        onDragOver={({ active, over }) => {
          handleDragOver({ active, over });
        }}
        onDragEnd={handleDragEnd}
        onDragCancel={onDragCancel}
      >
        <div className="App">
          <SortableContext
            items={[...containers]}
            strategy={horizontalListSortingStrategy}
          >
            {containers.map((panel, panelIndex) => (
              <Panel
                key={panelIndex}
                panelIndex={panelIndex}
                panel={panel}
                addData={addData}
              >
                <SortableContext
                  items={[...boardData.boardPanels[panelIndex].panelItems]}
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
              ? selectedBoard.boardPanels
                  .map((item) => item.id)
                  .includes(activeId)
                ? renderContainerDragOverlay(activeId)
                : renderSortableItemDragOverlay(activeId)
              : null}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </>
  );

  function handleDragEnd({ active, over }) {
    if (active.id in containers.map((item) => item.id) && over?.id) {
      setContainers((prev) => {
        const activeIndex = prev.findIndex((item) => item.id === active.id);
        const overIndex = prev.findIndex((item) => item.id === over.id);

        const updatedContainers = [
          ...prev.slice(0, overIndex),
          prev[activeIndex],
          ...prev.slice(overIndex, activeIndex),
          prev[activeIndex],
          ...prev.slice(activeIndex + 1),
        ];

        return updatedContainers;
      });
    }

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
      setDummyBoardData({ ...duplicateData });
    }
    setActiveId(null);
    setDuplicateData(null);
  }
}
