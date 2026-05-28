import DisplayPropertiesDialog from "./DisplayPropertiesDialog";
import IconPropertiesDialog from "./IconPropertiesDialog";

function DesktopPropertiesDialog({
  target,
  wallpaperId,
  wallpaperPosition,
  iconSizeId,
  onApplyDisplay,
  onClose,
}) {
  if (!target) return null;

  if (target.kind === "desktop") {
    return (
      <DisplayPropertiesDialog
        wallpaperId={wallpaperId}
        position={wallpaperPosition}
        iconSizeId={iconSizeId}
        onApply={onApplyDisplay}
        onClose={onClose}
      />
    );
  }

  return <IconPropertiesDialog target={target} onClose={onClose} />;
}

export default DesktopPropertiesDialog;
