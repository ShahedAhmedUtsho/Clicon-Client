import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Button = ({ className, variant, children, to,onClick, size = "normal", ...props }) => {
  const navigate = useNavigate();

  function buttonFn(e) {
    const button = e.currentTarget;
 

    const ripple = document.createElement('span');
    ripple.classList.add('anime');

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 1000);


    if (to) {
      navigate(to);
    }

    if(onClick) {
      onClick(e);
  }

 
  }


    const baseClasses = size === 'normal'
    ? "py-[1em] px-[1.5em]  md:text-[8px] lg:text-[0.88vw] text-[6px] xl:text-base"
    : size === 'long'
    ? "lg:py-[1em] lg:px-[1.5em] py-[1.4em] px-[1.5em]  md:text-[10px] lg:text-[0.88vw] text-[8px] xl:text-base"
    : "py-[0.8em] px-[1.3em] md:text-[8px] lg:text-[0.78vw] text-[6px] xl:text-sm";









  switch (variant) {
    case "outline":
      return (
        <button
          onClick={buttonFn}
          className={clsx(
            "anime-btn bg-transparent border border-current rounded-sm text-[#FA8232] flex gap-[0.75em] justify-center items-center font-medium uppercase tracking-wider",
            baseClasses,
            className
          )}
          {...props}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          onClick={buttonFn}
          className={clsx(
            "anime-btn bg-[#FA8232] rounded-sm text-white flex gap-[0.75em] justify-center items-center font-medium uppercase tracking-wider",
            baseClasses,
            className
          )}
          {...props}
        >
          {children}
        </button>
      );
  }
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['outline', 'default']),
  children: PropTypes.node,
  to: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'sm', 'long']),
  onClick: PropTypes.func,
};

export default Button;