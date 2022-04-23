import { Rings } from  'react-loader-spinner'
import s from './Loader.module.css';


export default function Loader() {
   return (
      <div className={s.wrapper}>
         <Rings ariaLabel="loading-indicator" />
      </div>
   )
};
