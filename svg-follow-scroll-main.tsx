import { createRoot } from "react-dom/client";
import { Skiper19 } from "@/components/ui/svg-follow-scroll";
import "./svg-follow-scroll.css";

const el = document.getElementById("svg-follow-scroll-root");
if (el) {
  createRoot(el).render(<Skiper19 />);
}
