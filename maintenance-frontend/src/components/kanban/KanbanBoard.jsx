// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
// import { useSidebar } from '../../context/SidebarContext';
// import { MAINTENANCE_STATUSES } from '../../utils/constants';
// import Badge from '../../components/ui/Badge';

// const KanbanCard = ({ card, index, status }) => {
//   const getPriorityIcon = (priority) => {
//     const icons = {
//       High: '🔴',
//       Medium: '🟡',
//       Low: '🟢',
//     };
//     return icons[priority] || '⚪';
//   };

//   return (
//     <Draggable draggableId={`card-${card.id}`} index={index}>
//       {(provided, snapshot) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className={`bg-white rounded-lg p-4 mb-3 border-l-4 shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing ${
//             status === MAINTENANCE_STATUSES.NEW
//               ? 'border-l-blue-500'
//               : status === MAINTENANCE_STATUSES.IN_PROGRESS
//               ? 'border-l-amber-500'
//               : status === MAINTENANCE_STATUSES.REPAIRED
//               ? 'border-l-green-500'
//               : 'border-l-red-500'
//           } ${snapshot.isDragging ? 'shadow-lg scale-105' : ''}`}
//         >
//           <div className="flex items-start justify-between mb-2">
//             <h4 className="font-semibold text-slate-900 text-sm">{card.equipment}</h4>
//             <span className="text-lg">{getPriorityIcon(card.priority)}</span>
//           </div>
//           <p className="text-xs text-slate-600 mb-3">{card.description}</p>
//           <div className="flex items-center justify-between">
//             <Badge variant="default">{card.type}</Badge>
//             <span className="text-xs text-slate-500">{card.assignedTo}</span>
//           </div>
//         </div>
//       )}
//     </Draggable>
//   );
// };

// const KanbanColumn = ({ status, cards }) => {
//   const statusConfig = {
//     [MAINTENANCE_STATUSES.NEW]: { title: 'New Requests', color: 'bg-blue-50', border: 'border-blue-200' },
//     [MAINTENANCE_STATUSES.IN_PROGRESS]: { title: 'In Progress', color: 'bg-amber-50', border: 'border-amber-200' },
//     [MAINTENANCE_STATUSES.REPAIRED]: { title: 'Repaired', color: 'bg-green-50', border: 'border-green-200' },
//     [MAINTENANCE_STATUSES.SCRAP]: { title: 'Scrap', color: 'bg-red-50', border: 'border-red-200' },
//   };

//   const config = statusConfig[status];

//   return (
//     <div className={`flex-shrink-0 w-80 rounded-xl border-2 p-4 ${config.color} ${config.border}`}>
//       <div className="mb-4">
//         <h3 className="font-semibold text-slate-900">{config.title}</h3>
//         <p className="text-xs text-slate-600 mt-1">{cards.length} items</p>
//       </div>

//       <Droppable droppableId={status}>
//         {(provided, snapshot) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             className={`min-h-96 transition-colors ${snapshot.isDraggingOver ? 'bg-white/50' : ''}`}
//           >
//             {cards.map((card, index) => (
//               <KanbanCard key={card.id} card={card} index={index} status={status} />
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </div>
//   );
// };

// const KanbanBoard = () => {
//   const { isSidebarOpen } = useSidebar();
//   const [cards, setCards] = React.useState({
//     [MAINTENANCE_STATUSES.NEW]: [
//       { id: 1, equipment: 'Pump A-01', type: 'Corrective', priority: 'High', description: 'Bearing noise detected', assignedTo: 'John Smith' },
//       { id: 2, equipment: 'Valve V-04', type: 'Preventive', priority: 'High', description: 'Scheduled maintenance', assignedTo: 'Emily Brown' },
//     ],
//     [MAINTENANCE_STATUSES.IN_PROGRESS]: [
//       { id: 3, equipment: 'Motor B-02', type: 'Preventive', priority: 'Medium', description: 'Oil change and inspection', assignedTo: 'Sarah Johnson' },
//       { id: 5, equipment: 'Bearing B-05', type: 'Corrective', priority: 'Medium', description: 'Replacement needed', assignedTo: 'John Smith' },
//     ],
//     [MAINTENANCE_STATUSES.REPAIRED]: [
//       { id: 4, equipment: 'Compressor C-03', type: 'Corrective', priority: 'Low', description: 'Seal replacement completed', assignedTo: 'Mike Davis' },
//     ],
//     [MAINTENANCE_STATUSES.SCRAP]: [],
//   });

