import React from 'react';
import clsx from 'clsx';

// Generic Typography Component
const Typography = ({ className, children, as: Component = 'span', ...props }) => {
  return (
    <Component className={clsx(className)} {...props}>
      {children}
    </Component>
  );
};


// Display Components
export const Display01 = ({ children, className, ...props  }) => (
  <Typography  className={clsx("text-[32px] leading-[1.25] md:text-[48px] md:leading-[1.25] lg:text-[64px] lg:leading-[1.125] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const Display02 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[28px] leading-[1.25] md:text-[42px] md:leading-[1.25] lg:text-[56px] lg:leading-[1.14286] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const Display03 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[24px] leading-[1.25] md:text-[36px] md:leading-[1.25] lg:text-[48px] lg:leading-[1.16667] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const Display04 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[20px] leading-[1.25] md:text-[30px] md:leading-[1.25] lg:text-[40px] lg:leading-[1.2] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const Display05 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-[36px] lg:leading-[1.22222] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

// Heading Components
export const Heading01 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[24px] leading-[1.25] md:text-[36px] md:leading-[1.25] lg:text-[32px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const Heading02 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[22px] leading-[1.25] md:text-[33px] md:leading-[1.25] lg:text-[28px] lg:leading-[1.14286] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const Heading03 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[20px] leading-[1.25] md:text-[30px] md:leading-[1.25] lg:text-[24px] lg:leading-[1.33333] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const Heading04 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-bold", className)} {...props}>
    {children}
  </Typography>
);

export const Heading05 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-[14px] lg:leading-[1.25] font-bold", className)} {...props}>
    {children}
  </Typography>
);

// Body Components
export const BodyXXL400 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[20px] leading-[1.25] md:text-[30px] md:leading-[1.25] lg:text-[24px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
);

export const BodyXL400 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-xl lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
);

export const BodyXL500 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-xl lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const BodyXL600 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-xl lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const BodyLarge400 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-lg lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
);

export const BodyLarge500 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-lg lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const BodyLarge600 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-lg lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const BodyMedium400 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
);

export const BodyMedium500 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const BodyMedium600 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const BodySmall400 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-sm lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
);

export const BodySmall500 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-sm lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const BodySmall600 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-sm lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const BodyTiny400 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
);

export const BodyTiny500 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const BodyTiny600 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

export const BodyXS400 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
);

export const BodyXS500 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25]", className)} {...props}>
    {children}
  </Typography>
);

export const BodyXS600 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
);

// Label Components
export const Label01 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[18px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const Label02 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const Label03 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[14px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const Label04 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

export const Label05 = ({ children, className, ...props }) => (
  <Typography className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
);

// Default export
export default {
  Display01,
  Display02,
  Display03,
  Display04,
  Display05,
  Heading01,
  Heading02,
  Heading03,
  Heading04,
  Heading05,
  BodyXXL400,
  BodyXL400,
  BodyXL500,
  BodyXL600,
  BodyLarge400,
  BodyLarge500,
  BodyLarge600,
  BodyMedium400,
  BodyMedium500,
  BodyMedium600,
  BodySmall400,
  BodySmall500,
  BodySmall600,
  BodyTiny400,
  BodyTiny500,
  BodyTiny600,
  BodyXS400,
  BodyXS500,
  BodyXS600,
  Label01,
  Label02,
  Label03,
  Label04,
  Label05,
};