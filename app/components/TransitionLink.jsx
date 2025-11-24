"use client";
import Link from "next/link";
import { useTransition } from "./TransitionContext";

export default function TransitionLink({ href, children, className, ...props }) {
  const { startTransition } = useTransition();

  const handleClick = (e) => {
    console.log("🔗 TransitionLink clicked! href:", href);
    e.preventDefault();
    console.log("✋ preventDefault called");
    if (props.onClick) {
      console.log("📞 Calling props.onClick");
      props.onClick(e);
    }
    
    console.log("🎬 About to call startTransition");
    startTransition(() => {
      console.log("📍 Inside startTransition callback");
      // Check if it's an anchor link (starts with #)
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // For regular links, navigate
        window.location.href = href;
      }
    });
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
