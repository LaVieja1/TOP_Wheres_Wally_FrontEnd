import './styles/InfoItems.css';
import { Icon } from '@iconify/react';

export default function InfoItems({
    items,
    type,
    divClass,
    itemClass,
    handleSelectItem,
    dropdownLeft,
    dropdownTop,
}) {
    return (
        <div
            id={type}
            className={type === 'items-to-find' ? divClass : null}
            style={type === 'dropdown' ? { left: dropdownLeft, top: dropdownTop } : null}
            tabIndex={0}
        >
            {items.map((item) => {
                return (
                    <div
                        key={item._id}
                        className={itemClass}
                        id={itemClass + item._id}
                        onClick={type === 'dropdown' ? () => handleSelectItem(item) : null}
                    >
                        <img
                            src={'http://localhost:3000/api/img/items/' + item._id}
                            alt=""
                            draggable={false}
                        />
                        <p>{item.name}</p>
                    </div>
                );
            })}
        </div>
    );
}