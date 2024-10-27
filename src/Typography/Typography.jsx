import  { forwardRef } from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

// Generic Typography Component
const Typography = forwardRef(({ className, children, as: Component = 'span', ...props }, ref) => {
  return (
    <Component ref={ref} className={clsx(className)} {...props}>
      {children}
    </Component>
  );
});
Typography.displayName = 'Typography';

// Display Components
export const Display01 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[32px] leading-[1.25] md:text-[48px] md:leading-[1.25] lg:text-[64px] lg:leading-[1.125] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Display01.displayName = 'Display01';

export const Display02 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[28px] leading-[1.25] md:text-[42px] md:leading-[1.25] lg:text-[56px] lg:leading-[1.14286] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Display02.displayName = 'Display02';

export const Display03 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[24px] leading-[1.25] md:text-[36px] md:leading-[1.25] lg:text-[48px] lg:leading-[1.16667] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Display03.displayName = 'Display03';

export const Display04 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[20px] leading-[1.25] md:text-[30px] md:leading-[1.25] lg:text-[40px] lg:leading-[1.2] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Display04.displayName = 'Display04';

export const Display05 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-[36px] lg:leading-[1.22222] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Display05.displayName = 'Display05';

// Heading Components
export const Heading01 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[24px] leading-[1.25] md:text-[36px] md:leading-[1.25] lg:text-[32px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Heading01.displayName = 'Heading01';

export const Heading02 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[22px] leading-[1.25] md:text-[33px] md:leading-[1.25] lg:text-[28px] lg:leading-[1.14286] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Heading02.displayName = 'Heading02';

export const Heading03 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[20px] leading-[1.25] md:text-[30px] md:leading-[1.25] lg:text-[24px] lg:leading-[1.33333] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
Heading03.displayName = 'Heading03';

export const Heading04 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-bold", className)} {...props}>
    {children}
  </Typography>
));
Heading04.displayName = 'Heading04';

export const Heading05 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-[14px] lg:leading-[1.25] font-bold", className)} {...props}>
    {children}
  </Typography>
));
Heading05.displayName = 'Heading05';

// Body Components
export const BodyXXL400 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[20px] leading-[1.25] md:text-[30px] md:leading-[1.25] lg:text-[24px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
));
BodyXXL400.displayName = 'BodyXXL400';

export const BodyXL400 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-xl lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
));
BodyXL400.displayName = 'BodyXL400';

export const BodyXL500 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-xl lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
BodyXL500.displayName = 'BodyXL500';

export const BodyXL600 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[18px] leading-[1.25] md:text-[27px] md:leading-[1.25] lg:text-xl lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
BodyXL600.displayName = 'BodyXL600';

export const BodyLarge400 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-lg lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
));
BodyLarge400.displayName = 'BodyLarge400';

export const BodyLarge500 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-lg lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
BodyLarge500.displayName = 'BodyLarge500';

export const BodyLarge600 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[16px] leading-[1.25] md:text-[24px] md:leading-[1.25] lg:text-lg lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
BodyLarge600.displayName = 'BodyLarge600';

export const BodyMedium400 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
));
BodyMedium400.displayName = 'BodyMedium400';

export const BodyMedium500 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
BodyMedium500.displayName = 'BodyMedium500';

export const BodyMedium600 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
BodyMedium600.displayName = 'BodyMedium600';

export const BodySmall400 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-sm lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
));
BodySmall400.displayName = 'BodySmall400';

export const BodySmall500 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-sm lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
BodySmall500.displayName = 'BodySmall500';

export const BodySmall600 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-sm lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
BodySmall600.displayName = 'BodySmall600';

export const BodyTiny400 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
));
BodyTiny400.displayName = 'BodyTiny400';

export const BodyTiny500 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
BodyTiny500.displayName = 'BodyTiny500';

export const BodyTiny600 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
BodyTiny600.displayName = 'BodyTiny600';

export const BodyXS400 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25] font-normal", className)} {...props}>
    {children}
  </Typography>
));
BodyXS400.displayName = 'BodyXS400';

export const BodyXS500 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25]", className)} {...props}>
    {children}
  </Typography>
));
BodyXS500.displayName = 'BodyXS500';

export const BodyXS600 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25] font-semibold", className)} {...props}>
    {children}
  </Typography>
));
BodyXS600.displayName = 'BodyXS600';

// Label Components
export const Label01 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[14px] leading-[1.25] md:text-[21px] md:leading-[1.25] lg:text-[18px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
Label01.displayName = 'Label01';

export const Label02 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[12px] leading-[1.25] md:text-[18px] md:leading-[1.25] lg:text-[16px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
Label02.displayName = 'Label02';

export const Label03 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[10px] leading-[1.25] md:text-[15px] md:leading-[1.25] lg:text-[14px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
Label03.displayName = 'Label03';

export const Label04 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[12px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
Label04.displayName = 'Label04';

export const Label05 = forwardRef(({ children, className, ...props }, ref) => (
  <Typography ref={ref} className={clsx("text-[8px] leading-[1.25] md:text-[12px] md:leading-[1.25] lg:text-[11px] lg:leading-[1.25] font-medium", className)} {...props}>
    {children}
  </Typography>
));
Label05.displayName = 'Label05';

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





// PropTypes for Typography Component
Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
};

// PropTypes for Display Components
Display01.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Display02.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Display03.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Display04.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Display05.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// PropTypes for Heading Components
Heading01.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading02.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading03.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading04.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading05.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// PropTypes for Body Components
BodyXXL400.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyXL400.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyXL500.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyXL600.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyLarge400.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyLarge500.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyLarge600.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyMedium400.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyMedium500.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyMedium600.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodySmall400.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodySmall500.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodySmall600.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyTiny400.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyTiny500.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyTiny600.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyXS400.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyXS500.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

BodyXS600.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// PropTypes for Label Components
Label01.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Label02.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Label03.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Label04.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Label05.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};