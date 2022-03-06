import { AnimatePresence, motion } from 'framer-motion'
import useBoolean from '../../hooks/useBoolean'
import './index.css'

export default function Image({ altName, src }) {
   const [value, setValue] = useBoolean(true)
   return (
      <>
         <div className="img-wrapper">
            <img
               width="100%"
               alt={`Drink ${altName}`}
               loading="lazy"
               src={src}
               onLoad={setValue.off}
            />
         </div>
         {
            <AnimatePresence>
               {value && (
                  <motion.div
                     id="ab"
                     initial={{
                        opacity: 1,
                        translateY: 0
                     }}
                     transition={{
                        duration: 0.5
                     }}
                     exit={{
                        opacity: 0,
                        translateY: -100
                     }}
                  >
                     <div />
                  </motion.div>
               )}
            </AnimatePresence>
         }
      </>
   )
}
