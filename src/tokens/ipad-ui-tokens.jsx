export const ipadTokens = {
  widget: {
    small: { w: 140, h: 140, br: 20 },
    medium: { w: 300, h: 140, br: 20 },
    large: { w: 300, h: 300, br: 20 },
  },
  icon: {
    app: { w: 60, h: 60, br: 14 },
    spot: { w: 30, h: 30, br: 7 },
  },
  spacing: {
    uniGap: 20,
  },
};

export const Сontainer = ({ className, w, h, br, style: extraStyle, children }) => {
  return (
    <div className={className}
      style={{
        width: w + "px",
        height: h + "px",
        borderRadius: br + "px",
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
