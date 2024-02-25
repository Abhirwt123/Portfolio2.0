import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import '../welcomePage.css'


export default function WelcomePage() {
  const [pageStatus, setPageStatus] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    setTimeout(() => {
      setPageStatus(true)
    }, 3000)
  }, [])
  useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });
    return animation.stop;
  }, []);
  return (
    <div className={`flex justify-center items-center welcomepage ${pageStatus ? "hidden" : ""}`}>
      <motion.h1 className="welcomeCount">{rounded}</motion.h1>
    </div>
  );
}
