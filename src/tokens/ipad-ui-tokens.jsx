export const ipadTokens = {
  widget: {
    small: { w: 170, h: 170, br: 20 },
    medium: { w: 364, h: 170, br: 20 },
    large: { w: 364, h: 364, br: 20 },
  },
  icon: {
    app: { w: 76, h: 76, br: 16 },
    spot: { w: 40, h: 40, br: 8 },
  },
  spacing: {
    widgetGap: 24,
    iconGap: 16,
    dockPadding: 20,
  },
};

export const Сontainer = ({ w, h, br, style: extraStyle, children }) => {
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: br,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        backgroundColor: "var(--white)",
        overflow: "clip",
        overflowClipMargin: "content-box",
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
};
