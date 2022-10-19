import { toast } from "react-toastify";
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Notify = {
  default: (message,direction='') => {
      switch(direction){
        case 'top-left':
              toast(message, { 
                  position: toast.POSITION.TOP_LEFT,
                  className:'toast-container',
                  bodyClassName:'title'
                });
              break;
        case 'top-right':
            toast(message, { 
                position: toast.POSITION.TOP_RIGHT,
                className: 'deafult-toast-container',
                bodyClassName: 'title'
            });
            break;
        case 'top-center':
            toast(message, { 
                position: toast.POSITION.TOP_CENTER,
                className: 'deafult-toast-container',
                bodyClassName: 'title'
            });
            break;
        case 'bottom-left':
            toast(message, { 
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'deafult-toast-container',
                bodyClassName: 'title'
            });
            break;
        case 'bottom-right':
            toast(message, { 
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'deafult-toast-container',
                bodyClassName: 'title'
            });
            break;
        case 'bottom-center':
            toast(message, { 
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'deafult-toast-container',
                bodyClassName: 'title'
            });
            break;
        default:
              toast(message,{
                  className: 'deafult-toast-container',
                  bodyClassName: 'title'
              });
      }
        
  },
    success: (message, direction = '') => {
        switch (direction) {
            case 'top-left':
                toast.success(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaCheckCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    
                    className:'success-toast-container',
                    bodyClassName: 'title',
                    position: toast.POSITION.TOP_LEFT,
                });
                break;
            case 'top-right':
                toast.success(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaCheckCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'success-toast-container',
                    bodyClassName: 'title',
                    position: toast.POSITION.TOP_RIGHT,
                });
                break;
            case 'top-center':
                toast.success(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaCheckCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'success-toast-container',
                    bodyClassName: 'title', 
                    position: toast.POSITION.TOP_CENTER 
                });
                break;
            case 'bottom-left':
                toast.success(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaCheckCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'success-toast-container',
                    bodyClassName: 'title', 
                    position: toast.POSITION.BOTTOM_LEFT 
                });
                break;
            case 'bottom-right':
                toast.success(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaCheckCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'success-toast-container',
                    bodyClassName: 'title', 
                    position: toast.POSITION.BOTTOM_RIGHT 
                });
                break;
            case 'bottom-center':
                toast.success(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaCheckCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'success-toast-container',
                    bodyClassName: 'title', 
                    position: toast.POSITION.BOTTOM_CENTER 
                });
                break;
            default:
                toast.success(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaCheckCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'success-toast-container',
                    bodyClassName: 'title',
                });
        }
  },
    error: (message, direction = '') => {
        switch (direction) {
            case 'top-left':
                toast.error(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaTimesCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'error-toast-container',
                    bodyClassName: 'title', 
                    position: toast.POSITION.TOP_LEFT 
                });
                break;
            case 'top-right':
                toast.error(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaTimesCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'error-toast-container',
                    bodyClassName: 'title',  position: toast.POSITION.TOP_RIGHT });
                break;
            case 'top-center':
                toast.error(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaTimesCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'error-toast-container',
                    bodyClassName: 'title',  position: toast.POSITION.TOP_CENTER });
                break;
            case 'bottom-left':
                toast.error(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaTimesCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'error-toast-container',
                    bodyClassName: 'title',  position: toast.POSITION.BOTTOM_LEFT });
                break;
            case 'bottom-right':
                toast.error(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaTimesCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'error-toast-container',
                    bodyClassName: 'title',  position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case 'bottom-center':
                toast.error(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaTimesCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'error-toast-container',
                    bodyClassName: 'title',  position: toast.POSITION.BOTTOM_CENTER });
                break;
            default:
                toast.error(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                            <FaIcons.FaTimesCircle />
                                        </IconContext.Provider> {message}</span></div>, {
                    className: 'error-toast-container',
                    bodyClassName: 'title', 
                });
        }
  },
    info: (message, direction = '') => {
        switch (direction) {
            case 'top-left':
                toast.info(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                        <FaIcons.FaInfoCircle />
                                    </IconContext.Provider> {message}</span></div>, {
                    className: 'info-toast-container',
                    bodyClassName: 'title',  position: toast.POSITION.TOP_LEFT });
                break;
            case 'top-right':
                toast.info(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                        <FaIcons.FaInfoCircle />
                                    </IconContext.Provider> {message}</span></div>, {
                    className: 'info-toast-container',
                    bodyClassName: 'title', position: toast.POSITION.TOP_RIGHT });
                break;
            case 'top-center':
                toast.info(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                        <FaIcons.FaInfoCircle />
                                    </IconContext.Provider> {message}</span></div>, {
                    className: 'info-toast-container',
                    bodyClassName: 'title', position: toast.POSITION.TOP_CENTER });
                break;
            case 'bottom-left':
                toast.info(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                        <FaIcons.FaInfoCircle />
                                    </IconContext.Provider> {message}</span></div>, {
                    className: 'info-toast-container',
                    bodyClassName: 'title', position: toast.POSITION.BOTTOM_LEFT });
                break;
            case 'bottom-right':
                toast.info(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                        <FaIcons.FaInfoCircle />
                                    </IconContext.Provider> {message}</span></div>, {
                    className: 'info-toast-container',
                    bodyClassName: 'title', position: toast.POSITION.BOTTOM_RIGHT });
                break;
            case 'bottom-center':
                toast.info(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                        <FaIcons.FaInfoCircle />
                                    </IconContext.Provider> {message}</span></div>, {
                    className: 'info-toast-container',
                    bodyClassName: 'title', position: toast.POSITION.BOTTOM_CENTER });
                break;
            default:
                toast.info(<div><span><IconContext.Provider value={{ className: "notify-icons" }}>
                                        <FaIcons.FaInfoCircle />
                                    </IconContext.Provider> {message}</span></div>, {
                    className: 'info-toast-container',
                    bodyClassName: 'title',});
        }
  },
};

export default Notify;
