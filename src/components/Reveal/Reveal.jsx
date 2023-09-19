import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal({ children, delay, y = 75 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true})

  const mainControls = useAnimation()

  useEffect(()=>{
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} className={"relative"}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: delay}}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
