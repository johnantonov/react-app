import { FunctionComponent } from "react";

interface PromotionInfo {
  children: string;
  color: string;
  textColor: string;
  className?: string;
}

export const PromotionBadge: FunctionComponent<PromotionInfo> = (
  {children, color, className, textColor}
) => {
  return (
    <div 
      style={{
        background: color,
        color: textColor,
        fontSize: 'clamp(11px, 4vw, 19px)',
        fontWeight: 400,
        lineHeight: '147.368%',
        textAlign: "center",
        padding: '10px 15px'  
      }}
      className={className}
    >
      { children }
    </div>
  )
};