import React from 'react';
import { motion } from "framer-motion";

const ResumeTemplateStar = () => {
    return ( <motion.div className="svgTwo"
    initial={{ rotateZ: 0 }}
    animate={{ rotateZ: 360 }}
    transition={{
        duration: 2,
        yoyo: Infinity
    }}
>
    <i class="fa fa-star-o" aria-hidden="true"></i>
</motion.div> );
}
 
export default ResumeTemplateStar;