//   const onDragEnd = (result) => {
//     const { source, destination, draggableId } = result;

//     if (!destination) return;

//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     ) {
//       return;
//     }

//     const sourceStatus = source.droppableId;
//     const destStatus = destination.droppableId;
//     const cardId = parseInt(draggableId.split('-')[1]);

//     setCards((prevCards) => {
//       const sourceCards = [...prevCards[sourceStatus]];
//       const [movedCard] = sourceCards.splice(source.index, 1);

//       const destCards = [...prevCards[destStatus]];
//       destCards.splice(destination.index, 0, movedCard);

//       return {
//         ...prevCards,
//         [sourceStatus]: sourceCards,
//         [destStatus]: destCards,
//       };
//     });
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className={`min-h-screen bg-slate-50 pt-20 pb-8 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
//         <div className="px-4 md:px-8 space-y-6">
//           {/* Header */}
//           <div>
//             <h1 className="text-3xl font-bold text-slate-900">Maintenance Kanban</h1>
//             <p className="text-slate-600 mt-1">Drag cards to update maintenance request status</p>
//           </div>

//           {/* Kanban Board */}
//           <div className="overflow-x-auto pb-4">
//             <div className="flex gap-4 min-w-max">
//               {Object.values(MAINTENANCE_STATUSES).map((status) => (
//                 <KanbanColumn
//                   key={status}
//                   status={status}
//                   cards={cards[status]}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </DragDropContext>
//   );
// };

// export default KanbanBoard;



import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useSidebar } from '../../context/SidebarContext';
import { MAINTENANCE_STATUSES } from '../../utils/constants';
import Badge from '../../components/ui/Badge';
import { maintenanceAPI } from '../../api/maintenance.api';

const KanbanCard = ({ card, index, status }) => {
  const getPriorityIcon = (priority) => {
    const icons = {
      High: '🔴',
      Medium: '🟡',
      Low: '🟢',
      Critical: '🔴',
    };
    return icons[priority] || '⚪';
  };

  return (
    <Draggable draggableId={`card-${card._id || card.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white rounded-lg p-4 mb-3 border-l-4
          shadow-sm hover:shadow-md transition-all cursor-grab
          active:cursor-grabbing
          ${
            status === MAINTENANCE_STATUSES.NEW
              ? 'border-l-orange-500'
              : status === MAINTENANCE_STATUSES.IN_PROGRESS
              ? 'border-l-amber-500'
              : status === MAINTENANCE_STATUSES.REPAIRED
              ? 'border-l-green-500'
              : 'border-l-red-500'
          }
          ${snapshot.isDragging ? 'shadow-lg scale-105' : ''}`}
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-slate-900 text-sm">
              {card.equipment?.name || card.equipment || card.subject || 'N/A'}
            </h4>
            <span className="text-lg">{getPriorityIcon(card.priority)}</span>
          </div>

          <p className="text-xs text-slate-600 mb-3">
            {card.description || card.subject || 'No description'}
          </p>

          <div className="flex items-center justify-between">
            <Badge variant="default">{card.type || 'N/A'}</Badge>
            <span className="text-xs text-slate-500">
              {card.assignedTechnician?.name || card.assignedTechnician || 'Unassigned'}
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

const KanbanColumn = ({ status, cards }) => {
  const statusConfig = {
    [MAINTENANCE_STATUSES.NEW]: {
      title: 'New Requests',
      color: 'bg-orange-50',
      border: 'border-orange-200',
    },
    [MAINTENANCE_STATUSES.IN_PROGRESS]: {
      title: 'In Progress',
      color: 'bg-amber-50',
      border: 'border-amber-200',
    },
    [MAINTENANCE_STATUSES.REPAIRED]: {
      title: 'Repaired',
      color: 'bg-green-50',
      border: 'border-green-200',
    },
    [MAINTENANCE_STATUSES.SCRAP]: {
      title: 'Scrap',
      color: 'bg-red-50',
      border: 'border-red-200',
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`flex-shrink-0 w-80 rounded-xl border-2 p-4
      ${config.color} ${config.border}`}
    >
      <div className="mb-4">
        <h3 className="font-semibold text-slate-900">
          {config.title}
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          {cards.length} items
        </p>
      </div>

      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-96 transition-colors
            ${snapshot.isDraggingOver ? 'bg-white/60' : ''}`}
          >
            {cards.map((card, index) => (
              <KanbanCard
                key={card._id || card.id || `card-${index}`}
                card={card}
                index={index}
                status={status}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

const KanbanBoard = () => {
  const { isSidebarOpen } = useSidebar();
  const [cards, setCards] = useState({
    [MAINTENANCE_STATUSES.NEW]: [],
    [MAINTENANCE_STATUSES.IN_PROGRESS]: [],
    [MAINTENANCE_STATUSES.REPAIRED]: [],
    [MAINTENANCE_STATUSES.SCRAP]: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setIsLoading(true);
        const response = await maintenanceAPI.getAll();
        // Backend returns array directly
        const requests = Array.isArray(response) ? response : (response.requests || response.data || []);
        
        // Group requests by status
        const grouped = {
          [MAINTENANCE_STATUSES.NEW]: [],
          [MAINTENANCE_STATUSES.IN_PROGRESS]: [],
          [MAINTENANCE_STATUSES.REPAIRED]: [],
          [MAINTENANCE_STATUSES.SCRAP]: [],
        };

        requests.forEach((req) => {
          const status = req.status || MAINTENANCE_STATUSES.NEW;
          if (grouped[status]) {
            grouped[status].push(req);
          } else {
            grouped[MAINTENANCE_STATUSES.NEW].push(req);
          }
        });

        setCards(grouped);
      } catch (error) {
        console.error('Error fetching maintenance requests:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;

    const cardId = draggableId.replace('card-', '');
    const newStatus = destination.droppableId;

    // Optimistically update UI
    setCards((prev) => {
      const sourceCards = [...prev[source.droppableId]];
      const [moved] = sourceCards.splice(source.index, 1);
      const destCards = [...prev[destination.droppableId]];
      destCards.splice(destination.index, 0, moved);

      return {
        ...prev,
        [source.droppableId]: sourceCards,
        [destination.droppableId]: destCards,
      };
    });

    // Update status on backend
    try {
      await maintenanceAPI.updateStatus(cardId, newStatus);
    } catch (error) {
      console.error('Error updating status:', error);
      // Revert on error - reload data
      maintenanceAPI.getAll().then(response => {
        const requests = Array.isArray(response) ? response : (response.requests || response.data || []);
        const grouped = {
          [MAINTENANCE_STATUSES.NEW]: [],
          [MAINTENANCE_STATUSES.IN_PROGRESS]: [],
          [MAINTENANCE_STATUSES.REPAIRED]: [],
          [MAINTENANCE_STATUSES.SCRAP]: [],
        };
        requests.forEach((req) => {
          const status = req.status || MAINTENANCE_STATUSES.NEW;
          if (grouped[status]) {
            grouped[status].push(req);
          }
        });
        setCards(grouped);
      }).catch(err => {
        console.error('Error reloading data:', err);
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        className={`min-h-screen bg-[#FAFAFA] pt-20 pb-8 transition-all duration-300
        ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}
      >
        <div className="px-4 md:px-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Maintenance Kanban
            </h1>
            <p className="text-slate-600 mt-1">
              Drag cards to update maintenance request status
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {Object.values(MAINTENANCE_STATUSES).map((status) => (
                <KanbanColumn
                  key={status}
                  status={status}
                  cards={cards[status]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
