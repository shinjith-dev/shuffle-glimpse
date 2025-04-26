"use client";
import { Icon } from "@/ui";
import { motion } from "motion/react";
import { View } from "react-native";

const HeartPop = () => {
  return (
    <div className="flex h-6 w-6 items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, origin: "center" }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon name="solar:heart-angle-bold" size={20} color="#E11D48" />
      </motion.div>
    </div>
  );
};

export default HeartPop;
