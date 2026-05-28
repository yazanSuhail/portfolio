import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ContextMenuRoot,
  ContextMenuItem,
  ItemCheck,
  ItemArrow,
  MenuSeparator,
  SubmenuFlyout,
  SubmenuRow,
} from "./styles";

function MenuItemRow({
  item,
  checkedIds,
  onAction,
  onClose,
  onHoverSubmenu,
  activeSubmenuId,
}) {
  if (item.type === "separator") {
    return <MenuSeparator />;
  }

  const hasSubmenu = Boolean(item.submenu?.length);
  const isChecked = item.checkable && checkedIds?.has(item.id);
  const isDisabled = Boolean(item.disabled);
  const isSubmenuOpen = activeSubmenuId === item.id;

  const handleClick = () => {
    if (isDisabled || hasSubmenu) return;
    onAction(item.id);
    onClose();
  };

  return (
    <SubmenuRow
      onMouseEnter={() => {
        if (hasSubmenu) onHoverSubmenu(item.id);
        else onHoverSubmenu(null);
      }}
    >
      <ContextMenuItem
        type="button"
        $disabled={isDisabled}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {item.checkable && <ItemCheck>{isChecked ? "✓" : ""}</ItemCheck>}
        {item.label}
        {hasSubmenu && <ItemArrow>▶</ItemArrow>}
      </ContextMenuItem>
      {hasSubmenu && isSubmenuOpen && (
        <SubmenuFlyout>
          {item.submenu.map((sub, index) =>
            sub.type === "separator" ? (
              <MenuSeparator key={`sep-${item.id}-${index}`} />
            ) : (
              <MenuItemRow
                key={sub.id}
                item={sub}
                checkedIds={checkedIds}
                onAction={onAction}
                onClose={onClose}
                onHoverSubmenu={() => {}}
                activeSubmenuId={null}
              />
            )
          )}
        </SubmenuFlyout>
      )}
    </SubmenuRow>
  );
}

function DesktopContextMenu({ menu, position, checkedIds, onAction, onClose }) {
  const menuRef = useRef(null);
  const [activeSubmenuId, setActiveSubmenuId] = useState(null);
  const [adjustedPosition, setAdjustedPosition] = useState(position);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    const rect = menuEl.getBoundingClientRect();
    const padding = 8;
    let { x, y } = position;

    if (x + rect.width > window.innerWidth - padding) {
      x = window.innerWidth - rect.width - padding;
    }
    if (y + rect.height > window.innerHeight - 30 - padding) {
      y = window.innerHeight - 30 - rect.height - padding;
    }

    setAdjustedPosition({ x: Math.max(padding, x), y: Math.max(padding, y) });
  }, [position, menu]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (menuRef.current?.contains(event.target)) return;
      onClose();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const handleScroll = () => onClose();

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [onClose]);

  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
  }, []);

  return createPortal(
    <ContextMenuRoot
      ref={menuRef}
      style={{ left: adjustedPosition.x, top: adjustedPosition.y }}
      onContextMenu={handleContextMenu}
      role="menu"
    >
      {menu.map((item) =>
        item.type === "separator" ? (
          <MenuSeparator key={`sep-${item.id ?? item.label}`} />
        ) : (
          <MenuItemRow
            key={item.id}
            item={item}
            checkedIds={checkedIds}
            onAction={onAction}
            onClose={onClose}
            onHoverSubmenu={setActiveSubmenuId}
            activeSubmenuId={activeSubmenuId}
          />
        )
      )}
    </ContextMenuRoot>,
    document.body
  );
}

export default DesktopContextMenu;
